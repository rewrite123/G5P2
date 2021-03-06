const fs = require("fs");
var db = require("../models");

module.exports = function(app) { 
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
  
  app.get("/goal-scroller", function(req, res){
    var testStuff = [];
    testStuff.push({title: "example title", category: "Fitness", description: "Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds. Somthing Something I mispelled lots of wurds.", startDate: "9/11/1998", endDate: "9/11/2018", goalPageId: 2});
    testStuff.push({title: "example title2", category: "Diet", description: "Somthing Something I mispelled lots of wurds.", startDate: "9/11/1998", endDate: "9/11/2018", goalPageId: 1});
    res.render("goalScroller", {result: testStuff} );
  });

  app.get("/login", function(req, res) {
    db.categories.findAll({}).then(function(results){
      // res.render("login", {results});
      db.goal_status.findAll({}).then(function(results2){
        res.render("login", {results,results2});
      })
    })
  });  
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
