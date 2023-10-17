export const API = import.meta.env.PROD
  ? "http://api.halo.fristroop.com"
  : "http://localhost:3000";

console.log(API);
