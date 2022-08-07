const observador = (request, response, next) => {

    if(request.method === "GET") {
        next();
    } else { //POST, PUT, DELETE
        return response.status(400).json({
            "message": "No tienes permiso para entrar a esta API"
        });
    }
}

module.exports = observador;