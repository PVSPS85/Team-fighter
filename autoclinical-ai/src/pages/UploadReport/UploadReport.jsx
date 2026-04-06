import UploadBox from "../../components/UploadBox/UploadBox";
import { uploadReportFile } from "../../firebase/storage";

export default function UploadReport() {
  const handleUpload = async (file) => {
    try {
      const res = await uploadReportFile(file);
      console.log("Uploaded:", res);
      alert("Upload successful");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h1>Upload Report</h1>
      <UploadBox onUpload={handleUpload} />
    </div>
  );
}
