const express = require("express");
const jadwalMatkulController = require("../controller/jadwalMatkulController");
const routeJdwlMat = express.Router()

routeJdwlMat.post('/',jadwalMatkulController.create)
routeJdwlMat.get('/get',jadwalMatkulController.getAll)
routeJdwlMat.get('/get/:id',jadwalMatkulController.getById)
routeJdwlMat.put('/update/:id',jadwalMatkulController.update)
routeJdwlMat.delete('/delete/:id',jadwalMatkulController.delete)

module.exports = routeJdwlMat
