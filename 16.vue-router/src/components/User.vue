<template>
  <div>
    <h1>User Page</h1>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <p>Loaded id: {{ id }}</p>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     // $route is the active route
  //     id: this.$route.params.id
  //   };
  // },
  methods: {
    navigateToHome() {
      // $router is router itself that has routes
      // push a new route in the stack of existing routes
      this.$router.push({
        // path: "/" or
        name: "Dashboard"
      });
    }
  },
  watch: {
    $route(to, from) {
      console.log(to); // see what's inside and what you can access
      console.log(from);
    }
  }
  // watch: {
  //   // vue router gives to, from args: to what route, from what route
  //   $route(to, from) {
  //     // to the new route that get loaded
  //     this.id = to.params.id;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
