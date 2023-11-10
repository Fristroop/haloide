import fs from "fs";
import { DeleteObjectCommand, PutObjectCommand, S3 } from "@aws-sdk/client-s3";

const bucketName = "fristroop";

export const storage = new S3({
  region: "auto",
  endpoint: "https://a106de41cb17fee9c2fb9aed6e4d952a.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "c51b56cc81ed9f2f87340c9afccf7313",
    secretAccessKey: process.env.r2AccessKey,
  },
});

export const uploadFile = async (dest, file) => {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Body: fs.readFileSync(file.path),
    Key: `halodergisi/${dest}/${file.filename}`,
    ContentType: file.mimetype,
  });

  await storage.send(command);

  return command.input.Key;
};

export const deleteFile = async (Key) => {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key,
  });

  return await storage.send(command);
};
