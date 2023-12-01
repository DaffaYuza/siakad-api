const {Dosen, Mahasiswa, MhsBimbingan} = require('../models')

const mhsBimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mhsBimbinganController.index = async(req,res) => {
    res.json({
        message : "Hello mhsBimbinganController"
    })
}

mhsBimbinganController.create = async(req,res) => {
    const {id_mahasiswa, id_dosen} = req.body
    try{
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        }) 
        const getMhs = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        if(getDosen === null){
            throw Error("ID Dosen Tidak ditemukan !")
        } else if (getMhs === null) {
            throw Error("ID Mahasiswa Tidak ditemukan !")
        } else {
            const createDsnMat = await MhsBimbingan.create({
                id_mahasiswa : id_mahasiswa,
                id_dosen : id_dosen
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

mhsBimbinganController.getAll = async (req,res) => {
    const getDsnMat = await Dosen.findAll({
        include : [
            {
                model : Mahasiswa
            }
        ]
    });
    res.json({
        data : getDsnMat
    })
}

mhsBimbinganController.getById = async (req,res) => {
    const {id} = req.params

    const getMhsBim = await Dosen.findOne({
        include : [
            {
                model : Mahasiswa
            }
        ],
        where : {
            id : id
        }
    });
    res.json({
        data : getMhsBim
    })
}

mhsBimbinganController.update = async(req,res) => {
    const {id_mahasiswa, id_dosen} = req.body
    const {id} = req.params

    try{
        const getDosen = await Dosen.findOne({
            where : {
                id : id_dosen
            }
        }) 
        const getMhs = await Mahasiswa.findOne({
            where : {
                id : id_mahasiswa
            }
        })
        if(getDosen === null){
            throw Error("ID Dosen Tidak ditemukan !")
        } else if (getMhs === null) {
            throw Error("ID Mahasiswa Tidak ditemukan !")
        } else {
            const createDsnMat = await MhsBimbingan.update({
                id_mahasiswa : id_mahasiswa,
                id_dosen : id_dosen
            },
            {
                where : {
                    id : id
                }
            }
            )
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

mhsBimbinganController.delete = async (req,res) => {
    const {id} = req.params
    try{
        const deleteMhsBim = await MhsBimbingan.destroy({
            where : {
                id : id
            }
        })
        if (!deleteMhsBim) {
            return res.status(404).json({
                message: 'ID tidak ditemukan !'
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

module.exports = mhsBimbinganController

