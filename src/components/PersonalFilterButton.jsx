import React from 'react';

function PersonalFilterButton() {
    const img = chrome.runtime.getURL('/img/logo.png');
    return(
        <div className="w-[36px] h-[36px] rounded-full bg-gray-400">
            <button className="w-[2.125rem] h-[2.125rem] flex justify-center items-center">
                <img src={img} alt="logo" className="w-5 h-5"/>
            </button>
        </div>
    )
}

export default PersonalFilterButton;