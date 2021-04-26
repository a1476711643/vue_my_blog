const router = require('express').Router()

let db = require('../db')

router.get('/getAllArticle',(req,res) => {
    let sql = db.getArticle();
    console.log(sql)
    db.Query(sql).then( data => {
        res.send({"status":200,"data":data,"message":"success"})
    },err => {
        res.send({"status":400,"error":err,"message":'failed'})
    })
})

router.get('/getAllComment',(req,res) => {
    let sql = db.getComments();
    console.log(sql)
    db.Query(sql).then( data => {
        res.send({"status":200,"data":data,"message":"success"})
    },err => {
        res.send({"status":400,"error":err,"message":'failed'})
    })
})

module.exports = router