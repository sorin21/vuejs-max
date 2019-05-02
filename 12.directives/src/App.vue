<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some text from v-text'"></p>
        <p v-html="'<strong>Text with v-html</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'blue'">Color this</p>
        <p
          v-local-highlight:background.delayed.blink="{mainColor: 'lightgreen', secondColor: '#00FFFF', delay: 500}"
        >Color this too</p>
        <button v-custom-on:click="clicked">Click me</button>
        <div
          v-custom-on:mouseenter="mouseEnter"
          v-custom-on:mouseleave="mouseLeave"
          style="width: 100px; height: 100px; background-color: lightgreen; margin-top: 20px;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        // Check if binding has modifiers
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }

        if (binding.modifiers.blink) {
          // let the user to add the color using binding.value and take mainColor
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              // Check if the argument is background
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          // add style after 3 seconds
          setTimeout(() => {
            // Check if the argument is background
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    },
    "custom-on": {
      bind(el, binding, vnode) {
        // we have to listen here to click event
        // el.onclick = () => {
        //   // exectute  binding.value
        //   binding.value();
        // };
        const type = binding.arg;
        // pass this reference to event listener
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("You clicked!");
    },
    mouseEnter() {
      console.log("Mouse enter!!!");
    },
    mouseLeave() {
      console.log("Mouse left!!!");
    }
  }
};
</script>

<style>
</style>
