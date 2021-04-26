const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();


let frontendRouter = require('./routes/frontend')
const post = 3001;

app.listen(post,() => {
    console.log('服务器监听于'+post+'端口。')
})
// json格式
app.use(express.json())
// 跨域
app.use(cors())
// url码
app.use(express.urlencoded({ extended: false }));
// 设置最大
app.use(bodyParser.json({limit:"10mb"}))
app.use(bodyParser.urlencoded({limit:'50mb',extended: true }))

// 使用路由 路径为localhost:3001/api/
app.use('/api/',frontendRouter)


module.exports = app;