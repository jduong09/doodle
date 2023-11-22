import { React } from 'react';
import { calculateTimeFrame } from '../../util/tablehelpers';

export const TimeBlock = ({ date, duration, startTime, classTopPosition, classHeight, handleDelete }) => {
  const timezoneOffset = new Date(Date.now()).getTimezoneOffset();
  const timezoneOffsetToHour = timezoneOffset / 60;
  const dateObject = new Date(`${date}T${startTime}:00.000${timezoneOffset > 0 ? '-' : '+'}${timezoneOffsetToHour < 10 ? `0${timezoneOffsetToHour}` : timezoneOffsetToHour}:00`);
  const local24StartTime = `${dateObject.getHours()}:${startTime.split(':')[1]}`;
  console.log(calculateTimeFrame(local24StartTime, duration));
  return (
    <span className={`span-time-block ${classTopPosition} ${classHeight}`}>
      {calculateTimeFrame(local24StartTime, duration)}
      <button type="button" className='btn-close' onClick={(e) => handleDelete(e)}>
        <svg className='svg-close' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </button>
    </span>
  )
};
