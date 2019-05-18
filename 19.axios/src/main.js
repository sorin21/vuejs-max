import Vue from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vuejs-axios-3c8dd.firebaseio.com/";
axios.defaults.headers.common["Autorization"] = "something";

// interceptors are like middlewares, they run in between
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config);
  // you have to return configuration to not block the request
  return config;
});

const resInterceptor = axios.interceptors.response.use(response => {
  console.log(response);
  // you have to return configuration to not block the request
  return response;
});

// remove interceptors
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
