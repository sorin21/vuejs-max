<template>
  <div>
    <h1>Portfolio</h1>
    <app-portfolio-stock v-for="stock in stockss" :key="stock.id" :stock="stock"></app-portfolio-stock>
  </div>
</template>

<script>
import SingleStock from "./SingleStock";

export default {
  components: {
    appPortfolioStock: SingleStock
  },
  computed: {
    stockss() {
      return this.$store.getters.stocksPortfolio;
    }
  }
};
</script>

<style scoped>
</style>