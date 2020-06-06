"use strict";

import { home } from "./home.js";

// Routing

const routes = {
  "/": home(),
  //"/country": country,
};

const rootDiv = document.getElementById("root");

async function init() {
  let tmpl = await routes[window.location.pathname];
  rootDiv.innerHTML = tmpl.innerHTML;
}

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

init();
