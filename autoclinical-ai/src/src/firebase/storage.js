import { storage } from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Upload a medical PDF/Image to Firebase Storage
export const uploadReportFile = (file, userId, onProgress) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file provided");

    const storageRef = ref(storage, `medical_reports/${userId}/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (onProgress) onProgress(progress);
      }, 
      (error) => {
        reject(error.message);
      }, 
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};
