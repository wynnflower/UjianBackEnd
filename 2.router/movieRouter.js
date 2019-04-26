const router=require('express').Router()
const controller =require('../3.controller/movieController')
var {getAllData,addMovie,editMovie,delMovie}=controller

//get semua data
router.get('/allData',getAllData)

//Add Data
router.post('/addMovie',addMovie)

//Edit Data
router.put('/editMovie/:id',editMovie)

//Delete Data
router.delete('/delMovie/:id',delMovie)

module.exports=router