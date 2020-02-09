import React from "react";
import ReactDOM from "react-dom";

import Header from "./navigation/navigation";
import registerServiceWorker from "./registerServiceWorker";

// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// provide the store to react
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
