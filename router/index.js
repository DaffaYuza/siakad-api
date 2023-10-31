const express = require("express");
const exampleController = require("../controller/exampleController");
const routeDosen = require("./dosen");
const routeDsnMat = require("./dosen-matkul");
const routeJdwlMat = require("./jadwal-matkul");
const routeMahasiswa = require("./mahasiswa");
const routeMatkul = require("./matkul");
const routeMhsBim = require("./mhs-bimbingan");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',routeMahasiswa)
route.use('/dosen',routeDosen)
route.use('/matkul',routeMatkul)
route.use('/dosen-matkul',routeDsnMat)
route.use('/jadwal-matkul',routeJdwlMat)
route.use('/mhs-bimbingan',routeMhsBim)

module.exports = route