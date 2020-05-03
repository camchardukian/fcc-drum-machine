import React from 'react';
import './styles.scss';

const Drumpad = (props) => {
  return (
    <button className="drum-pad" id={`${props.id.toLowerCase()}-key`}>{props.id}</button>
  )
}

export default Drumpad;