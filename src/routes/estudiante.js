const express = require("express");
const router = express.Router(); //manejador de rutas de express
const estudianteSchema = require("../models/estudiante");

//Nuevo estudiante
router.post("/estudiantes", (req, res) => {
    const estudiante = estudianteSchema(req.body);
    estudiante
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los estudiantes
router.get("/estudiantes", (req, res) => {
    estudianteSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un estudiante por su id
router.get("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    estudianteSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un estudiante por su id
router.put("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, tipo_doc, num_doc, codigo, correo, edad, carrera, semestre, jornada } = req.body;
    estudianteSchema
        .updateOne({ _id: id }, {
            $set: { nombre, apellido, tipo_doc, num_doc, codigo, correo, edad, carrera, semestre, jornada }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un estudiante por su id
router.delete("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    estudianteSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
