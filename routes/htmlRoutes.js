const fs = require("fs");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  
  app.get("/login", function(req, res) {
    res.render("login", {});
    //res.end(fs.readFileSync("D:\\nodeCode\\G5P2\\views\\login.html"));
  });

  app.get("/signup", function(req, res) {
    res.render("signup", {});
    //res.end(fs.readFileSync("D:\\nodeCode\\G5P2\\views\\login.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
