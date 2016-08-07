// let mongoose    = require('mongoose');
// let bcrypt = require('bcrypt');
// let jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
let config = require('./config'); // get our config file
// let User   = require('./models/user'); // get our mongoose model
// let _ = require("lodash");
let r = require('rethinkdb');


let connection = null;
r.connect( config.rethinkdb, function(err, conn) {
    if (err) throw err;
    connection = conn;
});

function validate_email(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate_phone(phone) {
    var re = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    return re.test(phone);
}

function validate_tshirt(size) {
    if(size != "XS" && size != "S" && size != "M" && size != "L" && size != "XL" && size != "2XL"){
      return false;
    }
    return true;
}



module.exports = {

  assureDB: function(req, res, next){

    try {
      r.dbCreate(config.rethinkdb.db_name).run(connection).then(function(result) {
        next();
      }).error(function(err){
        if(err.message.includes("already exists")){
          next();
        }else{
          res.status(500);
          res.send({'message': "error creating db"});
        }

      })
    } catch (e) {
        // statements to handle TypeError exceptions
        // res.send({'message': "error creating db"});
    } 

  },
  createSignUpTable: function(req, res, next){
    r.db(config.rethinkdb.db_name).tableCreate(config.rethinkdb.signup_table).run(connection).then(function(result) {
      res.status(200);
      res.send({"message": "Table created"});
    }).error(function(err){
      res.status(500);
      res.send({'message': "Error creating sign up table"});  
    });
  },
  createTeam: function(req, res){
    if(!req.body.team_name){
      res.status(409);
      res.send({'message': "Team Name not provided"});
      return;
    }
    else if(req.body.team_name.length < config.min_team_name_length){
      res.status(409);
      res.send({'message': "Team Name not long enough"});
      return;
    }
    else if(!req.body.members){
      res.status(409);
      res.send({'message': "Team members not provided"});
      return;
    }
    else if(!req.body.members){
      res.status(409);
      res.send({'message': "Team members not provided"});
      return;
    }
    else if(! (req.body.members.length >= config.min_users) ){
      let members = JSON.parse(req.body.members);

      let more_members = (config.min_users - members.length);
      res.status(409);
      res.send({'message': "You need " + more_members + " more members to register"});
      return;
    }
    else if(!req.body.contact_email){
      res.status(409);
      res.send({'message': "Contact email not provided"});
      return;
    }
    else if(!validate_email(req.body.contact_email)){
      res.status(409);
      res.send({'message': "Contact email not valid"});
      return;
    }
    else if(!req.body.contact_phone_number){
      res.status(409);
      res.send({'message': "Contact phone number not provided"});
      return;
    }
    else if(!validate_phone(req.body.contact_phone_number)){
      res.status(409);
      res.send({'message': "Contact phone number not valid"});
      return;
    }
    else{

      //validate each member 
      let members = JSON.parse(req.body.members);

      for(let item in members) {
        let member = members[item];
        if(!member.first_name){
          res.status(409);
          res.send({'message': "First name of team member not provided"});
          return;
        }
        else if(!member.last_name){
          res.status(409);
          res.send({'message': "Last name of team member not provided"});
          return;
        }
        else if(!member.email){
          res.status(409);
          res.send({'message': "Email of team member not provided"});
          return;
        }
        else if(!validate_email(member.email)){
          res.status(409);
          res.send({'message': "Email of team member not valid"});
          return;
        }
        else if(!member.tshirt_size){
          res.status(409);
          res.send({'message': "Tshirt size of member not provided"});
          return;
        }
        else if(!validate_tshirt(member.tshirt_size)){
          res.status(409);
          res.send({'message': "Tshirt size of member not valid"});
          return;
        }
        else if(!member.phone_number){
          res.status(409);
          res.send({'message': "Phone number of member not provided"});
          return;
        }
        else if(!validate_phone(member.phone_number)){
          res.status(409);
          res.send({'message': "Phone number of member not valid"});
          return;
        }

      }
      r.db(config.rethinkdb.db_name).table(config.rethinkdb.signup_table).filter({team_name: req.body.team_name}).run(connection).then(function(result) {
        result.toArray(function(err1, teams){
          if(teams.length > 0){
            res.status(409);
            res.send({'message': "Team name has already been taken"});
            return;
          }
          else{
            r.db(config.rethinkdb.db_name).table(config.rethinkdb.signup_table).insert({
                team_name: req.body.team_name,
                members: JSON.parse(req.body.members),
                contact_email: req.body.contact_email,
                contact_phone_number: req.body.contact_phone_number
            }).run(connection, function(err, insertResult){
              if(err){
                res.status(500);
                res.send({'message': "There was an error saving your team. Please contact us!"});
                return;
              }else{
                res.send({'message': 'Your team has been saved successfully!'});
                return;
              }
            });
          }
        });
      }).error(function(err){
        res.status(500);
        res.send({'message': "Internal error. Please notify us!"});
      });
    }
  },
  authenticateRoute: function(req, res, next) {

    // check header or url parameters or post parameters for token
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  },
  login : function(req, res){
    // find the user
    console.log(req.body);
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      console.log(req.body.email);

      if (err) throw err;

      if (!user) {
        res.json({ success: false, errorSource: "email", message: 'Authentication failed. User not found.' });
      } else if (user) {

        if(!user.admin){
          res.json({ success: false, errorSource: "email", message: 'Authentication failed. Not admin' });

        }

        // check if password matches
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.json({ success: false, errorSource: "password", message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          let token = jwt.sign(user, config.secret, {
            expiresIn: '1440m'
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }

      }

    });
  }





};
