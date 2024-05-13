const express = require('express');
const controllerRouting = require('./routes/index')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listening(port, () => {
  console.log('server running on port ${port}');
});

export default app;
