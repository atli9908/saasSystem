import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

//全局组件
import myPage from "./components/common/myPage.vue";
Vue.component("myPage",myPage)

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css';

//ckEditor
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.config.productionTip = false;

//全局配置element表单尺寸
Vue.use(ElementUI,{size:'small'});
//
Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
