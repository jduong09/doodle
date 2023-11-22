import { React, useEffect, useState } from 'react';
import { calculateTimeFrame, getDayOfTheWeek } from '../../util/tablehelpers';

export const AvailabilitiesList = ({ availabilities, responses, duration, handleUserChoice }) => {
  const [listItems, setListItems] = useState([]);
  
  useEffect(() => {
    const newListItems = [];
    Object.keys(availabilities).forEach((date) => {
      availabilities[date].forEach((startTime) => {
        const participants = [];
        console.log(startTime);
        const dateObject = new Date(`${date}T${startTime}.000Z`);
        const local24StartTime = `${dateObject.getHours()}:${startTime.split(':')[1]}`;
        const timeFrame = calculateTimeFrame(local24StartTime, duration);
        if (Object.keys(responses).length && responses[`${date}T${startTime}.000Z`]) {
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
      <li key={idx} data-timestamp={listItem.timestamp}>
        <h2>{listItem.day}</h2>
        <h2>{listItem.date}</h2>
        <h3>{listItem.time}</h3>
        <ul id="ul-participants">{participants}</ul>
        <button className="btn-meeting-select" onClick={(e) => handleUserChoice(e)}>Select Time</button>
      </li>
    )
  });
  
  return (
    <div>
      <ul id='ul-availabilities'>{listAvailabilities}</ul>
    </div>
  )
};
