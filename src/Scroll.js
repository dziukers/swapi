import React from 'react';
import './App.css';
const Scroll = (props) => {
    return (
        <div className="scroll" style={{overflowY: 'auto', height:'calc(100vh - 200px)'}}>
            {props.children}
        </div>
    )
}

export default Scroll;