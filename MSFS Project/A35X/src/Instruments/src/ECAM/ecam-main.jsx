import ReactDOM from 'react-dom'
import {useState} from 'react'
import './ecam-main-style.scss'
import {
    renderTarget,
    useInteractionEvent,
    getSimVar,
    setSimVar,
    useUpdate
} from '../util.js';

const ECAM_SCREEN = () => {
    return(
        <div>
            <h1 id="text">ECAM</h1>
        </div>
    )
}

ReactDOM.render(<ECAM_SCREEN />, renderTarget)