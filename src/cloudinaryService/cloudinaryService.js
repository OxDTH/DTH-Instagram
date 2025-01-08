import axios from "axios";

const CLOUD_NAME = "dagzemgnc";
const UPLOAD_PRESET = "profile_pictures"; // See Step 4 to create it

export const uploadToCloudinary = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
        );

        return response.data.secure_url; // URL of the uploaded image
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error("Failed to upload image.");
    }
};
