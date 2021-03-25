import ReactDOM from 'react-dom'
import {useState} from 'react'
import './style.scss'
import {
    renderTarget,
    useInteractionEvent,
    getSimVar,
    setSimVar,
    useSimVar,
    useUpdate
} from '../util.js';

const EFIS_SCREEN = () => {
    let [pitch, setPitch] = useState(0)
    let [roll, setRoll] = useState(0)
    let [IAS, setIAS] = useState(0)
    let [altMSL, setAltMSL] = useState(0)
    
    useUpdate(dt => {
        setPitch(getSimVar('A:PLANE PITCH DEGREES', 'degrees'))
        setRoll(getSimVar('A:PLANE BANK DEGREES', 'degrees'))
        setIAS(getSimVar('A:AIRSPEED INDICATED', 'knots'))
        setAltMSL(getSimVar('A:INDICATED ALTITUDE', 'feet'))
    })

    let altitudeTapeArray = []
    for (const x of Array(84)) {
        altitudeTapeArray.push(x)
    }
    altitudeTapeArray.reverse()

    return(
        <div>
            <div id="background">
                <img src="/Pages/VCockpit/Instruments/generated/EFIS/EFIS_MASK.png"/>
            </div>

            <div id="horizon">
                <img src="/Pages/VCockpit/Instruments/generated/EFIS/EFIS_PFD_HORIZON.png" style={{
                    transformOrigin: `center ${2000 - (-pitch*7.4)}px`, 
                    transform: 'translateY( ' + (-pitch * 7.4).toString() + 
                    'px) rotate(' + roll.toString() + 'deg'
                }}/>
            </div>
            <div id="horizon_indicator">
                <img src="/Pages/VCockpit/Instruments/generated/EFIS/EFIS_PFD_HORIZON_disp.png"/>
            </div>

            <div id="airspeed_indicator">
                <img src="/Pages/VCockpit/Instruments/generated/EFIS/EFIS_PFD_AIRSPEED_INDICATOR.png" style={{
                    transform: IAS >= 30 ? 'translateY(' + ((IAS - 30) * 3.8).toString() + 'px)' : 'none'
                }}/>
            </div>
            <div id="airspeed_indicator_overlay">
                <img src="/Pages/VCockpit/Instruments/generated/EFIS/EFIS_PFD_AIRSPEED_INDICATOR_OVERLAY.png"/>
            </div>

            <div id="altitude_indicator">
                <ul>{altitudeTapeArray.map((number, i) => <li key={i}>{number}</li>)}</ul>
            </div>

            <div id="info">
                <h1>Airspeed: {Math.round(IAS)}</h1>
                <h1>Altitude MSL: {Math.round(altMSL)}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(<EFIS_SCREEN />, renderTarget)