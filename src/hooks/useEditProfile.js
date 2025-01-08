import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { uploadToCloudinary } from "../cloudinaryService/cloudinaryService"; 
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useAuthStore((state) => state.user);
    const setAuthUser = useAuthStore((state) => state.setUser);
    const showToast = useShowToast();

    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return;
        setIsUpdating(true);

        let profilePicURL = authUser.profilePicURL;

        try {
            if (selectedFile) {
                // Upload the file to Cloudinary
                profilePicURL = await uploadToCloudinary(selectedFile);
            }

            
            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicURL,
            };

            const userDocRef = doc(firestore, "users", authUser.uid);
            await updateDoc(userDocRef, updatedUser);

            
            localStorage.setItem("user-info", JSON.stringify(updatedUser));
            setAuthUser(updatedUser);

            showToast("Success", "Profile updated successfully", "success");
        } catch (error) {
            console.error(error);
            showToast("Error", error.message, "error");
        } finally {
            setIsUpdating(false);
        }
    };

    return { editProfile, isUpdating };
};

export default useEditProfile;
