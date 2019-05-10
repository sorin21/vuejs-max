import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../components/Dashboard.vue";
// import User from "../components/User.vue";
// import UserDetail from "../components/UserDetail.vue";
// import UserEdit from "../components/UserEdit.vue";
// import UserStart from "../components/UserStart.vue";
import Header from "../components/Header.vue";

// const User = resolve => {
//   // webpack will recognize and execute
//   require.ensure(["../components/User.vue"], () => {
//     // this is like a promise, resolve before executed, so
//     // webpack will load this only we need this file
//     resolve(require("../components/User.vue"));
//   }, 'user');
// };
// const UserStart = resolve => {
//   require.ensure(["../components/UserStart.vue"], () => {
//     resolve(require("../components/UserStart.vue"));
//   }, 'user');
// };
// const UserDetail = resolve => {
//   require.ensure(["../components/UserDetail.vue"], () => {
//     resolve(require("../components/UserDetail.vue"));
//   }, 'user');
// };
// const UserEdit = resolve => {
//   require.ensure(["../components/UserEdit.vue"], () => {
//     resolve(require("../components/UserEdit.vue"));
//   }, 'user');
// };

const User = () =>
  import(/* webpackChunkName: "user" */ "../components/User.vue");
const UserStart = () =>
  import(/* webpackChunkName: "user" */ "../components/UserStart.vue");
const UserDetail = () =>
  import(/* webpackChunkName: "user" */ "../components/UserDetail.vue");
const UserEdit = () =>
  import(/* webpackChunkName: "user" */ "../components/UserEdit.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // check if the user used back button
    if (savedPosition) {
      return savedPosition;
    }
    // use a selector
    // check if the route we want to navigate has a hash property set
    // and go to it
    if (to.hash) {
      // the hash is the data from UserDetail.vue:  hash: "#data"
      return { selector: to.hash };
    }
    // else go down 700px
    // return { x: 0, y: 700 };

    // if hash is not set scroll to the top
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Dashboard",
      components: {
        default: Dashboard,
        "header-top": Header
      }
    },
    {
      path: "/user",
      name: "User",
      components: {
        default: User,
        "header-bottom": Header
      },
      props: true,
      children: [
        {
          path: "",
          name: "UserStart",
          component: UserStart
        },
        {
          path: ":id",
          name: "UserDetail",
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            console.log("inside route UserDetail");
            next();
          }
        },
        {
          path: ":id/edit",
          name: "UserEdit",
          component: UserEdit
        }
      ]
    },
    {
      path: "/redirectme",
      redirect: { name: "UserEdit" }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
