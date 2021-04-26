const mysql = require('mysql');


let pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'blog',
    port:3306,
    connectionLimit:50,//允许连接数
    multipleStatements : true,  //是否允许执行多条sql语句
    timezone:"08:00" //大坑，必须加这一句，否则时间不对劲
})

let Query = (sql,...params) => {
    return new Promise((resolve,reject)=> {
        pool.getConnection((err,conn) => {
            if(err){
                return reject(err)
            }

            conn.query(sql,params,(error,res) => {
                console.log(res);
                conn.release();
                if(error){
                    return reject(error)
                }
                resolve(res)
            })
        })
    })
}
// 获取文章
let getArticle = () => {
    let sql = 'select * from articles order by article_id desc'
    return sql;
}
// 获取评论
let getComments = () => {
    let sql = 'select * from comments order by comment_id desc'
    return sql;
}

module.exports = {
    Query,
    getArticle,
    getComments
}


