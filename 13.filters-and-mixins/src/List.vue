<template>
  <div class="container">
    <div class="row">
      <h1>Filters & Mixins</h1>
      <input type="text" v-model="filterText">
      <ul>
        <li v-for="fruit in filterdFruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin.js";

export default {
  mixins: [fruitMixin],
  created() {
    console.log("List Created");
  }
};
</script>

<style>
</style>
