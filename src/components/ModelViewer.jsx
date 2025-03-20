import React, { useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import * as tf from "@tensorflow/tfjs"; // ✅ Correctly import TensorFlow.js


const ModelViewer = ({ modelUrl }) => {
  const viewerRef = useRef(null);
  const canvasRef = useRef(null);
  const [predictions, setPredictions] = useState([]);

  const analyzeModel = async () => {
    if (!viewerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 224;
    canvas.height = 224;

    const modelViewerCanvas = viewerRef.current.shadowRoot.querySelector("canvas");
    if (!modelViewerCanvas) {
      console.error("Error: Unable to find model canvas.");
      return;
    }

    context.drawImage(modelViewerCanvas, 0, 0, canvas.width, canvas.height);

    console.log("Captured model image, loading Coco-SSD...");

    try {
      const model = await cocoSsd.load(); // Load Coco-SSD model
      console.log("Coco-SSD Model Loaded!");

      const image = tf.browser.fromPixels(canvas);
      const results = await model.detect(image); // Detect objects

      console.log("Predictions:", results);
      setPredictions(results);
    } catch (error) {
      console.error("Error in AI detection:", error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-lg font-bold">Model Preview</h2>
      <model-viewer
        ref={viewerRef}
        src={modelUrl}
        auto-rotate
        camera-controls
        style={{ width: "400px", height: "400px" }}
      />
      <button onClick={analyzeModel} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Analyze Model
      </button>

      <canvas ref={canvasRef} className="border border-gray-500 mt-4"></canvas>

      {predictions.length > 0 && (
        <div className="mt-4 bg-gray-200 p-2 rounded">
          <h3 className="font-bold">Predictions:</h3>
          <ul>
            {predictions.map((p, index) => (
              <li key={index}>
                {p.class} - {Math.round(p.score * 100)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelViewer;
