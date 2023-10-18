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

    // If date & start time has not been added to poll availabilities, add it
    if (!newPollAvail[date]) {
      newPollAvail[date] = [`${hour}:${startTime.split(':')[1]}`];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    // If date of poll availabilites doesn't have start time, add this specific start time to the date key in the object.
    } else if (!newPollAvail[date].includes(`${hour}:${startTime.split(':')[1]}`)) {
      newPollAvail[date] = [...newPollAvail[date], `${hour}:${startTime.split(':')[1]}`];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    }

    console.log('Poll Times:', newPollAvail);
  }

  // Needs to remove its time block from array of timeblocks.
  // Needs to delete itself as an element.
  const handleDelete = (e) => {
    e.preventDefault();

    const newPollAvail = {
      ...pollAvailabilities,
    };

    const array = newPollAvail[date].filter((time) => time !== startTime);

    newPollAvail[date] = array;

    setSelected(false);
    setPollAvailabilities(newPollAvail);
  }

  return (
    <div className='cell-half-hour' data-time={startTime} onClick={(e) => handleClick(e)}>
      {selected && <TimeBlock handleDelete={handleDelete} startTime={startTime} duration={duration} classTopPosition={classTopPosition(startTime.split(':')[1])} classHeight={classHeight(duration)} />}
    </div>
  )
}