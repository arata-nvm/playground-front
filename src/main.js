import Vue from 'vue'
import App from './App.vue'

import "prismjs";
import "prismjs/themes/prism.css";
//vue-prism-editor dependency
import "vue-prism-editor/dist/VuePrismEditor.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
