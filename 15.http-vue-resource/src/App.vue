<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <br>
        <button class="btn btn-primary" @click="fetchData">Get data</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(user, index) in users"
            :key="index"
          >{{ user.username }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post("data.json", this.user)
      //   // after the request has beed send and we get a response back
      //   .then(response => {
      //     // console.log(response);
      //   })
      //   .catch(error => {
      //     console.log("It was an error", error);
      //   });
      // save is provided by vue resource
      // this.resource.save({}, this.user);
      this.resource.saveAlternative(this.user);
    },
    fetchData() {
      this.$http
        .get("data.json")
        .then(response => {
          response => (this.users = Object.values(response.body));
          return response.json();
          // .json is offered by vue-resource
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  },
  created() {
    let customActions = {
      // a new action
      saveAlternative: { method: "POST", url: "alternative.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>

<style>
</style>
