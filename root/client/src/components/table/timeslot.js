import { React, useState} from 'react';
import { classTopPosition, classHeight } from '../../util/tablehelpers';
import { TimeBlock } from './timeblock';

export const TimeSlot = ({ date, startTime, duration, setPollAvailabilities, pollAvailabilities }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    
    const timestamp = new Date(`${date}T${startTime}`);
    const dbTime = Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'UTC' }).format(timestamp);
   
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

  // Needs to remove its time block from array of timeblocks.
  // Needs to delete itself as an element.
  const handleDelete = (e) => {
    e.preventDefault();

    const newPollAvail = {
      ...pollAvailabilities,
    };

    const timestamp = new Date(`${date}T${startTime}`);
    const dbTime = Intl.DateTimeFormat('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'UTC' }).format(timestamp);

    const array = newPollAvail[date].filter((time) => time !== dbTime);

    newPollAvail[date] = array;

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
  )
}