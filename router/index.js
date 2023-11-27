const express = require("express");
const exampleController = require("../controller/exampleController");
const authVerify = require("../middleware/authVerify");
const routeDosen = require("./dosen");
const routeDsnMat = require("./dosen-matkul");
const routeJdwlMat = require("./jadwal-matkul");
const routeMahasiswa = require("./mahasiswa");
const routeMatkul = require("./matkul");
const routeMhsBim = require("./mhs-bimbingan");
const routeUser = require("./user");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa',(req,res,next) => authVerify(req,res,next),routeMahasiswa)
route.use('/dosen',(req,res,next) => authVerify(req,res,next),routeDosen)
route.use('/matkul',(req,res,next) => authVerify(req,res,next),routeMatkul)
route.use('/dosen-matkul',routeDsnMat)
route.use('/jadwal-matkul',routeJdwlMat)
route.use('/mhs-bimbingan',routeMhsBim)
route.use('/auth',routeUser)

module.exports = route