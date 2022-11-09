
import { navigationService } from '../_services/navigation.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  data: []
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getNavigation: state => state.data  
};

const actions = {

  setNavigation( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    navigationService.getNavigation( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_NAV', result.data );
      }
    });
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_NAV( state, navigation ){
    state.data = navigation;
    state.isLoaded = true;
  },

};

export const navigation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};