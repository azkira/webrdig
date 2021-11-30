import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMqtt from 'vue-mqtt'


Vue.config.productionTip = false

const mqttoptions = {
  username: '',
  password: ''
}

Vue.use(VueMqtt, 'ws://13.76.193.191:9001', mqttoptions);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
