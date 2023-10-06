import express from "express";
import { isLoggedIn } from "../helpers/passport";

const router = express.Router();
export const UsersRouter = router;

// Kullanıcı bilgilerini getir
router.get("/@me", isLoggedIn, (req, res) => {
  const user = req.user;
  user.password = ""; // Şifreyi gizle
  res.send(user);
});

// Yeni kullanıcı kaydı
router.post("/", async (req, res) => {
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
    username,
    email,
    password,
  });

  res.send(newUser);
});
