
const Kasir = require('../models/kasirModel');
const { roles } = require('../roles')
 
exports.add =  async (req, res) => {
  try {
    const {
      jenisTransaksi,
    } = req.body;
  
    const kasir = new Kasir({
      jenisTransaksi
    });
  
    const createdKasir = await kasir.save();
  
    res.status(201).json(createdKasir);
  } catch (error) {
    res.status(500).json({ error: 'Database creation failed' })
  }
};

 exports.getKasir = async (req, res, next) => {
  const kasirs = await Kasir.find({});
  res.status(200).json({
   data: kasirs
  });
 }
  
 exports.getKasirbyId = async (req, res, next) => {
  try {
   const kasirId = req.params.kasirId;
   const kasir = await Kasir.findById(kasirId);
   if (!kasir) return next(new Error('Kasir does not exist'));
    res.status(200).json({
    data: kasir
   });
  } catch (error) {
   next(error)
  }
 }
  
 exports.updateKasir = async (req, res, next) => {
  try {
   const update = req.body
   const kasirId = req.params.kasirId;
   await Kasir.findByIdAndUpdate(kasirId, update);
   const kasir = await Kasir.findById(kasirId)
   res.status(200).json({
    data: kasir,
    message: 'Kasir has been updated'
   });
  } catch (error) {
   next(error)
  }
 }
  
 exports.deleteKasir = async (req, res, next) => {
  try {
   const kasirId = req.params.kasirId;
   await Kasir.findByIdAndDelete(kasirId);
   res.status(200).json({
    data: null,
    message: 'Kasir has been deleted'
   });
  } catch (error) {
   next(error)
  }
 }


 
exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.kasir.position)[action](resource);
   if (!permission.granted) {
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}
 
exports.allowIfLoggedin = async (req, res, next) => {
 try {
  const kasir = res.locals.loggedInKasir;
  if (!kasir)
   return res.status(401).json({
    error: "You need to be logged in to access this route"
   });
   req.kasir = kasir;
   next();
  } catch (error) {
   next(error);
  }
}