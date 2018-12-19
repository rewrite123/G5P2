var db = require("../models");
var passwordValidator = require('password-validator');

// var schema = new passwordValidator();

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  
  // schema
      // .is().min(8)                                   
      // .is().max(100)                                 
      // .has().uppercase()                             
      // .has().lowercase()                             
      // .has().digits()                                
      // .has().not().spaces();  
      
  //This is an example of logging in.
  app.post("/api/login", function(req, res){
    //console.log("----------\nusername:" + req.body.username + " password:" + req.body.password + "\n----------");
    db.users.findAll({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(users){
      console.log( JSON.stringify(users) );
      res.json( users );
    });
  });
  
  app.post("/api/create-goal", function(req, res){
    console.log(req.body);
    db.goals.create({
      id: null,
      title: req.body.title,
      category: req.body.category,
      descript: req.body.descript,
      start_date: req.body.startDate,
      end_date: req.body.completionDate,
      owner: 1
    }, {}).then(function(result){
      console.log(result);
      res.json("Success");
    });
  });
  
};
