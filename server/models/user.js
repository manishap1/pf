const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//define our model
const userSchema = new Schema({
    email : { type: String, unique :true , lowercase : true},
    password : String
});

//on save hook, encrypt password
userSchema.pre('save',function(next){
    // get access to the user model
  const user = this;

  //generate a salt then callback
  bcrypt.genSalt(10,function(err,salt){
      if(err){return next(err);}
       //hash or encrypt our passwords using salt
      bcrypt.hash(user.password,salt,null,function(err,hash){
          if(err){return next(err);}
          //overwrite plain password with encrypted password
          user.password=hash;
          next();
      });
  });
});


userSchema.methods.comparePassword = function(candidatePassword,callback){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err){ return callback(err);}
        callback(null,isMatch);
    })
}
//create the model class

//export the model
module.exports = mongoose.model('User', userSchema);
