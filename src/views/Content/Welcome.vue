<template>
<div>
    <home-music></home-music>
  <div class="article-box">
    <div class="article" v-for="item in articleData">
        <!-- 逆天写法 需要 require 找到路径 只有内联样式要这样。-->
        <div class="article-img-cover" :style="{backgroundImage:'url('+require('../../assets/beijing.jpg')+')'}" ></div>
        <div class="article-main">
              <div class="article-content">
                <h2 class="article-view-title-text">{{item.articleTitle}}</h2>
                <p class="article-view-subtitle-text">「{{item.articleWriter}}」 发布于{{item.articleCreateTime}}  {{item.articleCategory}}</p>
              </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import HomeMusic from "../../components/HomeMusic";
export default {
  name: "Welcome",
  components:{
    HomeMusic
  },
  data(){
    return {
      articleData:[{
        articleTitle:"第一篇文章",
        articleWriter:"BladeK",
        articleCreateTime:"2021/5/1",
        articleCategory:"日常",
        articleContent:"这是我的第一篇文章，内容不多，但是内容也不能算很少，这是怎么回事呢？原来我们觉得内容多，那就是真的多，但是为什么还有人会觉得内容少呢，原因是在于觉得内容少的人看到的内容就会少，我也不知道是怎么回事。",
      },
        {
          articleTitle:"第一篇文章",
          articleWriter:"BladeK",
          articleCreateTime:"2021/5/1",
          articleCategory:"日常",
          articleContent:"这是我的第一篇文章，内容不多，但是内容也不能算很少，这是怎么回事呢？原来我们觉得内容多，那就是真的多，但是为什么还有人会觉得内容少呢，原因是在于觉得内容少的人看到的内容就会少，我也不知道是怎么回事。",
        }]
    }
  },
}
</script>

<style scoped>
.article-box{
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.article {
  margin:30px 0 30px 0;
  width: 700px;
  height: 250px;
  position: relative;
  transition: 0.4s ease all;
}
.article:hover {
  border-radius: 12px;
  transform: scale(1.05);   /*不会改变自适应高度，这个放大很不错。*/
  cursor: pointer;
  box-shadow: 0px 5px 15px #888888;
}
.article-img-cover {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
}
.article-main {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.article-content {
  line-height: 2.5em;
  text-align: center;
  /*background: red;*/
}

.article-view-title-text {
  color: #ffffff;
  font-size: 24px;
}
.article-view-subtitle-text{
  color: #ffffff;
  font-size: 18px;
}

</style>