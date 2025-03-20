// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import multer from 'multer';
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/3dModels', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('MongoDB connection error: ', err));

// // MongoDB Schema & Model
// const modelSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   url: String
// });

// const Model = mongoose.model('Model', modelSchema);

// // Set up Multer for file upload (You can adjust the storage path as per your needs)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');  // Store files in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);  // Store files with a unique name
//   }
// });

// const upload = multer({ storage });

// // Mock Data for GET /models
// const mockModels = [
//   { id: 1, name: 'Model 1', url: '/uploads/model1.glb' },
//   { id: 2, name: 'Model 2', url: '/uploads/model2.glb' },
// ];

// // GET /models: Fetch stored models (with mock data)
// app.get('/models', (req, res) => {
//   res.json(mockModels);
// });

// // POST /upload: Upload model data to MongoDB (name, description, file URL)
// app.post('/upload', upload.single('modelFile'), async (req, res) => {
//   const { name, description } = req.body;
//   const modelUrl = req.file ? `/uploads/${req.file.filename}` : null; // URL of the uploaded file

//   if (!modelUrl) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   try {
//     const newModel = new Model({
//       name,
//       description,
//       url: modelUrl
//     });

//     // Save the model data to MongoDB
//     await newModel.save();
//     res.status(201).json({ message: 'Model uploaded successfully', model: newModel });
//   } catch (err) {
//     res.status(500).json({ message: 'Error uploading model', error: err.message });
//   }
// });

// // Server setup
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
