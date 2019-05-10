// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// means: execute this before each routing action
// next will let to continue the process; without is will exit, will not go to route you want to go
// beforeEach gets executed all the time
router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  // abord
  // next(false);
  // pass a path to navigate to
  // next('/');
  // pass an object
  // next({ path: "/" });
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
