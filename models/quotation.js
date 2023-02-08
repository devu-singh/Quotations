const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Quotation = mongoose.model('user',userSchema);
module.exports = Quotation;