import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import loadModules from "@kit/app-module-loader";

import masterTemplate from "./components/masterTemplate";

import page from "@kit/page";

Vue.config.productionTip = false;

const moduleList = [page];

loadModules({
  Vue,
  router,
  moduleList,
  prefix: "/modules",
  masterTemplate
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
