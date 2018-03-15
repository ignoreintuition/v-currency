// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Currency from './v-currency'

Vue.config.productionTip = false
Vue.use(Currency, {
  "type": "USD",
  "thousandSeparator": true
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
