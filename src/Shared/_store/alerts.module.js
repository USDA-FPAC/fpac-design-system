

const state = () =>({
  alerts: []
});
  

const getters = {
  getAlerts: state => state.alerts  
};

const actions = {

  addAlert( { commit }, _payload ){
    commit('SET_ADD_ALERT', _payload );
  },

  removeAlert( { commit }, _payload ){
    commit('SET_REMOVE_ALERT', _payload );
  },

  removeAllAlerts( { commit } ){
    commit('SET_REMOVE_ALL_ALERTS');
  }

};

const mutations = {
  SET_ADD_ALERT(_state, _payload){
    let arr = [..._state.alerts];
    arr.push(_payload)
    _state.alerts = arr;
  },

  SET_REMOVE_ALERT( _state, _payload ){
    let arr = [..._state.alerts];
    _state.alerts = arr.filter( (o) => { 
      if( o.id !== _payload.id ) return true;
      else return false;
    });
  },

  SET_REMOVE_ALL_ALERTS( _state, _payload ){
    _state.alerts = [];
  }

};

export const alerts = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};