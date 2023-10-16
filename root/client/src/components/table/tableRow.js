import { React } from 'react';
import { TimeSlot } from './timeslot';

export const TableRow = ({ hour, duration, setPollAvailabilities, pollAvailabilities }) => {
  const tRow = ['09-09-1996', '09-10-1996', '09-11-1996', '09-12-1996', '09-13-1996', '09-14-1996', '09-15-1996'].map((date, idx) => {
    if (pollAvailabilities && pollAvailabilities[date]) {
      console.log('yo');
    }
    return (
      <td className='cell-time-slot' key={idx}>
        <TimeSlot date={date} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:00` : `${hour - 12 === 0 ? 12 : hour - 12}:00`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
        <TimeSlot date={date} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:15` : `${hour - 12 === 0 ? 12 : hour - 12}:15`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
        <TimeSlot date={date} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:30` : `${hour - 12 === 0 ? 12 : hour - 12}:30`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
        <TimeSlot date={date} startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:45` : `${hour - 12 === 0 ? 12 : hour - 12}:45`}`} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities}/>
      </td>
    );
  });
  return tRow;
}