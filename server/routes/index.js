const express = require("express");
const app = express();
const usuario = require("./usuario");
const Puesto = require("./Puesto");
const Empresa = require ("./Empresa");


app.use("/usuario",usuario); // http://localhost:3000/usuario
app.use("/Puesto",Puesto); // http://localhost:3000/puesto
app.use("/Empresa",Empresa); //http://localhost:3000/empresa

module.exports = app;