import { React, useState, useEffect } from 'react';
import { classTopPosition, classHeight, getDbTime } from '../../util/tablehelpers';
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
          if (parseInt(arrTime[0]) === hour) {
            setSelected(true);
          }
        });
      }
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('selected', startTime);
    
    const dbTime = getDbTime(date, startTime);
   
    const newPollAvail = {
      ...pollAvailabilities,
    };

    if (!newPollAvail[date]) {
      newPollAvail[date] = [dbTime];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    } else if (!newPollAvail[date].includes(dbTime)) {
      newPollAvail[date] = [...newPollAvail[date], dbTime];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Handle Delete: ', e.target);

    const newPollAvail = {
      ...pollAvailabilities,
    };

    const dbTime = getDbTime(date, startTime);

    const array = newPollAvail[date].filter((time) => time !== dbTime);

    if (!array.length) {
      delete newPollAvail[date];
    } else {
      newPollAvail[date] = array;
    }
    
    setSelected(false);
    setPollAvailabilities(newPollAvail);
  }

  const currentTimestamp = new Date();
  const timeSlotTimeStamp = new Date(`${date}T${startTime}`);

  return (
    <div className={`cell-half-hour ${timeSlotTimeStamp < currentTimestamp ? 'disabled' : ''}`} data-time={startTime} onClick={(e) => handleClick(e)}>
      {selected && 
        <TimeBlock 
          handleDelete={handleDelete}
          startTime={startTime}
          duration={duration}
          classTopPosition={classTopPosition(startTime.split(':')[1])}
          classHeight={classHeight(duration)}
        />
      }
    </div>
  );
}