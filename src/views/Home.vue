<template>
  <div>
    <div class="beijing"></div>


    <div class="box">
      <div class="Home-box">
        <div class="sidebar">
          <!-- 头像 -->
          <div class="pic allMargin">
            <img src="../assets/Chain.png" alt=""/>
          </div>

          <div class="sign allMargin">
            明天想吃烧肠饭……
          </div>

          <!-- 侧边栏 -->
          <div class="navigation allMargin">
            <ul>
              <li v-for="(item,index) in sidebarText">
                <!--router-link会阻止click事件，得加native native：监听一个原生事件-->
                <router-link :to="sidebarLinkTo[index]" @click.native="replaceClass(index)"
                   :class="{
                aTextColor: index != sidebarCurrent,
                 sidebarClick: index == sidebarCurrent,
                  }">
                  <span class="icon"><i :class="sidebarIconClass[index]"></i></span>
                  <span class="title">{{ item }}</span>
                </router-link>
              </li>
            </ul>
          </div>

          <!--搜索狂-->
          <div class="sidebar-search allMargin">
            <input id="search" type="search" name="q"
                   placeholder="有什么不会的？问问我" @keyup.enter="searchSomething()" v-model="searchValue">
          </div>
          <!-- 关于 -->
          <div class="about allMargin shadow">
            <a v-for="(item,index) in sidebarAboutIconClass"
               target="_blank" :href="sidebarAboutLink[index]"
               :class="sidebarAboutIconColor[index]"
               :title="sidebarAboutIconColor[index]">
              <i :class="item"></i>
            </a>
          </div>
        </div>
        <div class="container">
          <el-card class="box-card">
            <router-view />
          </el-card>
          <!--  路由坑 匹配index.js-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeMusic from "../components/HomeMusic";
import '../assets/css/public.css'
import '../assets/css/global.css'
export default {
  name: "Home",
  components:{
    HomeMusic
  },
  mounted() {
    let result = this.getComments()
    console.log(result);
  },
  data() {
    return {
      sidebarCurrent: 0,
      sidebarText: ['我的首页', '我的博客', '发表评论', '分享音乐'],
      sidebarLinkTo:['/home','/blog','/comment','/sharemusic'],
      sidebarIconClass: ['iconfont icon-home',
        'iconfont icon-highlight',
        'iconfont icon-keyboard',
        'iconfont icon-heartpulse'],
      searchValue: "",
      sidebarAboutIconColor: [
        'github', 'qq', 'bilibili', 'steam'
      ],
      sidebarAboutIconClass: [
        'iconfont icon-github',
        'iconfont icon-qq',
        'iconfont icon-bilibili-line',
        'iconfont icon-steam'
      ],
      sidebarAboutLink: [
        'https://github.com/a1476711643',
        'tencent://message/?uin=1476711643&Site=猛男&Menu=yes',
        'https://space.bilibili.com/751555',
        'https://www.baidu.com'
      ],
      test:[]


    }

  },
  methods: {
    replaceClass(index) {
      this.sidebarCurrent = index;
      console.log(index+"----------"+this.sidebarCurrent)
    },
    searchSomething() {
      if (this.searchValue == "") {
        alert("啥都没有输入，哎");
      } else {
        window.open("https://www.baidu.com/s?wd=" + this.searchValue);
      }
    },
    async getComments(){
      await this.$http.get('getAllComment').then((res,err) => {
        if(err) return console.log(err)
        let result = res.data;
        console.log(result)
      })
    },


  }
}
</script>

<style scoped>
.beijing {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url("../assets/03.jpg");
  opacity: 0.5;
  background-size: cover;
  filter: blur(10px);
  z-index: -1;
}


.box {
  width: 100%;
  height: 100vh;
  position: relative;
  /*position: fixed;*/
  /*background: url("../assets/03.jpg");*/
  /*filter: blur(30px);*/
  /*z-index: -1;*/
}


.Home-box {
  margin: 0 auto;
  height: 100%;
  width: 65%;
  background: rgba(252,252,252,0.5);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}


.sidebar {
  width: 300px;
  height: 100%;
  /*background: #f4f5f6;*/
}

.pic {
  text-align: center;
}

.pic img {
  width: 160px;
  height: 160px;
  border-radius: 250px;
  box-shadow: -1px 1px 10px;
}


/* 侧边栏 */
.navigation {
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

.navigation ul li a:hover {
  background: #e3e3e3;

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

.sign {
  text-align: center;
  letter-spacing: 0.5px;
}



.sidebar-search {
  /*border-radius: 20px;*/
}

#search {
  height: 42px;
  border: none;
  padding: 20px;
  outline: none;
}

.about {
  /*height: 100px;*/
  border-radius: 11px;
  background: #ffffff;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.about a {
  display: block;

  height: 40px;
  width: 40px;
  border-radius: 50px;
  /*margin-left: 10px;*/
  text-align: center;
  line-height: 40px;
  /*white-space: normal;*/
}
.container {
  width: 100%;
  /*height: 100vh;*/
  flex-grow: 1;
}
.box-card {

}
</style>