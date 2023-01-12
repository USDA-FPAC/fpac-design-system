
import { homeService } from '@/Home/_services/home.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  data: []
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors
};

const actions = {

  doAction( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    homeService.doNothing( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('DO_MUTATION', result.data );
      }
    });
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  DO_MUTATION( state, payload ){
    state.data = payload;
    state.isLoaded = true;
  },

};

export const home = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};