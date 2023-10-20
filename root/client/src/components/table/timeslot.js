import { React, useState } from 'react';
import { classTopPosition, classHeight } from '../../util/tablehelpers';
import { TimeBlock } from './timeblock';

export const TimeSlot = ({ date, hour, startTime, duration, setPollAvailabilities, pollAvailabilities, activated }) => {
  const [selected, setSelected] = useState(activated);
  const handleClick = (e) => {
    e.preventDefault();
    const newPollAvail = {
      ...pollAvailabilities,
    };

    if (!newPollAvail[date]) {
      newPollAvail[date] = [`${hour}:${startTime.split(':')[1]}`];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    } else if (!newPollAvail[date].includes(`${hour}:${startTime.split(':')[1]}`)) {
      newPollAvail[date] = [...newPollAvail[date], `${hour}:${startTime.split(':')[1]}`];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();

    const newPollAvail = {
      ...pollAvailabilities,
    };

    const array = newPollAvail[date].filter((time) => time !== startTime);
    if (!array.length) {
      delete newPollAvail[date];
    } else {
      newPollAvail[date] = array;
    }
    
    setSelected(false);
    setPollAvailabilities(newPollAvail);
  }

  return (
    <div className='cell-half-hour' data-time={startTime} onClick={(e) => handleClick(e)}>
      {selected && <TimeBlock handleDelete={handleDelete} startTime={startTime} duration={duration} classTopPosition={classTopPosition(startTime.split(':')[1])} classHeight={classHeight(duration)} />}
    </div>
  );
}