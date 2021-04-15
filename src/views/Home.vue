<template>
  <div class="box">
    <div class="Home-box">
      <div class="sidebar">
        <!-- 头像 -->
        <div class="pic">
          <img src="../assets/Chain.png" alt=""/>
        </div>

        <!--&lt;!&ndash; 侧边栏 &ndash;&gt;-->
        <!--<div class="navigation">-->
        <!--  <ul>-->
        <!--    <li>-->
        <!--      <a href="#" class="sidebarHover">-->
        <!--        <span class="icon"><i class="iconfont icon-home"></i></span>-->
        <!--        <span class="title">我的首页</span>-->
        <!--      </a>-->
        <!--    </li>-->
        <!--    <li>-->
        <!--      <a href="#" class="textRed">-->
        <!--        <span class="icon"><i class="iconfont icon-highlight"></i></span>-->
        <!--        <span class="title">我的博客</span>-->
        <!--      </a>-->
        <!--    </li>-->
        <!--    <li>-->
        <!--      <a href="#" class="textRed">-->
        <!--        <span class="icon"><i class="iconfont icon-keyboard"></i></span>-->
        <!--        <span class="title">发表评论</span>-->
        <!--      </a>-->
        <!--    </li>-->
        <!--    <li>-->
        <!--      <a href="#" class="textRed">-->
        <!--        <span class="icon"><i class="iconfont icon-heartpulse"></i></span>-->
        <!--        <span class="title">分享音乐</span>-->
        <!--      </a>-->
        <!--    </li>-->
        <!--  </ul>-->
        <!--</div>-->
        <div class="navigation">
          <ul>
            <li v-for="(item,index) in sidebarText">
              <a href="#" @click="replaceClass(index)"
                 :class="{aTextColor: index != sidebarCurrent,sidebarHover: index == sidebarCurrent}">

                <span class="icon"><i :class="sidebarIconClass[index]"></i></span>
                <span class="title">{{item}}</span>

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
  name: "Home",
  data(){
    return {
        sidebarCurrent:0,
        sidebarText: ['我的首页', '我的博客', '发表评论', '分享音乐'],
        sidebarIconClass: ['iconfont icon-home',
          'iconfont icon-highlight',
          'iconfont icon-keyboard',
          'iconfont icon-heartpulse']

    }
  },
  methods:{
    replaceClass(index){
      this.sidebarCurrent = index;
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e1e3e5 100%);
}

.sidebar {
  width: 300px;
  height: 100%;
  /*background: #f4f5f6;*/
}

.pic {
  width: 300px;
  margin-top: 40px;
  text-align: center;
}

.pic img {
  width: 160px;
  height: 160px;
  border-radius: 250px;
  box-shadow: -1px 1px 10px;
}

.container {
  height: 100%;
  background: #ffffff;
  box-shadow: 3px 7px 14px;
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
  margin-top: 50px;
  width: 300px;
  /*height: 100%;*/
  /*transition: 0.5s;*/
  overflow: hidden;
}

.navigation ul {
  margin: 0 auto;
  /*background: red;*/
  /*position: relative;*/
  /*top: 0;*/
  /*left: 20%;*/
  display: flex;
  flex-direction: column;
  align-items: center;


}

.navigation ul li {
  list-style: none;
  height: 50px;
  /*width: 60%;*/

  margin-bottom: 10px;
  /*transform: translate(0,0);*/
  /*overflow: hidden;*/
  /*border-radius: 11px;*/
  /*display: table;*/

}

.sidebarHover {
  color: #ffffff;
  background: #34373c;
}
.aTextColor {
  color: #000000;
}


.navigation ul li a {
  border-radius: 11px;
  /*display: table-cell;*/
  /*vertical-align: middle;*/
  transition: all 0.5s;
  display: inline-block;

  height: 50px;
  width: 180px;
  line-height: 50px;
  /*position: relative;*/
  /*width: 100%;*/
  text-decoration: none;
  text-align: center;
}


/*.navigation ul li a span {*/

/*}*/

.navigation ul li a .iconfont {
  padding-right: 15px;
  font-size: 21px;
  /*font-size: 42px;*/
  /*display: block;*/
  /*width: 60px;*/
  /*height: 60px;*/
}
</style>