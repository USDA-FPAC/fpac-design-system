
import { contentService } from '@/Content/_services/content.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  data: []
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getContent: state => state.data  
};

const actions = {

  setContent( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    contentService.getContent( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_CONTENT', result.data );
      }
    });
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_CONTENT( _state, _content ){
    _state.data = _content;
    _state.isLoaded = true;
  },

};

export const content = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};