import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import Darkmode from "darkmode-js";


document.addEventListener("DOMContentLoaded", () => {
    const divRoot = document.getElementById("root");
    let store;
    store =  configureStore();
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // new Darkmode().showWidget();
    ReactDOM.render(<Root store={store} /> , divRoot);
})

document.addEventListener("click", (e) => {
    if (!e.target.matches(".icons-cont") || e.currentTarget.style.color === "white") {
        let dropdowns = document.getElementsByClassName('down');
        for (let i = 0; i < dropdowns.length; i++) {
            let open = dropdowns[i];
            if (!open.classList.contains('hidden')){
                open.classList.add('hidden')
            }
        }
        let icons = document.getElementsByClassName('gray');
        for (let i = 0; i < icons.length; i++) {
            let white = icons[i];
            if (white.style.color === "white") {
                white.style.color = "rgb(58, 56, 56)";
            }
        }
    }
})
    