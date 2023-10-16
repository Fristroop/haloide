import express from "express";
import passport from "passport";

import { isLoggedIn } from "../helpers/passport.js";
import { userModel } from "../helpers/mongoose.js";

const router = express.Router();
export const UsersRouter = router;

// Kullanıcı bilgilerini getir
router.get("/@me", isLoggedIn, (req, res) => {
  const user = req.user;
  user.password = ""; // Şifreyi gizle
  res.send(user);
});

// Kullanıcı Girişi
router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(400).send({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      console.log(user);
      return res.send(user);
    });
  })(req, res);
});

// Yeni kullanıcı kaydı
router.post("/register", async (req, res) => {
  let { username, email, password } = req.body;
  username = username.toLowerCase();

  // Kullanıcı adı veya e-posta adresi veritabanında mevcutsa kontrol et
  const userExist = await userModel.findOne({ $or: [{ username }, { email }] });

  if (userExist) {
    return res
      .status(400)
      .send({ message: "This username/mail is already taken!" });
  }

  // Yeni kullanıcı verisini oluştur ve kaydet
  const newUser = await userModel.create({
    id: v4(),
    createdAt: Date.now(),
    type: "user",
    username,
    email,
    password,
  });

  res.send(newUser);
});
