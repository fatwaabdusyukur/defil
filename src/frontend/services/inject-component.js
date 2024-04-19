import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchPersonalTweet } from "../components/modal/logic";

function computeSelector(options) {
    const [selector, isArray, childNum] = options;

    if (isArray === true) return document.querySelectorAll(selector).item(childNum);
    else return document.querySelector(selector);
}

function wrapComponent(components, target, id = ""){
    const container = document.createElement("div");
    if (id !== "") container.id = id;
    target.appendChild(container);
    const wrappedComponents = components.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ));
    createRoot(container).render(<Provider store={store}>{wrappedComponents}</Provider>);
}

export function injectComponent(options, component) {
    let isExist = false;

    const observer = new MutationObserver(() => {
        const target = computeSelector(options);
        if (target) {
            
            if (isExist === false) {
                wrapComponent(component, target);
                isExist = true;
            }

        } else {
            isExist = false;
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

export function listenContextMenu() {
    chrome.runtime.onMessage.addListener((msg) => {
        if (msg.action === 'filterTweet') {
            store.dispatch(fetchPersonalTweet(msg.value));
        }
    })
}

export const injectComponentToRoot = (components) => wrapComponent(components, document.body, "defil-extension-container");

export const getImg = (path) => chrome.runtime.getURL(path);