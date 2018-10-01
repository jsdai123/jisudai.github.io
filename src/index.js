import Vue from 'vue';
import router from './router';
import App from './components/App.vue';
import { Actionsheet, Tag, Toast, Dialog, NavBar, Checkbox, Field, Cell, CellGroup, Picker, Icon, RadioGroup, Radio, Button, Popup, DatetimePicker } from 'vant';
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(DatetimePicker);
Vue.use(Actionsheet);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(Tag);
Vue.use(Dialog);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})