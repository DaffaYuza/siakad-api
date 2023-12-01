const {Dosen, MataKuliah, DosenMatkul} = require('../models')

const dosenMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello dosenMatkulController"
    })
}

dosenMatkulController.create = async(req,res) => {
    const {id_dosen, id_matkul} = req.body
    
    try{
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        }) 
        const getMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if(getDosen === null){
            throw Error("Data Dosen Tidak ditemukan !")
        } else if (getMatkul === null){
            throw Error("Data Mata Kuliah tidak ditemukan !")
        } else {
            const createDsnMat = await DosenMatkul.create({
                id_dosen : id_dosen,
                id_matkul : id_matkul
            })
            return res.status(201).json({
                message: 'Data berhasil ditambahkan !'
            })
        }
    } catch (error){
        return res.status(404).json({
            message: error.message
        })
   }
}

dosenMatkulController.getAll = async (req,res) => {
    const getDsnMat = await Dosen.findAll({
        include : [
            {
                model : MataKuliah
            }
        ]
    });
    res.json({
        data : getDsnMat
    })
}

dosenMatkulController.getById = async (req,res) => {
    const {id} = req.params

    const getDsnMat = await Dosen.findOne({
        include : [
            {
                model : MataKuliah
            }
        ],
        where : {
            id : id
        }
    });
    res.json({
        data : getDsnMat
    })
}

dosenMatkulController.update = async(req,res) => {
    const {id_dosen, id_matkul} = req.body
    const {id} = req.params

    try{
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        }) 
        const getMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if(getDosen === null){
            throw Error("Data Dosen Tidak ditemukan !")
        } else if (getMatkul === null){
            throw Error("Data Mata Kuliah tidak ditemukan !")
        }else {
            const createDsnMat = await DosenMatkul.update({
                id_dosen : id_dosen,
                id_matkul : id_matkul
            },
            {
                where : {
                    id : id
                }
            })
            return res.status(201).json({
                message: 'Data berhasil diubah !'
            })
        }
    } catch (error){
        return res.status(404).json({
            message: error.message
        })
   }
}

dosenMatkulController.delete = async (req,res) => {
    const {id} = req.params
    try{
        const deleteDsnMat = await DosenMatkul.destroy({
            where : {
                id : id
            }
        })
        if (!deleteDsnMat) {
            return res.status(404).json({
                message: 'Data tidak ditemukan !'
            })
        }
        return res.status(200).json({
            message: 'Data berhasil dihapus !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}


module.exports = dosenMatkulController

