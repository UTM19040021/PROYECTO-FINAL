const express = require("express");
const app = express();
const usuario = require("./usuario");
const Puesto = require("./Puesto");
const Empresa = require ("./Empresa");
const observador = require('../middlewares/observador');


app.use("/usuario",usuario); // http://localhost:3000/usuario
app.use("/Puesto",Puesto); // http://localhost:3000/Puesto
app.use("/Empresa",Empresa); //http://localhost:3000/Empresa

module.exports = app;