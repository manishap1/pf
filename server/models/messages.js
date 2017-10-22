 const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define our model
const messagesSchema = new Schema({
    emailTo : { type: String, unique :true , lowercase : true},
    message : String,
    emailFrom :  { type: String, unique :true , lowercase : true}
});

//export the model
module.exports = mongoose.model('Messages', messagesSchema);
