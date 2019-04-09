import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/app.styl'

import {
  Vuetify,
  VApp,
  VCard,
  VIcon,
  VGrid,
  VToolbar,
  VSelect,
  VList
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VCard,
    VIcon,
    VGrid,
    VToolbar,
    VSelect,
    VList
  },
  theme: {
    primary: '#4CAF50',
    secondary: '#43A047',
    accent: '#9c27b0',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
