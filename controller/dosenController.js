const {Dosen} = require('../models')

const dosenController = {}

/*
    this is auto generate example, you can continue 

*/
dosenController.index = async(req,res) => {
    res.json({
        message : "Hello dosenController"
    })
}

dosenController.create = async (req,res) => {
    const {nama, nidn, alamat} = req.body
    try{
        const createDosen = await Dosen.create({
            nama: nama,
            nidn: nidn,
            alamat: alamat,
        })
        return res.status(201).json({
            message: 'Data berhasil ditambahkan !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

dosenController.getAll = async (req,res) => {
    try{
        const getDosen = await Dosen.findAll()
        return res.status(200).json({
            data : getDosen
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

dosenController.getById = async (req,res) => {
    const {id} = req.params
    try{
        const getDetailDosen = await Dosen.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailDosen
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

dosenController.update = async (req,res) => {
    const {nama, nidn, alamat} = req.body
    const id = req.params.id
    try{
        const getDetailDosen = await Dosen.findOne({
            where : {
                id : id
            }
        })
        if(getDetailDosen === null){
            return res.status(404).json({
                message: 'Data Not Found !'
            })
        }
        const updateDosen = await Dosen.update({
            nama: nama,
            nidn: nidn,
            alamat: alamat,
        },{
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message: 'Data berhasil diubah !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

dosenController.delete = async (req,res) => {
    const {id} = req.params
    try{
        const deleteDosen = await Dosen.destroy({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            message: 'Data berhasil dihapus !'
        })
    } catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

module.exports = dosenController

