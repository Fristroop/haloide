import "dotenv/config.js";
//import "./helpers/mongoose.js"
//import "./helpers/passport.js";
import "./server.js";

process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);
});
