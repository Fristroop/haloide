export const API = import.meta.env.PROD
  ? process.env.VITE_API
  : "http://localhost:3000";

export const CDN = "https://cdn.fristroop.com/";
console.log(API);
