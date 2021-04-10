<template>
  <div class="box">
    <div class="Home-box">
      <div class="sidebar">
        <!-- 头像 -->
        <div class="pic">
          <img src="../assets/Chain.png" alt=""/>
          
        </div>
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
              <span class="icon"><i class="iconfont icon-home"></i></span>
              <span class="title">我的首页</span>
            </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="iconfont icon-highlight"></i></span>
                <span class="title">我的博客</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="iconfont icon-keyboard"></i></span>
                <span class="title">发表评论</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="iconfont icon-heartpulse"></i></span>
                <span class="title">分享音乐</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        123
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to bottom , #ffffff 0%, #eaeaef 100%);
}

.sidebar {
  width: 300px;
  height: 100%;
  /*background: grey;*/
}

.pic {
  margin-top: 40px;
  text-align: center;
}

.pic img {
  width: 170px;
  height: 170px;
  border-radius: 250px;
  box-shadow: -1px 1px 10px;
}

.container {
  height: 100%;
  background: #000000;
  flex-grow: 1;
}

.Home-box {
  margin: 0 auto;
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.navigation {
  margin-top: 30px;
  width: 300px;
  /*height: 100%;*/
  transition: 0.5s;
  overflow: hidden;
}
.navigation ul {
  position: relative;
  top: 0;
  left: 10%;
}
.navigation ul li {
  list-style: none;
  height: 50px;
  width: 75%;
  background: lightpink;
  margin-bottom: 10px;
  border-radius: 12px;
  display: table;
}
.navigation ul li a {
  display: table-cell;
  vertical-align:middle;

  height: 50px;
  position: relative;
  width: 100%;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
}
.navigation ul li a span {

}
.navigation ul li a .iconfont {
  padding-right: 15px;
  font-size: 21px;
  /*font-size: 42px;*/
  /*display: block;*/
  /*width: 60px;*/
  /*height: 60px;*/
}
</style>