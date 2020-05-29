import { render } from "preact";
import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import { updateOnlineStatus } from "./features/onlineStatus/onlineSlice";
import { setUpdateAvailable } from "./features/update/updateSlice";
import * as serviceWorker from "./serviceWorker";

function start() {
  const rootElement = document.getElementById("root");
  const App = require("./app/App").default;

  const Element = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  render(<Element />, rootElement as HTMLElement);
}

if (process.env.NODE_ENV === "development") {
  // require("preact/debug");
  if (module.hot) {
    module.hot.accept("./app/App", start);
  }
}

start();

/**
 * Register service worker
 */
serviceWorker.register({
  onUpdate: (registration) => {
    store.dispatch(setUpdateAvailable(true));
    registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
  },
});

/**
 * Register event handlers for online / offline mode
 */
window.addEventListener("online", () => {
  store.dispatch(updateOnlineStatus(true));
});
window.addEventListener("offline", () => {
  store.dispatch(updateOnlineStatus(false));
});
