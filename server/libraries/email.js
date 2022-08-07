const nodemailer =require("nodemailer");
const fs =require('fs');
const path =require('path');
const hogan =require('hogan.js');

class Email{
    constructor(){
        this.transport = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:"utm19040021@utma.edu.mx",
                pass:"1234"
            }
        });
    }

    sendEmail(email,data){

        return new Promise((resolve,rejects) =>{
            const template = fs.readFileSync(path.resolve(__dirname, "../assets/templates/index.html"), "utf-8");
            const compileTemplate =hogan.compile(template);

            console.log(data);

            this.transport.sendMail({
                from: '"Jennifer Flores" <utm19040021@utma.edu.mx>',
                to: email,
                subject:"correo electronico personal",
                html: compileTemplate.render({strNombre: data.strNombre, strPrimerApellidos: data.strPrimerApellidos, strSegundoApellido: data.strSegundoApellido, nmbEdad: data.nmbEdad}),
            }).then((response) => {
                resolve(response)
            })
            .catch((error) =>{
                rejects(error)
            });
        });
    }
}


module.exports = new Email();