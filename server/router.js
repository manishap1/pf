const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const User = require('./models/user');
const Messages = require('./models/messages');
const Donate = require('./models/donate');
const express = require('express')
var path = require('path')

const requireAuth = passport.authenticate('jwt',{ session: false });
const requireSignin = passport.authenticate('local',{ session: false});

module.exports = function(app){
  app.get('/test', requireAuth, function(req,res){
    console.log('aasdfdfsf')
    res.send({message : 'Super secret code is ABC123'});
  });
  app.post('/signin',requireSignin,Authentication.signin);
  app.post('/signup', Authentication.signup);
    // app.get('/',function(req,res,next){
    //   res.send(['waterbottel','coke']);
    // });
  app.post('/donate',function(req,res){
    console.log("A Form is posted to create Donate " + req.body.name);
    const doc = new Donate({
     
       name : req.body.name,
      fType : req.body.fType,
      expDate: req.body.expDate,
      note : req.body.note,
      zip : req.body.zip
       })
       console.log('trying to save');
    doc.save();

    console.log('saved');
    res.json({success: true});
  });


 
  app.post('/messages',function(req,res){
    console.log("A Form is posted to create messges " + req.body.emailTo);
    const doc = new Messages({
     
       emailTo : req.body.emailTo,
  message : req.body.message,
  emailFrom :req.body.emailFrom
       })
       console.log('trying to save');
    doc.save();

    console.log('saved');
    res.json({success: true});
  });

  
  //serve front end 
  app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')))
  app.use(express.static(path.resolve(__dirname, '../client')))

  app.get('/find', (req, res) => {
    console.log('hello world');
    Donate.find({}, function(err, docs) {
      if (!err){ 
          console.log(docs);
          res.json({data: docs});
          // process.exit();
      } else {throw err;}
  });
    // Donate.find({recipient: req.user._id}, (err, docs) => {
    //   res.json(docs)
    // })
  })

  app.get('/notify', (req, res) => {
    console.log('hello world');
    Messages.find({}, function(err, docs) {
      if (!err){ 
          console.log(docs);
          res.json({data: docs});
          // process.exit();
      } else {throw err;}
  });
    // Donate.find({recipient: req.user._id}, (err, docs) => {
    //   res.json(docs)
    // })
  })
   
}

    /**
     * req.body should look like {
     *  content: string,
     *  recipient: user's _id,
     *
     *  
     * }
     */
