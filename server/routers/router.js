import express from "express";
import { UsersRouter } from "./users-router.js";
import { CatRouter } from "./category-router.js";
import { MagazineRouter } from "./magazine-router.js";

const app = express.Router();
export const router = app;

router.use("/users", UsersRouter);
router.use("/categories", CatRouter);
router.use("/magazines", MagazineRouter);

router.get("/", (req, res) => {
  res.send({ message: "API is working!" });
});
