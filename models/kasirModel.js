const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const KasirSchema = new Schema({
 jenisTransaksi: {
  type: String,
  required: true,
  trim: true
 },
});
 
const Kasir = mongoose.model('kasir', KasirSchema);
 
module.exports = Kasir;