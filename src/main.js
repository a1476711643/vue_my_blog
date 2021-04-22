import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from 'animate.css'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont-about.css'
import './assets/icon/aboutIconBgAndColor.css'
import APlayer from '@moefe/vue-aplayer';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false



Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png', // 设置播放器默认封面图片
  productionTip: false, // 是否在控制台输出版本信息
});
Vue.use(animate)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
