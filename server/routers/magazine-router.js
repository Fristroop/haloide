import express from "express";
import { v4 } from "uuid";

import { catModel, magazineModel } from "../helpers/mongoose.js";
import { isAdmin } from "../helpers/passport.js";
import { storage } from "../index.js";
import fs from "fs";

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
  if (!banner || !pdf) return res.sendStatus(400);

  const g_banner = await storage.bucket("halodergisi").upload(banner.path);
  const g_pdf = await storage.bucket("halodergisi").upload(pdf.path);

  const model = await magazineModel.create({
    id: v4(),
    title,
    description,
    catId,
    timestamp: Date.now(),
    banner: g_banner[0].metadata.mediaLink,
    file: g_pdf[0].metadata.mediaLink,
  });

  const cat = await catModel.findOne({ id: catId });
  cat.magazines.push(model.id);
  await cat.save();

  fs.unlinkSync(banner.path);
  fs.unlinkSync(pdf.path);

  res.send(model);
});

router.delete("/:id", isAdmin, async (req, res) => {
  const model = await magazineModel.deleteOne({ id: req.params.id });
  if (!model) res.sendStatus(400);
  res.send(model);
});

router.put("/:id", isAdmin, async (req, res) => {
  const data = req.body;
  const model = await magazineModel.findOne({ id: req.params.id });

  const banner = req.files.find((f) => f.fieldname === "banner");
  if (banner) {
    const g_banner = await storage.bucket("halodergisi").upload(banner.path);
    data.banner = g_banner[0].metadata.mediaLink;
    fs.unlinkSync(banner.path);
  }
  const pdf = req.files.find((f) => f.fieldname === "file");
  if (pdf) {
    const g_pdf = await storage.bucket("halodergisi").upload(pdf.path);
    data.file = g_pdf[0].metadata.mediaLink;
    fs.unlinkSync(pdf.path);
  }

  // Save
  Object.assign(model, data);
  await model.save();
  res.send(model);
});
