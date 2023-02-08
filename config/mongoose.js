const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/quotation_development')

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error'));
db.once('open',()=>{
   console.log("connected db")
})

module.exports = db;