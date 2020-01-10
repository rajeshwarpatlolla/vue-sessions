const mutations = {
  changeProductsMutation(store, payload) {
    store.products.push(payload);
  },
  addUsersMutation(store, payload) {
    store.users = payload;
  },
};

export default mutations;
