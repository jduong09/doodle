import { React, useState} from 'react';
import { classTopPosition, classHeight } from '../../util/tablehelpers';
import { TimeBlock } from './timeblock';

export const TimeSlot = ({ date, startTime, duration, setPollAvailabilities, pollAvailabilities }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const newPollAvail = {
      ...pollAvailabilities,
    };

    if (!newPollAvail[date]) {
      newPollAvail[date] = [startTime];
      //newPollAvail[date] = [timeframe];
      setSelected(true);
      setPollAvailabilities(newPollAvail);
    } else if (!newPollAvail[date].includes(startTime)) {

      newPollAvail[date] = [...newPollAvail[date], startTime];
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