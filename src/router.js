import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from './components/Home.vue';
import Complete from './components/Complete.vue';
import Result from './components/Result.vue';
import TakeMoney from './components/TakeMoney.vue';
import Pay from './components/Pay.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/complete', component: Complete },
    { path: '/result', component: Result },
    { path: '/take_money', component: TakeMoney },
    { path: '/pay', component: Pay },
]

export default new VueRouter({
    routes
})