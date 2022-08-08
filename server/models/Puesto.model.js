const mongoose = require("mongoose");
const parseId= (id) => {return mongoose.Types.ObjectId(id)}

const CategoriasSchema = mongoose.Schema({
    strNombre:{
        type:String,
        required: [true, "Por favor ingresa tu Nombre"]
    },
    strEmpresa:{
        type:mongoose.Types.ObjectId,
        required: [true, "descripcion"]
    }
})


module.exports = mongoose.model("Puesto", CategoriasSchema);