import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export function isCloudinaryConfigured(): boolean {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
  );
}

export async function uploadImage(
  file: Buffer,
  folder = "goabroadly/blogs"
): Promise<{ url: string; publicId: string }> {
  if (!isCloudinaryConfigured()) {
    throw new Error("Cloudinary is not configured");
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
        transformation: [{ quality: "auto", fetch_format: "auto" }],
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Upload failed"));
          return;
        }
        resolve({ url: result.secure_url, publicId: result.public_id });
      }
    );
    stream.end(file);
  });
}

export async function deleteImage(publicId: string): Promise<void> {
  if (!isCloudinaryConfigured()) {
    throw new Error("Cloudinary is not configured");
  }
  await cloudinary.uploader.destroy(publicId);
}

export function getOptimizedImageUrl(
  url: string,
  width = 800
): string {
  if (!url.includes("cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
}

export { cloudinary };
