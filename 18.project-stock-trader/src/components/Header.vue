<template>
  <!-- <ul class="nav nav-pills">
    <router-link tag="li" active-class="active" to="/" exact>
      <a>Home</a>
    </router-link>
    <router-link tag="li" active-class="active" to="/portfolio">
      <a>Portfolio</a>
    </router-link>
    <router-link tag="li" active-class="active" to="/stocks">
      <a>Stocks</a>
    </router-link>
  </ul>-->

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/" exact>Stocks and Bonds</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" active-class="active" to="/" exact>
            <a>Home</a>
          </router-link>
          <router-link tag="li" active-class="active" to="/portfolio" exact>
            <a>Portfolio</a>
          </router-link>
          <router-link tag="li" active-class="active" to="/stocks" exact>
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">funds: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li
            class="dropdown"
            :class="{open: isDropDownOpen}"
            @click="isDropDownOpen = !isDropDownOpen"
          >
            <a
              class="dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" @click="saveData">Save Data</a>
              </li>
              <li>
                <a href="#" @click="loadServerData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropDownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStock", "loadData"]),
    endDay() {
      this.randomizeStock();
    },
    saveData() {
      // create an obj with all data I need
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stocksPortfolio,
        stocks: this.$store.getters.stocks
      };

      // with put we overwrite the firebase data
      // data.json is the node that we create on firebase
      this.$http.put("data.json", data);
    },
    loadServerData() {
      this.loadData();
    }
  }
};
</script>

<style scoped>
</style>