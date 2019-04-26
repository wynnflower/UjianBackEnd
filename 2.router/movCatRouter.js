const router=require('express').Router()
const controller =require('../3.controller/movCatController')
var {getAllData,addMovcat,delMovcat,getMovie,getCategory}=controller

//get semua data
router.get('/allData',getAllData)

//Add Data
router.post('/addmovcat',addMovcat)

//Delete Data
router.delete('/delmovcat',delMovcat)

//get Dropdown Movie
router.get('/getMovie',getMovie)

//get Dropdown Kategori
router.get('/getCategory',getCategory)

module.exports=router