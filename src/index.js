import App from './App.svelte'
import 'virtual:windi.css'

let app = new App({
  target: document.getElementById('app'),
})

export default app

// Hot module replacement (HMR) - remove me to remove HMR
// if (import.meta.hot) {
//   import.meta.hot.accept()
//   import.meta.hot.dispose(() => {
//     app.$destroy()
//   })
// }
