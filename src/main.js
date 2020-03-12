import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from "vue-analytics";

import "prismjs";
import "prismjs/themes/prism.css";
//vue-prism-editor dependency
import "vue-prism-editor/dist/VuePrismEditor.css";

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-158885575-3',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
