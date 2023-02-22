
import { visualStyleService } from '@/Visual-Style/_services/visual-style.service';

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

    visualStyleService.doNothing( (result) => {
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

export const visualStyle = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};