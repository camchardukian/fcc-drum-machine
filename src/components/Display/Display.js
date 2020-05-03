import React from 'react';
import './styles.scss';
import DrumpadKey from '../DrumpadKey';

const Display = () => {
  return (
    <div id="display">
      <div className="display-row">
        <DrumpadKey id={'Q'} />
        <DrumpadKey id={'W'} />
        <DrumpadKey id={'E'} />
      </div>
      <div className="display-row">
        <DrumpadKey id={'A'} />
        <DrumpadKey id={'S'} />
        <DrumpadKey id={'D'} />
      </div>
      <div className="display-row">
        <DrumpadKey id={'Z'} />
        <DrumpadKey id={'X'} />
        <DrumpadKey id={'C'} />
      </div>
    </div>
  )
}

export default Display;