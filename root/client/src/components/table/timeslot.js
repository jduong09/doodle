import { React, useState} from 'react';
import { calculateTimeFrame, classTopPosition, classHeight } from '../../util/tablehelpers';
import { TimeBlock } from './timeblock';

export const TimeSlot = ({ date, startTime, duration, setPollAvailabilities, pollAvailabilities }) => {
  const [timeBlock, setTimeBlock] = useState(null);
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    console.log('clicked', date, startTime);
    e.preventDefault();
    const timeframe = calculateTimeFrame(startTime, duration);
    const newPollAvail = {
      ...pollAvailabilities,
    };

    if (!newPollAvail[date]) {
      newPollAvail[date] = [timeframe];
      setSelected(true);
      setTimeBlock(timeframe);
      setPollAvailabilities(newPollAvail);
    } else if (!newPollAvail[date].includes(timeframe)) {
      console.log('hit');
      newPollAvail[date] = [...newPollAvail[date], timeframe];
      setSelected(true);
      setTimeBlock(timeframe)
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

    const timeFrame = calculateTimeFrame(startTime, duration);

    const array = newPollAvail[date].filter((time) => time !== timeFrame);

    newPollAvail[date] = array;

    setSelected(false);
    setPollAvailabilities(newPollAvail);
  }

  return (
    <div className='cell-half-hour' data-time={startTime} onClick={(e) => handleClick(e)}>
      {selected && <TimeBlock handleDelete={handleDelete} timeframe={timeBlock} classTopPosition={classTopPosition(startTime.split(':')[1])} classHeight={classHeight(duration)} />}
    </div>
  )
}