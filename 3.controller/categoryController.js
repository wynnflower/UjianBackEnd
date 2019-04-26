const db=require('../1.database')

module.exports={
    //Get Data Category
    getAllData:(req,res)=>{
        var sql=`select * from categories`
        db.query(sql,(err,result)=>{
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    },
    //Add Data Category
    addKategori:(req,res)=>{
        var dataKat={
            nama:req.body.nama
        }

        var sql=`insert into categories set ?`
        db.query(sql,dataKat,(err,result)=>{
            if(err) throw err
            var sql2=`select * from categories;`
            db.query(sql2,(err,result1)=>{
                if(err) throw err
                if(result1){
                    res.redirect('/category/allData')
                }
            })
        })
    },
    //Edit Data Category
    editKategori:(req,res)=>{
        var newDataKat={
            nama:req.body.nama
        }
        var id=req.params.id
        var sql=`update categories set ? where id=${id}`
        db.query(sql,newDataKat,(err,result)=>{
            if(err) throw err
            res.redirect('/category/allData')
        })
    },
    //Delete Category
    delKategori:(req,res)=>{
        var id=req.params.id
        var sql=`delete from categories where id=${id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/category/allData')
        })
    }
}
