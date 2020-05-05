import React, { useState } from 'react';
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
  const [soundType, setSoundType] = useState('Nothing yet!');
  document.addEventListener('keyup', function (event) {
    switch (event.code) {
      case 'KeyQ':
        playSound('Q')
        break;

      case 'KeyW':
        playSound('W')
        break;

      case 'KeyE':
        playSound('E')
        break;

      case 'KeyA':
        playSound('A')
        break;

      case 'KeyS':
        playSound('S')
        break;

      case 'KeyD':
        playSound('D')
        break;

      case 'KeyZ':
        playSound('Z')
        break;

      case 'KeyX':
        playSound('X')
        break;

      case 'KeyC':
        playSound('C')
        break;

      default:
        return null;
    }
  })
  const playSound = (key) => {
    document.getElementById(key).play();
    switch (key) {
      case 'Q':
        setSoundType('Frogs')
        break;

      case 'W':
        setSoundType('Dinosaurs')
        break;

      case 'E':
        setSoundType('Farm')
        break;

      case 'A':
        setSoundType('Growling Dogs')
        break;

      case 'S':
        setSoundType('On The Farm')
        break;

      case 'D':
        setSoundType('Parrots Talking')
        break;

      case 'Z':
        setSoundType('Red Stag Roaring')
        break;

      case 'X':
        setSoundType('t-Rex Roaring')
        break;

      case 'C':
        setSoundType('t-Rex Sounds')
        break;
      default:
        return null;
    }
  }
  return (
    <div id="display">
      <div className="flex-container">
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
      <h2 className="sound-sentence-text">The last sound requested was: <span className="sound">{soundType}</span></h2>
    </div>
  )
}

export default Display;