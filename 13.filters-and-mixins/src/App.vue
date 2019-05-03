<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | toLowerCase}}</p>
        <hr>
        <button @click="fruits.push('Mango')">Add new item</button>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="fruit in filterdFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List";
import { fruitMixin } from "./fruitMixin.js";

export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello VueJS!!!"
      // fruits: ["Apple", "Banana", "Orange", "Kiwi"],
      // filterText: ""
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  // computed: {
  //   filterdFruits() {
  //     // this computed prop will be recalculated only if
  //     // fruits or filterText changes
  //     return this.fruits.filter(element => {
  //       // return element.match(this.filterText);
  //       return element.includes(this.filterText);
  //     });
  //   }
  // },
  components: {
    appList: List
  }
};
</script>

<style>
</style>
