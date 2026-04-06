import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig";

export const storage = getStorage(app);

export const uploadReportFile = async (file, folder = "reports") => {
  if (!file) throw new Error("No file provided");

  const safeName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
  const fileRef = ref(storage, `${folder}/${safeName}`);

  const snapshot = await uploadBytes(fileRef, file);
  const url = await getDownloadURL(snapshot.ref);

  return {
    path: snapshot.ref.fullPath,
    url,
    name: file.name,
    type: file.type,
    size: file.size,
  };
};
