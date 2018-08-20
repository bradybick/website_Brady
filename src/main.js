import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('bootstrap')
require('jquery.easing')

require('./assets/styles.css')
require('bootstrap/dist/css/bootstrap.css')

require('font-awesome/css/font-awesome.css')

Vue.prototype.jquery = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
