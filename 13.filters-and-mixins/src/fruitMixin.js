export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Kiwi"],
      filterText: ""
    };
  },
  computed: {
    filterdFruits() {
      // this computed prop will be recalculated only if
      // fruits or filterText changes
      return this.fruits.filter(element => {
        // return element.match(this.filterText);
        return element.includes(this.filterText);
      });
    }
  },
  created() {
    console.log("Created");
  }
};
