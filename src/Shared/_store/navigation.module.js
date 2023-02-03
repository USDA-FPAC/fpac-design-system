
import { navigationService } from '@/Shared/_services/navigation.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  data: [],
  isMenuOpen: false
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getNavigation: state => state.data,
  getIsMenuOpen: state => state.isMenuOpen
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
  },

  setMenuStatus({ commit, state, rootState }, payload ){
    console.log('payload',payload)
    commit('SET_MENU_STATUS', payload);
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

  SET_MENU_STATUS( state, payload){
    state.isMenuOpen = payload
  }

};

export const navigation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};