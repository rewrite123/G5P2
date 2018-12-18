var db = require("../models");
var passwordValidator = require('password-validator');

var schema = new passwordValidator();

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  
  schema
      .is().min(8)                                   
      .is().max(100)                                 
      .has().uppercase()                             
      .has().lowercase()                             
      .has().digits()                                
      .has().not().spaces();  

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  //This is an example of logging in.
  app.post("/api/login", function(req, res){
    //console.log("----------\nusername:" + req.body.username + " password:" + req.body.password + "\n----------");
    db.users.findAll({
      where: {
        user_name: req.body.username,
        password: req.body.password
      }
    }).then(function(users){
      console.log( JSON.stringify(users) );
      res.json( users );
    });
  });
  
  app.post("/");
  
};
