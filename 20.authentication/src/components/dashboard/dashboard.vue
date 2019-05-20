<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address {{ email }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    email() {
      // if user is set return false
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
      // return this.$store.getters.user.email;
    }
  },
  // load somethind when we load this page
  created() {
    // axios.get("users.json").then(response => {
    //   const data = response.data;
    //   const users = [];
    //   // for (let key in res.data) {
    //   //   this.email = res.data[key].email;
    //   //   break;
    //   // }
    //   for (let key in data) {
    //     // users.push(data[key]);
    //     // console.log("key", key);
    //     // console.log("data[key]", data[key]);
    //     // console.log(" users.push(data[key])", users);
    //     const user = data[key];
    //     user.id = key;
    //     users.push(user);
    //   }
    //   console.log("users", users);
    //   this.email = users[0].email;
    // });
    this.$store.dispatch("fetchUser");
  }
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>