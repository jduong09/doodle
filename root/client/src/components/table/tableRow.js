import { React } from 'react';
import { TimeSlot } from './timeslot';

export const TableRow = ({ week, hour, duration, setPollAvailabilities, pollAvailabilities }) => {
  const tRow = Object.keys(week).map((weekDay, idx) => {
    return (
      <td className='cell-time-slot' key={idx}>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:00` : `${hour - 12 === 0 ? 12 : hour - 12}:00`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:15` : `${hour - 12 === 0 ? 12 : hour - 12}:15`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:30` : `${hour - 12 === 0 ? 12 : hour - 12}:30`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
        <TimeSlot date={new Date(week[weekDay]).toISOString().slice(0, 10)} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:45` : `${hour - 12 === 0 ? 12 : hour - 12}:45`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
      </td>
    );
  });
  return tRow;
}