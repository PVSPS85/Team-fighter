import React, { useCallback } from 'react';
import { UploadCloud } from 'lucide-react';
import './UploadBox.css';

const UploadBox = ({ onFileSelect }) => {
  
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  }, [onFileSelect]);

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div 
      className="upload-box"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="upload-box-icon">
        <UploadCloud size={32} color="#0B7B8A" />
      </div>
      <h3>Drag & drop your medical report</h3>
      <p>or click to browse files</p>
      <input 
        type="file" 
        id="file-upload" 
        className="file-input-hidden"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileInput}
      />
      <label htmlFor="file-upload" className="btn-browse-small">
        Browse Files
      </label>
    </div>
  );
};

export default UploadBox;
