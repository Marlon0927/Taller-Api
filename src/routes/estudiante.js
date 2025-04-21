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
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un estudiante por su id
router.put("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un estudiante por su id
router.delete("/estudiantes/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;
