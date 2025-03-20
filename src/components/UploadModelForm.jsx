import { useState } from "react";

const UploadModelForm = ({ onModelUpload }) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    const fileType =
      file.type.startsWith("image/") ? "image" : 
      file.name.endsWith(".glb") || file.name.endsWith(".gltf") ? "model" : "unknown";

    const newModel = {
      name: name || "Unnamed Model",
      url: fileUrl,
      type: fileType, // Add type for 3D models or images
    };

    if (fileType === "unknown") {
      alert("Unsupported file type");
      return;
    }

    onModelUpload(newModel);
    setFile(null);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg space-y-4">
      <h2 className="text-lg font-bold">Upload New Model</h2>
      <input
        type="text"
        placeholder="Model Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default UploadModelForm;
