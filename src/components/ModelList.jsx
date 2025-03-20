
const ModelList = ({ onSelectModel, models }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">Available Models</h2>
      {models.length === 0 ? (
        <p className="text-gray-500">No models uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {models.map((model, index) => (
            <li
              key={index}
              onClick={() => onSelectModel(model)}
              className="cursor-pointer hover:bg-gray-200 p-2 rounded"
            >
              {model.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModelList;
