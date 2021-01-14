import App from './App.svelte';

let app = new App({
  target: document.body,
});

export default app;

// Hot module replacement (HMR) - remove me to remove HMR
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
