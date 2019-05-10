<template>
  <div>
    <h3>User Details</h3>
    <p>User loaded had id: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link">Edit user {{ $route.params.id }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "UserEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("inside component UserDetail");
    // check is user is authenticated her
    // if(user) {}

    // if we want to access link
    // next(vm => {
    //   console.log(vm.link);
    // });

    next();
  }
};
</script>

<style scoped>
</style>