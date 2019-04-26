const db=require('../1.database')

module.exports={
    //Get Data MovCat
    getAllData:(req,res)=>{
        var sql=`SELECT movies.nama as namaMovie,categories.nama as namaCategory FROM movie.movcat
        join movies on idmovie=movies.id
        join categories on idcategory=categories.id;`
        db.query(sql,(err,result)=>{
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    },
    //Add Data MovCat
    addMovcat:(req,res)=>{
        var dataMovcat={
            idmovie:req.body.idmovie,
            idcategory:req.body.idcategory
        }
        var sql=`insert into movcat set ?`
        db.query(sql,dataMovcat,(err,result)=>{
            if(err) throw err
            var sql2=`SELECT movies.nama as namaMovie,categories.nama as namaCategory FROM movie.movcat
            join movies on idmovie=movies.id
            join categories on idcategory=categories.id;`
            db.query(sql2,(err,result1)=>{
                if(err) throw err
                if(result1){
                    res.redirect('/movcat/allData')
                }
            })
        })
    },
    //Delete MovCat
    delMovcat:(req,res)=>{
        var idmovie=req.query.idmovie
        var idcategory=req.query.idcategory
        var sql=`delete from movcat where idmovie=${idmovie} AND idcategory=${idcategory}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/movcat/allData')
        })
    },
    // Get Dropdown Movie
    getMovie:(req,res)=>{
        var sql=`SELECT id,nama from movies`
        db.query(sql,(err,result)=>{
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    },
    // Get Dropdown Category
    getCategory:(req,res)=>{
        var sql=`SELECT id,nama from categories;`
        db.query(sql,(err,result)=>{
            if(err) throw err
            if(result){
                res.send(result)
            }
        })
    }
}
