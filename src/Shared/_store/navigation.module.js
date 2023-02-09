
import { navigationService } from '@/Shared/_services/navigation.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  data: [],
  isMenuOpen: false,
  selectedMenu: ''
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getNavigation: state => state.data,
  getIsMenuOpen: state => state.isMenuOpen,
  getSelectedMenu: state => state.selectedMenu
};

const actions = {

  setNavigation( { commit, state, rootState }, _payload ){
    commit('SET_ERRORS', []);

    navigationService.getNavigation( (_result) => {
      if(_result.errors){
        commit('SET_ERRORS', _result.errors);
      } else {
        commit('SET_NAV', _result.data );
      }
    });
  },

  setMenuOpen({ commit, state, rootState }, _payload ){
    commit('SET_MENU_OPEN', _payload);
  },

  setSelectedMenu({ commit, state, rootState }, _payload ){
    commit('SET_SELECTED_MENU', _payload);
  },

};

const mutations = {
  SET_ERRORS(_state, _payload){
    _state.errors = _payload;
  },

  SET_NAV( _state, _navigation ){
    _state.data = _navigation;
    _state.isLoaded = true;
  },

  SET_MENU_OPEN( _state, _payload){
    _state.isMenuOpen = _payload;
  },

  SET_SELECTED_MENU( _state, _payload ){
    console.log('_payload',_payload)
    _state.selectedMenu = _payload;
  }

};

export const navigation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};