import { React, useEffect, useState } from 'react';
import { calculateTimeFrame, getDayOfTheWeek } from '../../util/tablehelpers';

export const ResultsList = ({ availabilities, responses, duration }) => {
  const [listItems, setListItems] = useState([]);
  const [mostResponses, setMostResponses] = useState(0);
  useEffect(() => {
    const newListItems = [];
    Object.keys(availabilities).forEach((date) => {
      availabilities[date].forEach((startTime) => {
        const participants = [];
        const dateObject = duration === 1440 ? new Date(`${date}T00:00:00.000Z`) : new Date(`${date}T${startTime}.000Z`);
        
        let timeFrame;
        if (duration === 1440) {
          timeFrame = 'All Day';
        } else {
          const local24StartTime = `${dateObject.getHours()}:${startTime.split(':')[1]}`;
          timeFrame = calculateTimeFrame(local24StartTime, duration);
        }
        
        if (Object.keys(responses).length && responses[`${date}T${startTime}.000Z`]) {
          if (Object.keys(responses[`${date}T${startTime}.000Z`]).length > mostResponses) {
            setMostResponses(Object.keys(responses[`${date}T${startTime}.000Z`]).length);
          } 
          for (const userUuid in responses[`${date}T${startTime}.000Z`]) {
            participants.push(responses[`${date}T${startTime}.000Z`][userUuid]);
          }
        }
  
        newListItems.push({ date: dateObject.toLocaleDateString(), day: getDayOfTheWeek(dateObject), time: timeFrame, timestamp: `${date}T${startTime}.000Z`, participants });
      });
    });
    setListItems(newListItems);
  }, []);

  const listAvailabilities = listItems.map((listItem, idx) => {
    const participants = listItem.participants.map((name, participantIdx) => {
      return <li key={participantIdx}>{name}</li>
    });

    return (
      <li className='list-item-availability' key={idx} data-timestamp={listItem.timestamp}>
        {responses[listItem.timestamp] && Object.keys(responses[listItem.timestamp]).length === mostResponses && <svg id="svg-most-selected" xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>}
        <h2>{listItem.day}</h2>
        <h2>{listItem.date}</h2>
        <h3>{listItem.time}</h3>
        <ul id="ul-participants">{participants}</ul>
      </li>
    )
  });
  
  return listAvailabilities;
};