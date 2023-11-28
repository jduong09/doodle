import { React, useState, useEffect } from 'react';
import { classTopPosition, getDbTimestamp, createPossibleTimeBlock } from '../../util/tablehelpers';
import { TimeBlock } from './timeblock';

export const TimeSlot = ({ date, startTime, duration, setPollAvailabilities, pollAvailabilities, hour }) => {
  const [selected, setSelected] = useState(false);
  
  useEffect(() => {
    for (const chosenDate in pollAvailabilities) {
      if (chosenDate === date) {
        pollAvailabilities[chosenDate].forEach((time) => {
          const dateObject = new Date(`${chosenDate}T${time}.000Z`);
          const convertedLocalTime = dateObject.toTimeString().slice(0, 6);
          const arrTime = convertedLocalTime.split(':');
          if (parseInt(arrTime[0]) === hour && arrTime[1] === startTime.split(':')[1]) {
            setSelected(true);
          }
        });
      }
    }
  }, []);

  const handleMouseenter = (e) => {
    e.preventDefault();

    if (e.target.children.length === 0) {
      const possibleTimeBlock = createPossibleTimeBlock(date, startTime, duration);
      e.target.appendChild(possibleTimeBlock);
    }
  }

  const handleMouseleave = (e) => {
    e.preventDefault();
    
    if (e.target.querySelector('span.temp-timeblock')) {
      e.target.querySelector('span.temp-timeblock').remove();
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const [dbDate, dbTime] = getDbTimestamp(date, startTime);

    const newPollAvail = {
      ...pollAvailabilities,
    };

    if (!newPollAvail[dbDate]) {
      newPollAvail[dbDate] = [dbTime];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    } else if (!newPollAvail[dbDate].includes(dbTime)) {
      newPollAvail[dbDate] = [...newPollAvail[dbDate], dbTime];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newPollAvail = {
      ...pollAvailabilities,
    };

    const [dbDate, dbTime] = getDbTimestamp(date, startTime);
    const array = newPollAvail[dbDate].filter((time) => time !== dbTime);

    if (!array.length) {
      delete newPollAvail[dbDate];
    } else {
      newPollAvail[dbDate] = array;
    }
    
    setSelected(false);
    setPollAvailabilities(newPollAvail);
  }

  const currentTimestamp = new Date();
  const timeSlotTimeStamp = new Date(`${date}T${startTime}`);

  return (
    <div
      className={`cell-half-hour ${timeSlotTimeStamp < currentTimestamp ? 'disabled' : ''}`}
      data-time={startTime} onClick={(e) => handleClick(e)}
      onMouseEnter={handleMouseenter}
      onMouseLeave={handleMouseleave}>
      {selected && 
        <TimeBlock
          handleDelete={handleDelete}
          date={date}
          startTime={startTime}
          duration={duration}
          classTopPosition={classTopPosition(startTime.split(':')[1])}
          classHeight={`h-${duration}`}
        />
      }
    </div>
  );
}