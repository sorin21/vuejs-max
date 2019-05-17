import Vue from "vue";

export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    // get data and transf it into a js object
    // .then(( body ) => body.json)
    .then(({ body }) => {
      if (body) {
        // console.log(extracted);
        const funds = body.funds;
        const stockPortfolio = body.stockPortfolio;
        const stocks = body.stocks;

        const portfolio = {
          funds,
          stockPortfolio
        };

        commit("SET_STOCKS", stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
