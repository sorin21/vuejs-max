import stocksData from "../../data/stocksData";

const state = {
  stocks: []
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

const mutations = {
  SET_STOCKS(state, stocks) {
    // edit out state by overwriting stocks
    state.stocks = stocks;
  },
  RND_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    // BUY_STUCK mutation is from portfolio module
    commit("BUY_STOCK", order);
  },
  initStock: ({ commit }) => {
    // initialize the app with the stocks, stocksData
    commit("SET_STOCKS", stocksData);
  },
  randomizeStock: ({ commit }) => {
    commit("RND_STOCKS");
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
