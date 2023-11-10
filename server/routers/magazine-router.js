import express from "express";
import { v4 } from "uuid";
import fs from "fs";

import { catModel, magazineModel } from "../helpers/mongoose.js";
import { isAdmin } from "../helpers/passport.js";

// Storage
import { storage, uploadFile } from "../index.js";
import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const router = express.Router();
export const MagazineRouter = router;

router.get("/", async (req, res) => {
  const models = await magazineModel.find().lean();
  res.send(models);
});

router.get("/:id", async (req, res) => {
  const model = await magazineModel.findOne({ id: req.params.id }).lean();
  if (!model) return res.sendStatus(400);
  res.send(model);
});

router.post("/", isAdmin, async (req, res) => {
  const { title, description, catId } = req.body;
  const banner = req.files.find((f) => f.fieldname === "banner");
  const pdf = req.files.find((f) => f.fieldname === "file");
  if (!banner || !pdf)
    return res.status(400).send({ message: "Missing Files" });

  const cmd_banner = await uploadFile("thumbnails", banner);
  const cmd_pdf = await uploadFile("dergiler", pdf);

  const model = await magazineModel.create({
    id: v4(),
    title,
    description,
    catId,
    timestamp: Date.now(),
    thumbnail: cmd_banner.input.Key,
    file: cmd_pdf.input.Key,
  });

  const cat = await catModel.findOne({ id: catId });
  cat.magazines.push(model.id);
  await cat.save();

  fs.unlinkSync(banner.path);
  fs.unlinkSync(pdf.path);

  res.send(model);
});

router.delete("/:id", isAdmin, async (req, res) => {
  const model = await magazineModel.findOne({ id: req.params.id });

  if (!model) res.sendStatus(400);

  const thumbnail = new DeleteObjectCommand({
    Bucket: "fristroop",
    Key: model.thumbnail,
  });

  const pdf = new DeleteObjectCommand({
    Bucket: "fristroop",
    Key: model.file,
  });

  await storage.send(thumbnail);
  await storage.send(pdf);

  await model.deleteOne();

  res.send(model);
});

router.put("/:id", isAdmin, async (req, res) => {
  const data = req.body;
  const model = await magazineModel.findOne({ id: req.params.id });

  const banner = req.files.find((f) => f.fieldname === "banner");
  if (banner) {
    const g_banner = new PutObjectCommand({
      Bucket: "fristroop",
      Body: banner.path,
      Key: `halodergisi/thumbnails/${banner.filename}`,
    });

    await storage.send(g_banner);
    data.thumbnail = g_banner.input.Key;
    fs.unlinkSync(banner.path);
  }

  const pdf = req.files.find((f) => f.fieldname === "file");
  if (pdf) {
    const g_pdf = new PutObjectCommand({
      Bucket: "fristroop",
      Body: pdf.path,
      Key: `halodergisi/dergiler/${pdf.filename}`,
    });
    await storage.send(g_pdf);

    data.file = g_pdf.input.Key;

    fs.unlinkSync(pdf.path);
  }

  // Save
  Object.assign(model, data);
  await model.save();
  res.send(model);
});
