const express = require('express');
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');
const FilesController = require('../controllers/FilesController');

function routes(app) {
  const router = express.Router();
  app.use('/', router);


  router.get('/status', (req, res) => {
    AppCOntroller.getStatus(req, res);
  });

  router.get('/stats', (req, res) => {
    AppCOntroller.getStats(req, res);
  });
}

exports default routes
