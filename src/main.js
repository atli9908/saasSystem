import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from 'axios';

//全局组件
import myPage from "./components/common/myPage.vue";
import myAnimated from "./components/animated/integer.vue";
Vue.component("myPage",myPage);
Vue.component("myAnimated",myAnimated);

//axios
Vue.prototype.$axios = axios;

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css';

//ckEditor
import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.use(CKEditor);

//Echarts
import * as echarts from 'echarts';
//将echarts保存为全局变量
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

//全局配置element表单尺寸
Vue.use(ElementUI,{size:'small'});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
