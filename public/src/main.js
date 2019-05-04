import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


Vue.use(Vuetify)

new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
