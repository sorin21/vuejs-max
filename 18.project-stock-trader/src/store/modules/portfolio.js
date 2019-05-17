const state = {
  funds: 1000,
  stocks: []
};

const getters = {
  // add all other global getters, refers to store getters
  // to have access to stocks from stocks module
  stocksPortfolio: (state, getters) => {
    // in the stocks array we have only ids and quantity
    return state.stocks.map(stock => {
      // element is the stock from stocks module and stock.id is from local stocks array, from above
      const record = getters.stocks.find(element => element.id == stock.id);

      // for each redord find return an object
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: state => {
    return state.funds;
  }
};

const mutations = {
  SET_PORTFOLIO(state, portfolio) {
    // edit out state by overwriting stocks
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    // check if there is any record, so find the stock by id in array
    const record = state.stocks.find(element => element.id == stockId);

    if (record) {
      // if the item is already in stocks don't push it, but update the quantity
      record.quantity += quantity;
    } else {
      // otherwise is a new item, so push it
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    // find the stock by id in array
    const record = state.stocks.find(element => element.id == stockId);

    // check if record quantity is bigger then the quantity I enter
    if (record.quantity > quantity) {
      // update the record quantity = old quantity minus the quantity I enter
      record.quantity -= quantity;
    } else {
      // but if I try to sell more than I have, or the exact amount that I have
      // I want to remove the record from array
      // find record's position in array
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    // update the funds too
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCK", order);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
