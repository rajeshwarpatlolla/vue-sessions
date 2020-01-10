import axios from "axios";

const actions = {
  addProductAction: async store => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    // make api call here
    // store.commit("changeProductsMutation", payload);
    store.commit("addUsersMutation", users.data);
  },
};

export default actions;
