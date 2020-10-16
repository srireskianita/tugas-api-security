const express = require('express');
const kasirRouter = express.Router();

const kasirController = require('../controllers/kasirController');
 
kasirRouter.post('/add', kasirController.allowIfLoggedin, kasirController.grantAccess('addAny', 'transaction'), kasirController.add);
 
kasirRouter.get('/kasir/:kasirId', kasirController.allowIfLoggedin, kasirController.getKasirbyId);
 
kasirRouter.get('/kasir', kasirController.allowIfLoggedin, kasirController.getKasir);
 
kasirRouter.put('/kasir/:kasirId', kasirController.allowIfLoggedin, kasirController.updateKasir);
 
kasirRouter.delete('/kasir/:kasirId', kasirController.allowIfLoggedin, kasirController.deleteKasir);
 
module.exports = kasirRouter;