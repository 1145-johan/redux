import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
// import Header from "./containers/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={ store }>
     <App />
     </Provider>
  </React.StrictMode>
);

// const root  = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Header/>
//   </React.StrictMode>
// )