import React from 'react';
import './styles.scss';
import DrumpadKey from '../DrumpadKey';
import frog from '../../assets/audio/frog.mp3';
import dinosaur from '../../assets/audio/dinosaur.mp3';
import farm from '../../assets/audio/farm.mp3';
import growlingDogs from '../../assets/audio/growlingDogs.mp3';
import onTheFarm from '../../assets/audio/onTheFarm.mp3';
import parrotsTalking from '../../assets/audio/parrotsTalking.mp3';
import redStagRoar from '../../assets/audio/redStagRoar.mp3';
import trexRoar from '../../assets/audio/trexRoar.mp3';
import trexSound from '../../assets/audio/trexSound.mp3';

const Display = () => {
  const playSound = (key) => {
    document.getElementById(key).play()
  }
  return (
    <div id="display">
      <div className="display-row">
        <DrumpadKey id={'Q'} src={frog} onClick={() => playSound('Q')} />
        <DrumpadKey id={'W'} src={dinosaur} onClick={() => playSound('W')} />
        <DrumpadKey id={'E'} src={farm} onClick={() => playSound('E')} />
      </div>
      <div className="display-row">
        <DrumpadKey id={'A'} src={growlingDogs} onClick={() => playSound('A')} />
        <DrumpadKey id={'S'} src={onTheFarm} onClick={() => playSound('S')} />
        <DrumpadKey id={'D'} src={parrotsTalking} onClick={() => playSound('D')} />
      </div>
      <div className="display-row">
        <DrumpadKey id={'Z'} src={redStagRoar} onClick={() => playSound('Z')} />
        <DrumpadKey id={'X'} src={trexRoar} onClick={() => playSound('X')} />
        <DrumpadKey id={'C'} src={trexSound} onClick={() => playSound('C')} />
      </div>
    </div>
  )
}

export default Display;