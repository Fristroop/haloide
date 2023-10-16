import express from "express";
import { v4 } from "uuid";

import { catModel, magazineModel } from "../helpers/mongoose.js";
import { isAdmin } from "../helpers/passport.js";

const router = express.Router();
export const CatRouter = router;

router.get("/", async (req, res) => {
  let models = await catModel.find().lean();

  for (const model of models) {
    model.magazines = await magazineModel.find({ catId: model.id });
  }
  res.send(models);
});

router.get("/:id", async (req, res) => {
  const model = await catModel.findOne({ id: req.params.id }).lean();
  if (!model) res.sendStatus(400);
  res.send(model);
});

router.post("/", isAdmin, async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) return res.sendStatus(400);

  const model = await catModel.create({
    id: v4(),
    title,
    description,
  });

  res.send(model);
});

router.delete("/:id", isAdmin, async (req, res) => {
  const model = await catModel.findOne({ id: req.params.id });

  if (!model) res.sendStatus(400);
  
  if (model.magazines.length !== 0) {
    for (const mag of model.magazines) {
      await magazineModel.deleteOne({ id: mag.id });
    }
  }
  await model.deleteOne();

  res.send(model);
});

router.put("/:id", isAdmin, async (req, res) => {
  const models = await catModel.find().lean();
  res.send(models);
});
