export const API = import.meta.env.PROD
  ? "http://api.haloide.fristroop.com"
  : "http://localhost:3000";

console.log(API);
