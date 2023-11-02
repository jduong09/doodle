import { React, useEffect, useState } from 'react';
import { calculateTimeFrame } from '../../util/tablehelpers';

export const AvailabilitiesList = ({ availabilities, responses, duration, choices, handleUserChoice }) => {
  const [listItems, setListItems] = useState([]);
  
  useEffect(() => {
    // console.log(availabilities);
    const newListItems = [];
    Object.keys(availabilities).forEach((date) => {
      // 2023-10-29, 2023-10-31
      availabilities[date].forEach((startTime) => {
        const dateObject = new Date(`${date}T${startTime}.000Z`);
        const timeFrame = calculateTimeFrame(startTime, duration);
        // Logic to figure out check which partipants have voted on this date and time.
        newListItems.push({ date: dateObject.toDateString(), time: timeFrame, timestamp: `${date}T${startTime}.000Z` });
      });
    });
    setListItems(newListItems);
  }, []);

  const listAvailabilities = listItems.map((listItem, idx) => {
    return (
      <li key={idx} data-timestamp={listItem.timestamp}>
        <h2>{listItem.date}</h2>
        <h3>{listItem.time}</h3>
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
