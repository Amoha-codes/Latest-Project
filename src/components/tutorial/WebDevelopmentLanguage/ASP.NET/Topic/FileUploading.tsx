import React, { useState } from "react";

const FileUploadComponent: React.FC = () => {
  const [fileInfo, setFileInfo] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // Simulate saving the file (you would handle this with a backend API in real apps)
        const info = `
          Uploading file: ${file.name}
          File type: ${file.type}
          File size: ${file.size} bytes
        `;
        setFileInfo(info);
      } catch (error: any) {
        setFileInfo(`Error: Unable to save file. ${error.message}`);
      }
    } else {
      setFileInfo("No file selected.");
    }
  };

  return (
    <div className="mt-20 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-3">ASP.NET File Uploading</h1>

      {/* Intro */}
      <p className="leading-relaxed">
        In ASP.NET, file uploading can be done using the <strong>FileUpload</strong> control. 
        This control allows the user to browse for a file and submit it to the server.
      </p>

      {/* File Upload Example */}
      <h2 className="text-2xl font-bold">Example: File Upload</h2>
      <div className="flex flex-col space-y-4">
        <input 
          type="file" 
          className="border p-2 rounded" 
          onChange={handleFileUpload} 
        />
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded w-24" 
          onClick={() => alert(fileInfo || "No file selected")}
        >
          Save
        </button>
      </div>

      {/* Display file info */}
      {fileInfo && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p className="whitespace-pre-line">{fileInfo}</p>
        </div>
      )}

      {/* Notes */}
      <h2 className="text-2xl font-bold mt-6">Notes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>The <strong>FileUpload</strong> control automatically sets form encoding for file upload.</li>
        <li>The <code>HasFile</code> property checks if a file is selected.</li>
        <li>The <code>PostedFile</code> property gives access to file details like <code>FileName</code>, <code>ContentType</code>, and <code>InputStream</code>.</li>
        <li>Use <code>try/catch</code> blocks to handle errors during file saving.</li>
        <li>In React, file handling is usually done on the frontend first, then sent to a backend API for saving.</li>
      </ul>
    </div>
  );
};

export default FileUploadComponent;
