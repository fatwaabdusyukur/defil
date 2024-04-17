import { createRoot } from 'react-dom/client';

function computeSelector(options) {
    const [selector, isArray, childNum] = options;

    if (isArray === true) return document.querySelectorAll(selector).item(childNum);
    else return document.querySelector(selector);
}

export function injectComponent(options, component) {
    let isExist = false;

    const observer = new MutationObserver(() => {
        const target = computeSelector(options);
        if (target) {
            
            if (isExist === false) {
                const container = document.createElement('div');
                target.appendChild(container);
                createRoot(container).render(component);
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