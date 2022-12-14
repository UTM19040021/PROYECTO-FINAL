const express = require("express");
const { model, default: mongoose } = require("mongoose");
const EmpresaModel = require("../models/Empresa.model");
const router = express.Router();
const parseId = (id)=>{
    return mongoose.Types.ObjectId(id)
}

//METODO POST CON BODY PARSER
router.post('/', (req, response) => {

    //Le decimos a MONGO QUE VAMOS A GUARDAR LOS DATOS.
    const Empresa = EmpresaModel(req.body);
    Empresa.save()
    .then((EmpresaRegistrada) => {
       return response.status(200).json({
            msg:"Se ha registrado correctamente",
            status: 200,
            cont: {
                Empresa: EmpresaRegistrada
            }
        });
        
    })
    .catch((err) => {
        return response.status(400).json({
            msg:"Error al registrar la empresa",
            status: 400,
            cont: {
                error: err
            }
        });
    });

});

//Parametros Especificos
router.get("/:id", (req, res) => {
    const{id} = req.params
       const body = req.body
       EmpresaModel.findOne(
        {id: parseId(req.params.id)},
        body,
        (err, docs)=>{
            res.send({
                items : docs
            })
        }
       )
    });
    
    router.get("/", (request, response) => {
       
       
         const registro =  EmpresaModel.find().exec()
        .then((registro) => {
            return response.status(200).json({
                msg:"Se consulto la tabla Empresa exitosamente",
                status: 200, 
                cont: {
                     registro
                   
                }
            });
    
        })
        .catch((err) => {
                return response.status(500).json({
                    msg:"Error al consultar los datos de los Maestros.",
                    status: 500,
                    cont: {
                        error: err
                    }
                });
        });
    
    });
    
    
    router.put('/', (req, res) => {
        const{id} = req.params
       const body = req.body
       EmpresaModel.updateOne(
        {id: parseId(req.params.id)},
        body,
        (err, docs)=>{
            res.send({
                items : docs
            })
        }
       )
    });
    
    router.delete('/', (req, res) => {
        const{id} = req.params
        EmpresaModel.deleteOne(
         {id: parseId(req.params.id)},
         (err, docs)=>{
             res.send({
                 items : docs
             })
         }
        )
         
    });
    
module.exports = router;