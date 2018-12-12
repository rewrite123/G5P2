const db = require("./models");
const express = require("express");

const port = process.env.PORT || 80;

const app = express();
app.use( express.urlencoded({extended: true}) );
app.use(express.json());
app.use(express.static("public"));

