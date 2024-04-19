import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeAlert } from "./logic";

function Alert(){
    const status = useSelector(state => state.alert.status);
    const msg = useSelector(state => state.alert.msg);
    const dispatch = useDispatch();

    return(
        <>
            {status &&
                (
                    <div className="fixed z-50 top-10 left-5 flex justify-between items-center bg-red-400">
                        <div className="basis-1/3 flex items-center justify-center p-2">
                            <svg width='20px' height='20px' fill='#eaeaea' viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z" fill='#eaeaea'/>``
                            </svg>
                        </div>
                        <div className="flex bg-red-300">
                            <div className="p-3">
                                <h2 className="font-reddit font-medium text-xl text-red-100">Warning!</h2>
                                <p className="font-roboto text-sm font-light text-red-50">{msg}</p>
                            </div>
                            <div className="p-2 self-start">
                                <button className="cursor-pointer" onClick={() => dispatch(closeAlert())}>
                                    <svg width='20px' height='20px' viewBox="0 0 24 24" fill='#eaeaea' xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill='#eaeaea'/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Alert;