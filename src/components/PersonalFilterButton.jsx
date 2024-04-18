import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from './modal/logic.js';
import { prep } from "../services/prepocessing.js";

function filterTweet(dispatch){
    const element = document.querySelector('span[data-text="true"]');
    if(element === null) alert("Tweet is Empty!");
    else dispatch(setModal({ status: true, msg: prep(element.textContent) }));
}

function PersonalFilterButton() {
    const img = chrome.runtime.getURL('/img/logo.png');
    const dispatch = useDispatch();

    return(
        <div className="w-[36px] h-[36px] rounded-full bg-gray-400">
            <button className="w-[2.125rem] h-[2.125rem] flex justify-center items-center" onClick={() => filterTweet(dispatch)}>
                <img src={img} alt="logo" className="w-5 h-5"/>
            </button>
        </div>
    )
}

export default PersonalFilterButton;