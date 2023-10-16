import mongoose, { Schema } from "mongoose";

mongoose.set("strictQuery", true);
await mongoose
  .connect(process.env.mongodb)
  .then(() => console.log("Mongoose connection is successfull!"))
  .catch((err) => {
    throw new Error(err);
  });

// User Model
export const userModel = mongoose.model(
  "user",
  new Schema({
    id: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    password: { type: String },
    type: { type: String },
    createdAt: { type: String },
    lastLogin: { type: Object },
  })
);

// User Model
export const catModel = mongoose.model(
  "category",
  new Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String },
    description: { type: String },
    magazines: { type: [] },
  })
);

// User Model
export const magazineModel = mongoose.model(
  "magazine",
  new Schema({
    id: { type: String, required: true, unique: true },
    catId: { type: String },
    title: { type: String },
    description: { type: String },
    banner: { type: String },
    file: { type: String },
    timestamp: { type: String },
  })
);
