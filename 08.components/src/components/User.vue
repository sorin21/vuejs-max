<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change name</button>
    <p>Name is {{name}}</p>
    <p>Age is {{age}}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-md-6">
        <app-user-edit :userAge="age" @ageWasEdited="age = $event" :changeAgain="changeAgain"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "Sorinel",
      age: 39
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Cristina";
    },
    resetName() {
      this.name = "Mike";
    },
    changeAgain() {
      this.age = 17;
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
