import { React, useState} from 'react';
import { calculateTimeFrame } from '../../util/timeframe';

export const TimeSlot = ({ date, startTime, duration, setPollAvailabilities, pollAvailabilities }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    console.log('clicked');
    // <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>

    console.log(e.target);
    const block = document.createElement('span');
    block.innerText = `12:30 - 1:00`;
    const svgClose = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgClose.setAttribute('style', 'border: 1px solid black');
    svgClose.setAttribute('viewBox', '0 0 384 512');
    svgClose.setAttribute('width', '600');
    svgClose.setAttribute('height', '1em');
    svgClose.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z");
    svgClose.appendChild(path);
    block.appendChild(svgClose);

    const timeframe = calculateTimeFrame(startTime, duration);

    e.target.appendChild(block);
    setIsClicked(!isClicked);
    console.log(pollAvailabilities);
    const newObj = {
      ...pollAvailabilities
    };

    if (!pollAvailabilities[date]) {
      newObj[date] = [timeframe];
    } else {
      newObj[date] = [...pollAvailabilities[date], timeframe];
    }
    console.log(newObj)
    setPollAvailabilities(newObj);
  }

  return (
    <div className={`cell-half-hour ${isClicked ? 'highlight' : ''}`} data-time={startTime} onClick={(e) => handleClick(e)}></div>
  )
}