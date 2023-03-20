
const methods = {
  moveTo(page) {
    console.log("@@ moveTo(" + page + ")");
    this.$router.push(page).catch(() => { });
  },
}

export default {
  install(Vue) {
    Vue.config.globalProperties.$moveTo = methods.moveTo;
  }
}
