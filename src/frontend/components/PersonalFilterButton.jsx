import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersonalTweet } from './modal/logic.js';
import { openAlert } from "./alert/logic.js";
import { getImg } from "../services/inject-component.js";
import { detectIndonesianLang } from "../services/language-detection.js";

function filterTweet(dispatch){
    const element = document.querySelector('span[data-text="true"]');
    if(element === null) dispatch(openAlert("Tweet masih kosong!"));
    else {
        const tweet = element.textContent;
        const { status, msg } = detectIndonesianLang(tweet);
        if (status) dispatch(fetchPersonalTweet(tweet));
        else dispatch(openAlert(msg));
    };
}

function PersonalFilterButton() {
    const img = getImg('/img/logo.png');
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