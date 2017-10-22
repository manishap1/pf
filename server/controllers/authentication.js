const jwt =require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
const Donate = require('../models/donate');
const Messages = require('../models/messages');




function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub : user.id , iat : timestamp}, config.secret );
}

exports.signin = function(req,res,next){
    //user has already has email and password and we have to give them token
    res.send({ token : tokenForUser(req.user)});
}

exports.signup = function(req,res,next){
// res.send({success:'true'});
 console.log(req.body.email);
const email = req.body.email;
const password = req.body.password;

if(!email || !password){
    return res.status(422).send({err : 'You must provide email and password'});
}

//see if user with the given email exists
User.findOne({email : email}, function(err, existingUser){
    if(err){ return next(err);}
    //if a user with email does exist, return an error
    if(existingUser){
        return res.status(422).send({err : 'email is already in use'});
    }

    // if a user with email doen't exist, save the user
    const user = new User({
          email : email,
          password : password
    });

    //save user to the database
    user.save(function(err){
        if(err){ return next(err)}

        //respond to indicate that user has been created and saved
        res.json({token : tokenForUser(user) });
    });
    
});

}

exports.donate = function(req,res,next){
    // res.send({success:'true'});name,fType,expDate,note,zip
     console.log(req.body.name);
    const name = req.body.name;
    const fType = req.body.fType;
    const expDate= req.body.expDate ;
    const note = req.body.note ;
    const zip= req.body.zip ;
        // if a user with email doen't exist, save the user
        const donate = new Donate({
            //   email : email,
            name:name,
            fType : fType,
            expDate : expDate,
            note : note,
            zip : zip

        });
    
        //save user to the database
        user.save(function(err){
            if(err){ return next(err)}
    
            //respond to indicate that user has been created and saved
            res.json({token : tokenForUser(user) });
        });
        
    }


// exports.messages = function(req,res,next){
        
//          console.log(req.body.emaiFrom);
//         const emailTo = req.body.emailTo;
//         const messages = req.body.messages;
//         const emailFrom= req.body.emailFrom ;
        
        
        
//             const messages = new Messages({
//                   emailTo : emailTo,
//                   messages : messages,
//                   emaiFrom : emailFrom
//                 });
        
//             //save user to the database
//             user.save(function(err){
//                 if(err){ return next(err)}
        
//                 //respond to indicate that user has been created and saved
//                 res.json({token : tokenForUser(user) });
//             });
            
//         }

exports.messages = function(req,res,next){
    // res.send({success:'true'});name,fType,expDate,note,zip
     console.log(req.body.emailTo);
    const emailTo = req.body.emailTo;
    const message = req.body.message;
    const emailFrom = req.body.emailFrom ;
    
        // if a user with email doen't exist, save the user
        const messages = new Massages({
            //   email : email,
            emailTo : emailTo,
            message : message,
            emailFrom : emailFrom

        });
    
        //save user to the database
        user.save(function(err){
            if(err){ return next(err)}
    
            //respond to indicate that user has been created and saved
            res.json({token : tokenForUser(user) });
        });
        
    }

    exports.find = function (req, res){
        //app.get('api//groceryitem'
        Donate.find({}, function(err, theArray){
          if (!err){
            res.json(theArray);
          }
        }); //GroceryItemsModel.find
      }; 
