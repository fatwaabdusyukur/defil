import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

function computeSelector(options) {
    const [selector, isArray, childNum] = options;

    if (isArray === true) return document.querySelectorAll(selector).item(childNum);
    else return document.querySelector(selector);
}

function wrapComponent(component, target, id = ""){
    const container = document.createElement("div");
    if (id !== "") container.id = id;
    target.appendChild(container);
    createRoot(container).render(<Provider store={store}>{component}</Provider>);
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

export const injectComponentToRoot = (component) => wrapComponent(component, document.body, "defil-extension-container");