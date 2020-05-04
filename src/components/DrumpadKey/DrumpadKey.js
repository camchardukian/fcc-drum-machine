import React from 'react';
import './styles.scss';

const Drumpad = (props) => {
  return (
    <button onClick={props.onClick} className="drum-pad" id={`${props.id.toLowerCase()}-key`}>
      <audio className="clip" id={props.id} src={props.src}>
      </audio>
      {props.id}
    </button>
  )
}

export default Drumpad;