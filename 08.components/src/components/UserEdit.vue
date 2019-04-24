<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
    <button @click="changeAgain()">Reset Again</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {};
  },
  props: {
    userAge: Number,
    changeAgain: Function
  },
  methods: {
    editAge() {
      this.userAge = 20;
      // this.$emit("ageWasEdited", this.userAge);
      // eventBus.$emit("ageWasEdited", this.userAge);
      eventBus.changeAgeMain(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
