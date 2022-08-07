const jwt = require('jsonwebtoken');

const verificaToken = (request, response, next) => {
    try {

        const token = request.header('token');
        const decodedToken = jwt.verify(token, process.env.AUTH_SEED);

        if(!!decodedToken) {
            next();
        } else {
            return response.status(500).json({
                msg: "El token expiró",
                status: 500
            });
        }
        
    } catch (error) {
        return response.status(500).json({
            msg: "El token no ha sido proporcionado.",
            status: 500
        });   
    }
}

module.exports = verificaToken;