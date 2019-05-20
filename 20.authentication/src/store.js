import Vue from "vue";
import Vuex from "vuex";
import globalAxios from "axios";

import axios from "./axios-auth";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      // we have to set up in action these two
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    register({ commit, dispatch }, authData) {
      axios
        .post("/signupNewUser?key=AIzaSyAxhMOppuwuWBsqEYbKXzKhEOjg9g5OLYM", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response);
          commit("authUser", {
            // idToken and localId come from firebase
            token: response.data.idToken,
            userId: response.data.localId
          });
          // get all the data here, from  signup formData
          console.log("authData", authData);
          dispatch("storeUser", authData);
        })
        .catch(error => console.log(error));
    },
    login({ commit }, authData) {
      axios
        .post("/verifyPassword?key=AIzaSyAxhMOppuwuWBsqEYbKXzKhEOjg9g5OLYM", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response);
          commit("authUser", {
            // idToken and localId come from firebase
            token: response.data.idToken,
            userId: response.data.localId
          });
        })
        .catch(error => console.log(error));
    },
    storeUser({ commit, state }, userData) {
      console.log("state", state);
      // if is not set
      if (!state.idToken) {
        // exit to not meke the request
        return;
      }
      console.log("userData", userData);

      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      // if is not set
      if (!state.idToken) {
        // exit to not meke the request
        return;
      }
      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
        .then(response => {
          const data = response.data;
          const users = [];
          // for (let key in res.data) {
          //   this.email = res.data[key].email;
          //   break;
          // }
          for (let key in data) {
            // users.push(data[key]);
            // console.log("key", key);
            // console.log("data[key]", data[key]);
            // console.log(" users.push(data[key])", users);

            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log("users", users);
          // this.email = users[0].email;
          commit("storeUser", users[0]);
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  },
  getters: {
    user: state => {
      return state.user;
    }
  }
});
