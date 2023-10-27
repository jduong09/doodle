import { React } from 'react';
import { TimeSlot } from './timeslot';

export const TableRow = ({ week, hour, duration, setPollAvailabilities, pollAvailabilities }) => {
  const tRow = Object.keys(week).map((weekDay, idx) => {
    let activated = false;
    for (const chosenDate in pollAvailabilities) {
      if (chosenDate === new Date(week[weekDay]).toISOString().slice(0, 10)) {
        pollAvailabilities[chosenDate].forEach((time) => {
          const dateObject = new Date(`${chosenDate}T${time}.000Z`);
          const convertedLocalTime = dateObject.toTimeString().slice(0, 6);
          const arrTime = convertedLocalTime.split(':');
          if (parseInt(arrTime[0]) === hour) {
            activated = arrTime[1];
          }
        });
      }
    }

    return (
      <td className='cell-time-slot' key={idx}>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour.toString().length === 1 ? `0${hour.toString()}` : hour.toString()}:00`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} activated={activated === '00' ? true : false}/>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour.toString().length === 1 ? `0${hour.toString()}` : hour.toString()}:15`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} activated={activated === '15' ? true : false}/>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour.toString().length === 1 ? `0${hour.toString()}` : hour.toString()}:30`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} activated={activated === '30' ? true : false}/>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour.toString().length === 1 ? `0${hour.toString()}` : hour.toString()}:45`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} activated={activated === '45' ? true : false}/>
      </td>
    );
  });
  return tRow;
}