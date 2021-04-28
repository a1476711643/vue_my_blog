<template>
<div>
    <home-music></home-music>
  <div class="article-box">
    <div class="article">
        <!-- 逆天写法 需要 require 找到路径 只有内联样式要这样。-->
        <div class="article-img-cover" :style="{backgroundImage:'url('+require('../../assets/beijing.jpg')+')'}">
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
      articleData:{
        articleTitle:"第一篇文章",
        articleContent:"这是我的第一篇文章，内容不多，但是内容也不能算很少，这是怎么回事呢？原来我们觉得内容多，那就是真的多，但是为什么还有人会觉得内容少呢，原因是在于觉得内容少的人看到的内容就会少，我也不知道是怎么回事。",
      }
    }
  },
}
</script>

<style scoped>
.article-box{

}
.article {
  width: 700px;
  height: 250px;
  position: relative;
}
.article-img-cover {

  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

</style>