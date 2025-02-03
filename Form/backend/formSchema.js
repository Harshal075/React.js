const mongoose = require('mongoose');

const FromSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number,
        message:String
    }
)

const FormModel = mongoose.model('FormData',FromSchema);
module.exports = FormModel;