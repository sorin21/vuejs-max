import axios from "axios";

// create a new axios instance
const instance = axios.create({
  // baseURL: "https://vuejs-axios-3c8dd.firebaseio.com/"
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});

// instance.defaults.headers.common["SOMETHING"] = "ahahaha";

export default instance;
