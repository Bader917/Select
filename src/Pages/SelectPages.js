import React, { useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { useRef, useState } from 'react';

function SelectPages() {

    const element = useRef();
    const button = useRef();
    const [inputData, setInputData] = useState("");

    function Click () {
        element.current.classList.add("show");
    }

    function inputValue(Event) {
        setInputData(Event.target.innerHTML);
        element.current.classList.remove("show");
    }

    return (
        <div>
            <div className="select-option-one mt-2">
                <input type="text" value={inputData} onChange={inputValue} />
                <div className="select-box">
                    Select Your Class
                    <div className="select-icon" ref={button} onClick={Click}>
                        <FaChevronDown size={30} />
                    </div>
                </div>

                <div className='select-options' ref={element}>
                    <div className='option-div' onClick={inputValue}>Option One</div>
                    <div className='option-div' onClick={inputValue}>Option Two</div>
                    <div className='option-div' onClick={inputValue}>Option Three</div>
                    <div className='option-div' onClick={inputValue}>Option Four</div>
                </div>
            </div>
        </div>
    )
}

export default SelectPages;