import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_proxy_secret: process.env.CLOUDINARY_SSECRET
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'productos'
    });
};

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id);
};