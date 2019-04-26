const db=require('../1.database')

module.exports={
    //Get Data Movie
    getAllData:(req,res)=>{
        var sql=`select * from movies`
        db.query(sql,(err,result)=>{
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    },
    //Add Data Movie
    addMovie:(req,res)=>{
        var dataMovie={
            nama:req.body.nama,
            tahun:req.body.tahun,
            description:req.body.description
        }

        var sql=`insert into movies set ?`
        db.query(sql,dataMovie,(err,result)=>{
            if(err) throw err
            var sql2=`select * from movies;`
            db.query(sql2,(err,result1)=>{
                if(err) throw err
                if(result1){
                    res.redirect('/movie/allData')
                }
            })
        })
    },
    //Edit Data Movie
    editMovie:(req,res)=>{
        var newDataMovie={
            nama:req.body.nama,
            tahun:req.body.tahun,
            description:req.body.description
        }
        var id=req.params.id
        var sql=`update movies set ? where id=${id}`
        db.query(sql,newDataMovie,(err,result)=>{
            if(err) throw err
            res.redirect('/movie/allData')
        })
    },
    //Delete Movie
    delMovie:(req,res)=>{
        var id=req.params.id
        var sql=`delete from movies where id=${id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/movie/allData')
        })
    }
}
