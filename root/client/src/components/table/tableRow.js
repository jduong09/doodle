import { React } from 'react';
import { TimeSlot } from './timeslot';

export const TableRow = ({ hour, duration, setPollAvailabilities, pollAvailabilities }) => {
  const tRow = ['09-09-1996', '09-10-1996', '09-11-1996', '09-12-1996', '09-13-1996', '09-14-1996', '09-15-1996'].map((date, idx) => {
    let activated;
    for (const chosenDate in pollAvailabilities) {
      if (chosenDate === date) {
        pollAvailabilities[chosenDate].forEach((time) => {
          const arrTime = time.split(':');
          if (parseInt(arrTime[0]) === hour) {
            activated = arrTime[1];
          }
        });
      }
    }
    /*if (pollAvailabilities && pollAvailabilities[date]) {
    }*/
    return (
      <td className='cell-time-slot' key={idx}>
        <TimeSlot
          date={date}
          hour={hour}
          startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:00` : `${hour - 12 === 0 ? 12 : hour - 12}:00`}`}
          duration={duration}
          setPollAvailabilities={setPollAvailabilities}
          pollAvailabilities={pollAvailabilities}
          activated={activated === '00' ? true : false}
        />
        <TimeSlot
          date={date}
          hour={hour}
          startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:15` : `${hour - 12 === 0 ? 12 : hour - 12}:15`}`}
          duration={duration}
          setPollAvailabilities={setPollAvailabilities}
          pollAvailabilities={pollAvailabilities}
          activated={activated === '15' ? true : false}
        />
        <TimeSlot
          date={date}
          hour={hour}
          startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:30` : `${hour - 12 === 0 ? 12 : hour - 12}:30`}`}
          duration={duration}
          setPollAvailabilities={setPollAvailabilities}
          pollAvailabilities={pollAvailabilities}
          activated={activated === '30' ? true : false}
        />
        <TimeSlot
          date={date}
          hour={hour}
          startTime={`${hour < 12  ? `${hour === 0 ? 12 : hour}:45` : `${hour - 12 === 0 ? 12 : hour - 12}:45`}`}
          duration={duration}
          setPollAvailabilities={setPollAvailabilities}
          pollAvailabilities={pollAvailabilities}
          activated={activated === '45' ? true : false}
        />
      </td>
    );
  });
  return tRow;
}