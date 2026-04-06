import React from 'react';
import { FileText } from 'lucide-react';

const FilePreviewCard = ({ fileName = "lab_report_april.pdf", fileSize = "2.4 MB" }) => {
  return (
    <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
      <div style={{ background: '#E0F2FE', padding: '12px', borderRadius: '8px', color: '#0284C7' }}>
        <FileText size={24} />
      </div>
      <div>
        <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#0F172A' }}>{fileName}</p>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>{fileSize} • Uploaded just now</p>
      </div>
    </div>
  );
};

export default FilePreviewCard;
