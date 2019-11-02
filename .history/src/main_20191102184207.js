import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAaxios from 'vue-axios'

Vue.config.productionTip = false
import router from './router'
Vue.use(VueAaxios,axios)
new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
