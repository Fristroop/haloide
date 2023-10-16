import "dotenv/config.js";
//import "./helpers/mongoose.js"
//import "./helpers/passport.js";
import "./server.js";


import { Storage } from "@google-cloud/storage";

export const storage = new Storage({
    keyFilename: "halo-402109-1609187220f8.json"
})