import express from "express";
import session from "express-session";
import passport from "passport";
import MongoDBStore from "connect-mongodb-session";
import cors from "cors";
import { router } from "./routers/router.js";
import { upload } from "./helpers/multer.js";
import { config } from "./config.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.origin,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());

// Session ve Passport
const store = new MongoDBStore(session)({
  uri: process.env.mongodb,
});

app.use(
  session({
    secret: process.env.secret_key,
    resave: true,
    saveUninitialized: true,
    store,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Route
app.use(router);

// Listen
app.listen(config.port, () =>
  console.log(`Server is running on http://localhost:${config.port}`)
);
