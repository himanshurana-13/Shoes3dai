import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadModelForm from "../components/UploadModelForm";
import ModelList from "../components/ModelList";
import ModelViewer from "../components/ModelViewer";

const Home = () => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      <Navbar onSearch={setSearchQuery} />
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <ModelViewer modelUrl={selectedModel?.url} modelType={selectedModel?.type} />
        </div>
        <aside className="w-1/3 space-y-6">
          <ModelList onSelectModel={setSelectedModel} models={filteredModels} />
          <UploadModelForm onModelUpload={(newModel) => setModels([...models, newModel])} />
        </aside>
      </div>
      <footer className="text-center text-gray-500 mt-10 p-4">
        © 2025 3D Model Viewer. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
