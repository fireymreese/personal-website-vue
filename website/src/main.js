import Vue from 'vue'
import App from './App.vue'

// export const eventBus = new Vue({
//   data() {
//     return {
//       isSelected: 'app-home',
//     }
//   },
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
