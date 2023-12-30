export const state = () => ({
  user: {},
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export const actions = {
  async fetchUser(context) {
    const res = await axios.get("users/1");
    context.commit("setUser", res.data);
  },
};
