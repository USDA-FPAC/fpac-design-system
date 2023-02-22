
import { uxPatternsService } from '@/UX-Patterns/_services/ux-patterns.service';

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

    uxPatternsService.doNothing( (result) => {
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

export const uxPatterns = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};