<template>
  <div>
    <h3>Edit user {{ $route.params.id }}</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <div style="height: 700px"></div>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    // we have access to this.confirmed because the component is already created
    if (this.confirmed) {
      console.log("inside UserEdit beforeRouteLeave");
      next();
    } else {
      if (confirm("Are you sure?")) {
        // if yeas
        next();
      } else {
        // if no
        next(false);
      }
    }
  }
};
</script>

<style scoped>
</style>