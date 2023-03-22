import { createStore } from 'vuex'

export default createStore({
  state: {
    // 글로벌로 관리될 상태 값 
    VuexId: ""
  },
  getters: {
    // 데이터에 변화를 줄 순 없다.
    getVuexId: (state) => {
      // console.log("@@@ Vuex-getVuexId : " + state.VuexId);
      return state.VuexId;
    }
  },
  mutations: {
    // 실제 데이터 변화가 일어나는 곳
    mutSetVuexId: (state, id) => {
      // console.log("@@@ Vuex-mutSetVuexId : " + state.VuexId + "에서 " + id + "로 변경");
      state.VuexId = id;
    }
  },
  actions: {
    // mutaion 을 일을키위한 행동, 컴포넌트에서는 actions 를 사용한다
    setVuexId: (context, id) => {
      console.log("@@@ Vuex-setVuexId : " + id);
      context.commit("mutSetVuexId", id);
    }
  },
  modules: {
  }
})
