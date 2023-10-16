import passport from "passport";
import { Strategy } from "passport-local";
import { userModel } from "./mongoose.js";

passport.use(
  new Strategy(async (username, password, done) => {
    const user = await userModel.findOne({ email: username });

    // 404
    if (!user) {
      return done(null, false, "User is not found!");
    }

    // 403
    if (password !== user.password) {
      return done(null, false, "Invalid password!");
    }

    // Success
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findOne({ id });
  done(null, user);
});

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 * @returns
 */
export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.sendStatus(401);
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.type === "admin") {
    return next();
  }

  return res.sendStatus(403);
};
