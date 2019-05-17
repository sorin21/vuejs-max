// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";

import App from "./App";
import router from "./router";
import { store } from "./store";

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.http.options.root = "https://vuejs-stocks-bounds.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
