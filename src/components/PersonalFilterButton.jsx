import React from 'react';
import { prep } from "../services/prepocessing.js";

function filterTweet(){
    const element = document.querySelector('span[data-text="true"]');
    if(element === null) alert("Tweet is Empty!");
    else alert(prep(element.textContent));
}

function PersonalFilterButton() {
    const img = chrome.runtime.getURL('/img/logo.png');
    return(
        <div className="w-[36px] h-[36px] rounded-full bg-gray-400">
            <button className="w-[2.125rem] h-[2.125rem] flex justify-center items-center" onClick={filterTweet}>
                <img src={img} alt="logo" className="w-5 h-5"/>
            </button>
        </div>
    )
}

export default PersonalFilterButton;