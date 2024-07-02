const connectToMongo = require('./DB_Connection/db');
connectToMongo();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
const upload = require('../Backend/Middleware/multerMiddleware');
const upload3DModel = require('./Model/uploadModel');
app.post('/uploadModel', upload.single('file'), async (req, res) => {
  console.log('This is request.body: ' + JSON.stringify(req.file));

  // console.log('This is request.FILE: ' + req.file);

  try {
    // MongoDB upload logic
    const newModel = new upload3DModel({
      file3D: req.file.filename,
    });

    // Save the model to MongoDB
    await newModel.save();
    res.json({message: 'Model uploaded successfully'});
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

// app.use(bodyParser.json());
// app.post('/uploadModel', async (req, res) => {
//   console.log(req.body);
//   res.json('Model Upload API');
// });

app.listen(port, () => {
  console.log('Server running on port:' + port);
});
