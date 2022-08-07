//Variables de entorno

//Configuración del puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Configuración de la base de datos
if(process.env.NODE_ENV === "dev") {
    process.env.URLDB = "mongodb+srv://Jenniferutm19040021:1234@server.cglmbmu.mongodb.net/?retryWrites=true&w=majority";
} else {
    process.env.URLDB = "mongodb+srv://Jenniferutm19040021:1234@server.cglmbmu.mongodb.net/?retryWrites=true&w=majority";
}
