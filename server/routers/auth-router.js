import express from "express";
import passport from "passport";

const router = express.Router();
export const AuthRouter = router;

// Kullanıcı girişi
router.post("/", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(404).send({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      console.log(user);
      return res.send(user);
    });
  })(req, res);
});
