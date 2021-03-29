import ReactDOM from 'react-dom'
import {useState} from 'react'
import './mfd-main-style.scss'
import {
    renderTarget,
    useInteractionEvent,
    getSimVar,
    setSimVar,
    useUpdate
} from '../util.js';

const MFD_SCREEN = () => {
    return(
        <div>
            <h1 id="text">MFD</h1>
        </div>
    )
}

ReactDOM.render(<MFD_SCREEN />, renderTarget)