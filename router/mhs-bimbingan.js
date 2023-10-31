const express = require("express");
const mhsBimbinganController = require("../controller/mhsBimbinganController");
const routeMhsBim = express.Router()

routeMhsBim.post('/',mhsBimbinganController.create)
routeMhsBim.get('/get',mhsBimbinganController.getAll)
routeMhsBim.get('/get/:id',mhsBimbinganController.getById)
routeMhsBim.put('/update/:id',mhsBimbinganController.update)
routeMhsBim.delete('/delete/:id',mhsBimbinganController.delete)

module.exports = routeMhsBim
