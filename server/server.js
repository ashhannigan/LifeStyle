const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../dist')));
 // Serve static files from 'build'

// The crucial change: Handle all GET requests by serving index.html
app.get('/*', (req, res) => {  // Match ALL get routes (*)
  res.sendFile(path.join(__dirname, '../dist/client/index.html'), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred");
    }
  });
});
app.use('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/client/index.html'));
});

// Default middleware error handler (keep this for debugging)
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Look at this --> Server is running @ ${PORT}`);
});
// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// require('dotenv').config();
// import resultsRouter from './routes/resultsRouter';
// import userDashRouter from './routes/userDashRouter';
// import tempDashRouter from './routes/tempDashRouter';
// import {errorHandler} from './errors/errorHandler';

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Default middleware
// app.use(bodyParser.json({limit: '10mb'}));
// app.use(cors());
// app.use(express.static(path.resolve(__dirname, '../../dist')));

// // Endpoints
// app.use('/results', resultsRouter);
// app.use('/tempDash', tempDashRouter);
// app.use('/userDash', userDashRouter);

// // Catch all
// app.use('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../../dist//client/index.html'));
// });

// // Global error handler
// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(` 🚀 Server running on port ${PORT}`);
// });