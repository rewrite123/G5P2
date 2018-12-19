const fs = require("fs");
var db = require("../models");

const consoleTable = require("console.table");

module.exports = function(app) { 
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });
  
  app.get("/goal-scroller/:searchee/:page", function(req, res){
    db.goals.findAll({
      where: {
        category: req.params.searchee
      },
      limit: 25,
      offset: 25*(req.params.page-1)
    }).then(function(results){
      res.render("goalScroller", {goals: results} );
    });
    
  });
  
  app.get("/goal-scroller/:page", function(req, res){
    db.goals.findAll({
      limit: 25,
      offset: 25*(req.params.page-1)
    }).then(function(results){
      res.render("goalScroller", {goals: results} );
    });
  });

  app.get("/login", function(req, res) {
    res.render("login", {});
  });
  
  app.get("/view-goal/:id", function(req, res){
    db.goals.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(results){
      
      var status = results.dataValues.completion;
      var readableStatus = "";
      if(status == 0){
        //Not started
        readableStatus = "This goal has not been started yet.";
      }else if(status == 1){
        //In progress
        readableStatus = "This goal is already in progress.";
      }else if(status == 2){
        //Finished
        readableStatus = "This goal has been successfully completed.";
      }else if(status == 3){
        //Abandoned
        readableStatus = "This goal has been regretfuly abandoned =(";
      }else{
        //Cthulu has awoken from his eternal slumber
        readableStatus = "This goal is misbehaving and needs to be exercised! Please ignore it for now.";
      }
      db.users.findOne({
        where: {
          id: results.dataValues.owner
        }
      }).then(function(results2){
        console.table(results2.dataValues);
        res.render("viewGoal", {
          goal: results.dataValues, 
          readableStatus: readableStatus, 
          owner: {username: results2.dataValues.username}
        });
      });
      
    });
    
  });
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
