const mongoose = require("mongoose"); // importando el componente mogoose
const estudianteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    edad: {
        type: String,
        required: false,
    },
    carrera: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Estudiante", estudianteSchema);