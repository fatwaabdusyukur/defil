import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from './logic';

function Modal() {
    const status = useSelector(state => state.modal.status);
    const msg = useSelector(state => state.modal.msg);
    const dispatch = useDispatch();

    return (
        <>
        {status && (
            <div className="fixed z-50 top-0 left-0 flex justify-center items-center w-full h-full bg-gray-600/35">
                <div className="absolute w-96 rounded bg-gray-200 p-2">
                    <h2 className="text-lg font-medium font-reddit text-gray-900 border-b border-b-gray-400 pb-1">Filter Tweet</h2>
                    <p className="text-sm font-normal font-roboto mt-1 text-gray-900">{ msg } <span className="font-reddit text-gray-900 underline decoration-double decoration-sky-500">Defamation</span></p>
                    <div className="flex items-center gap-2 justify-end">
                        <button className="py-2 px-5 bg-sky-300 text-zinc-100 hover:bg-sky-500 rounded-full" onClick={() => dispatch(setModal({ status: false, msg: "" }))}>Close</button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default Modal;