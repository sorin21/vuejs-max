// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = "lightgreen";
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    // Check if binding has modifiers
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }

    // add style after 3 seconds
    setTimeout(() => {
      if (binding.arg == "background") {
        // Check if the argument is background
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
