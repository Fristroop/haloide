import express from "express";
import { UsersRouter } from "./users-router.js"
import { AuthRouter } from "./auth-router.js";

const app = express.Router();
export const router = app;

router.use("/users", UsersRouter)
router.use("/auth", AuthRouter);

router.get("/", (req,res) => {
    res.send({ message: "API is working!"})
})