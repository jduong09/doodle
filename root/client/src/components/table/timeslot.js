import { React, useState} from 'react';
import { calculateTimeFrame } from '../../util/timeframe';

export const TimeSlot = ({ date, startTime, duration, setPollAvailabilities, pollAvailabilities }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
    const block = document.createElement('span');
    const svgClose = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgClose.setAttribute('style', 'border: 1px solid black');
    svgClose.setAttribute('viewBox', '0 0 384 512');
    svgClose.setAttribute('width', '12px');
    svgClose.setAttribute('height', '12px');
    svgClose.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z");
    svgClose.appendChild(path);
    
    const timeframe = calculateTimeFrame(startTime, duration);
    block.innerText = timeframe;
    block.appendChild(svgClose);

    const minutes = startTime.split(':')[1];
    switch(minutes) {
      case '00':
        block.classList.add('p-0');
        break;
      case '15':
        block.classList.add('p-15');
        break;
      case '30':
        block.classList.add('p-30');
        break;
      case '45':
        block.classList.add('p-45');
        break;
      default:
        break;
    }

    switch (duration) {
      case '15':
        block.classList.add('h-25');
        break;
      case '30':
        block.classList.add('h-50');
        break;
      case '45':
        block.classList.add('h-75');
        break;
      case '60':
        block.classList.add('h-100');
        break;
      default:
        break;
    }

    e.target.appendChild(block);
    setIsClicked(!isClicked);

    const newObj = {
      ...pollAvailabilities
    };

    if (!pollAvailabilities[date]) {
      newObj[date] = [timeframe];
    } else {
      newObj[date] = [...pollAvailabilities[date], timeframe];
    }

    setPollAvailabilities(newObj);
  }

  return (
    <div className={`cell-half-hour ${isClicked ? 'highlight' : ''}`} data-time={startTime} onClick={(e) => handleClick(e)}></div>
  )
}