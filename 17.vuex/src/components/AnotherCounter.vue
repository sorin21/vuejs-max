<template>
  <div>
    <button class="btn btn-primary" @click="increment({by: 50, duration: 1000})">Increment</button>
    <button class="btn btn-primary" @click="decrement({by: 50, duration: 1000})">Decrement</button>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    // ...mapMutations(["increment", "decrement"])
    ...mapActions({
      increment: "asyncIncrement",
      decrement: "asyncDecrement"
    })
    // increment(by) {
    //   this.$store.dispatch("increment", by);
    // }
  }

  // {
  //   increment() {
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //   }
  // }
};
</script>