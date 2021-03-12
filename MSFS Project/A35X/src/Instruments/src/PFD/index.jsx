import ReactDOM from 'react-dom'
import './style.scss'
import {
    renderTarget,
    useInteractionEvent,
    getSimVar,
    setSimVar,
    useUpdate
} from '../util.js';

const Instrument = () => {
  //runs code on every frame
  useUpdate(dt => {
    //dt is the time elapsed since last frame, in milliseconds (deltaTime)
    setSimVar(simvar-name, value, simvar-unit);
    getSimVar(simvar-name, simvar-unit);
  });
  return(
  <div>
      <h1 color="green">This is the PFD</h1>
  </div>
  )
}

ReactDOM.render(<Instrument />, renderTarget)