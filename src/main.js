import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

//
import myPage from "./components/common/myPage.vue"

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
