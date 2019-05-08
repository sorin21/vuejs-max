// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App";

Vue.config.productionTip = false;

// tells to VueJS to use a plugin
Vue.use(VueResource);
Vue.http.options.root = "https://vuejs-resource-2ea47.firebaseio.com/";
// push a new interceptors in this array
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == "POST") {
    request.method = "PUT";
  }
  next(response => {
    response.json = () => {
      return { message: response.body };
    };
  });
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
