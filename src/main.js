import Vue from 'vue'
import App from './App'
import '../static/css/common.css'
Vue.config.productionTip = false
App.mpType = 'app'
var Fly = require("../lib/wx")
var fly = new Fly()
fly.config.baseURL = 'http://pserver.eyozu.com'
Vue.prototype.$http = fly
const app = new Vue(App)
app.$mount()
