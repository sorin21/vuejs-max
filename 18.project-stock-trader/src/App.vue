<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <!-- <h1>Stocks and bounds</h1> -->
        <app-header></app-header>
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStock");
  }
};
</script>
  
<style>
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-in-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>