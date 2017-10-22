const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define our model
const donateSchema = new Schema({
    name : { type: String, unique :true , lowercase : true},
    fType : String,
    expDate : String,
    note : String,
    zip : Number
});

//export the model
module.exports = mongoose.model('Donate', donateSchema);
