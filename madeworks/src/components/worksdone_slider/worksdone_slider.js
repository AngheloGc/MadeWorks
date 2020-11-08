import { Slider } from '@material-ui/core';

import './styled.scss';

function WorksdoneSlider(props) {
    return (
      <div className="WorksdoneSlider">
        <h5>{props.title}</h5>
        <hr />
        <div className="WorksdoneSlider_Content">
          <Slider
            defaultValue={props.default}
            aria-labelledby="discrete-slider-small-steps"
            step={props.step}
            min={props.min}
            max={props.max}
            valueLabelDisplay="on"
          />
        </div>
      </div>
    );
  }
  
  export default WorksdoneSlider;