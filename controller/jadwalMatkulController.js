const {MataKuliah, JadwalMatkul} = require('../models')

const jadwalMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello jadwalMatkulController"
    })
}

jadwalMatkulController.create = async(req,res) => {
    const {id_matkul, hari, jam} = req.body
    if (typeof hari !== 'string' || hari.trim() === '') {
        return res.status(400).json({ message : 'Hari harus berupa Huruf dan wajib diisi !'})
    }
    if (typeof jam !== 'string' || jam.trim() === '') {
        return res.status(400).json({ message : 'Jam harus berupa Angka dan wajib diisi !'})
    }

    try{
        const getMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if(getMatkul === null){
            throw Error("ID Mata Kuliah Tidak ditemukan !")
        } else {
            const createJdwlMat = await JadwalMatkul.create({
                id_matkul : id_matkul,
                hari: hari,
                jam: jam
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

jadwalMatkulController.getAll = async (req,res) => {
    const getJdwlMat = await MataKuliah.findAll({
        include : [
            {
                model : JadwalMatkul
            }
        ]
    });
    res.json({
        data : getJdwlMat
    })
}

jadwalMatkulController.getById = async (req,res) => {
    const {id} = req.params

    const getJdwlMat = await MataKuliah.findOne({
        include : [
            {
                model : JadwalMatkul
            }
        ],
        where : {
            id : id
        }
    });
    res.json({
        data : getJdwlMat
    })
}

jadwalMatkulController.update = async(req,res) => {
    const {id_matkul, hari, jam} = req.body
    const {id} = req.params
    if (typeof hari !== 'string' || hari.trim() === '') {
        return res.status(400).json({ message : 'Hari harus berupa Huruf dan wajib diisi !'})
    }
    if (typeof jam !== 'string' || jam.trim() === '') {
        return res.status(400).json({ message : 'Jam harus berupa Angka dan wajib diisi !'})
    }
    
    try{
        const getMatkul = await MataKuliah.findOne({
            where : {
                id : id_matkul
            }
        })
        if(getMatkul === null){
            throw Error("ID Mata Kuliah Tidak ditemukan !")
        } else {
            const updateJdwlMat = await JadwalMatkul.update({
                id_matkul : id_matkul,
                hari: hari,
                jam: jam
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

jadwalMatkulController.delete = async (req,res) => {
    const {id} = req.params
    
    try{
        const deleteJdwlMat = await JadwalMatkul.destroy({
            where : {
                id : id
            }
        })
        if (!deleteJdwlMat) {
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

module.exports = jadwalMatkulController

