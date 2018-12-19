const fs = require("fs");
var db = require("../models");

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
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
