//Variables de entorno

//Configuración del puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Configuración de la base de datos
if(process.env.NODE_ENV === "dev") {
    process.env.URLDB = "mongodb+srv://Jenn:1331@cluster0.q0ufsds.mongodb.net/?retryWrites=true&w=majority";
} else {
    process.env.URLDB = "mongodb+srv://Jenn:1331@cluster0.q0ufsds.mongodb.net/?retryWrites=true&w=majority";
}
