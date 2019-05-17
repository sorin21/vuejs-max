<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>({{ stock.price | currency }} | {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-info"
            @click="sellPortfolioStocks"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity) || insufficientQuantity"
          >{{insufficientQuantity ? 'No Stocks' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    stock: Object
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      // check if the quantity we enter is > then the quantity we have in portfolio stock
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    // ...mapActions(["sellStock"]),
    sellPortfolioStocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("sellStock", order);
      // this.sellStock(order);
      // console.log(order);
      // reset quantity
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>