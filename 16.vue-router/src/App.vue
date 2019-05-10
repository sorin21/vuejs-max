<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <!-- <app-header></app-header> -->
        <transition name="fade" mode="out-in">
          <router-view name="header-top"/>
        </transition>
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
        <transition name="fade" mode="out-in">
          <router-view name="header-bottom"/>
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
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s ease-in;
}
.fade-leave-active {
  transition: opacity 1s ease-out;
  opacity: 0;
}
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
