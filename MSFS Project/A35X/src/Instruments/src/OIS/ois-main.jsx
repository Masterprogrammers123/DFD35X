import ReactDOM from 'react-dom'
import {useState} from 'react'
import './ois-main-style.scss'
import {
    renderTarget,
    useInteractionEvent,
    getSimVar,
    setSimVar,
    useUpdate
} from '../util.js';

const OIS_SCREEN = () => {
    return(
        <div>
            <h1 id="text">OIS</h1>
        </div>
    )
}

ReactDOM.render(<OIS_SCREEN />, renderTarget)