const router=require('express').Router()
const controller =require('../3.controller/categoryController')
var {getAllData,addKategori,editKategori,delKategori}=controller

//get semua data
router.get('/allData',getAllData)

//Add Data
router.post('/addKategori',addKategori)

//Edit Data
router.put('/editKategori/:id',editKategori)

//Delete Data
router.delete('/delKategori/:id',delKategori)

module.exports=router