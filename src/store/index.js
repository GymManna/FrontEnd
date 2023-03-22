import { createStore } from 'vuex'

export default createStore({
  state: {
    // 글로벌로 관리될 상태 값 
    VuexId: "",
    VuexNickname: ""
  },
  getters: {
    // 데이터에 변화를 줄 순 없다.
    getVuexId: (state) => {
      return state.VuexId;
    },
    getVuexNickname: (state) => {
      return state.VuexNickname;
    }
  },
  mutations: {
    // 실제 데이터 변화가 일어나는 곳
    mutSetVuexId: (state, id) => {
      state.VuexId = id;
    },
    mutSetVuexNickname: (state, nickname) => {
      state.VuexNickname = nickname;
    }
  },
  actions: {
    // mutaion 을 일을키위한 행동, 컴포넌트에서는 actions 를 사용한다
    setVuexId: (context, id) => {
      console.log("@@@ Vuex-setVuexId : " + id);
      context.commit("mutSetVuexId", id);
    },
    setVuexNickname: (context, nickname) => {
      console.log("@@@ Vuex-setVuexNickname : " + nickname);
      context.commit("mutSetVuexNickname", nickname);
    }
  },
  modules: {
  }
})
