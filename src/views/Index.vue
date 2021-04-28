<template>
<div>
  <div class="box">
  <div class="user">
    <div class="pic">
      <img src="../assets/Chain.png" alt=""
           :class="isPicClick? 'animate__animated animate__bounceOut' : 'animate__animated animate__bounceIn'" @click="picClick">
      <p>BladeK</p>
      <p style="font-size: 20px">「aasdjkasdjskajakkdjas」</p>
    </div>
    <!--<div class="aboutMe">-->
    <!--    <div class="aboutMeImg">-->
    <!--      <a href="https://github.com/a1476711643" target="_blank"><img src="../assets/index-logo/github.jpg" alt="" /></a>-->
    <!--      <a href="tencent://Message/?Uin=1476711643&websiteName=q-zone.qq.com&Menu=yes" target="_blank"> <img src="../assets/index-logo/qq.jpg" alt="" /></a>-->
    <!--    </div>-->
    <!--</div>-->
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Index",
  data(){
    return {
      isPicClick:false
    }
  },
  methods:{
    picClick(){
      this.isPicClick = !this.isPicClick
      // 路由跳转
      let Go = setTimeout(() => {
        this.$router.push("/home")
      },1200)
    }
  }
}
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/beijing.jpg");
}
.user {
  width: 500px;
  height: 500px;
  background: rgba(255,255,255,0.75);
  border-radius: 3px;
  box-shadow: 5px 5px 39px #000000 ;
  line-height: 20px;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.pic {
  margin-top: 50px;
}
.pic img {
  width: 40%;
  height: 40%;
  border-radius: 200px;
  position: relative;
  left: 30%;
  border: 1px solid #000;
  transition: all 1.5s;
}
.pic img:hover {
  cursor: pointer;  /*更改鼠标指针*/
  transform: rotate(360deg) !important;
}
.pic p {
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
}
.aboutMeImg {
  margin-top: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.aboutMeImg img {
  width: 60px;
  height: 60px;
}
</style>