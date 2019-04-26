const express=require('express')
const app=express()
const port=5000
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use('/movie',require('./2.router/movieRouter'))
app.use('/category',require('./2.router/categoryRouter'))
app.use('/movcat',require('./2.router/movCatRouter'))

app.get('/',(req,res)=>{
    res.send('<center><h1>Ini Home Page</h1></center>')
})
app.listen(port, ()=>console.log('Server aktif di port '+port))