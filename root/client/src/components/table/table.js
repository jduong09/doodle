import { React, useState, useEffect } from 'react';
import '../../css/table.css';
import { TableRow } from './tableRow';

// const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const Table = ({ pollAvailabilities, setPollAvailabilities, duration }) => {
  const [today] = useState(new Date());
  const [week, setWeek] = useState({});

  useEffect(() => {
    const utcDayOfWeek = today.getUTCDate();
    let newStateWeek;
    switch(utcDayOfWeek) {
      case 0:
        newStateWeek = {
          'Sunday': today[Symbol.toPrimitive]('number'),
          'Monday': new Date().setDate(new Date().getDate() + 1),
          'Tuesday': new Date().setDate(new Date().getDate() + 2),
          'Wednesday': new Date().setDate(new Date().getDate() + 3),
          'Thursday': new Date().setDate(new Date().getDate() + 4),
          'Friday': new Date().setDate(new Date().getDate() + 5),
          'Saturday': new Date().setDate(new Date().getDate() + 6),
        }
        break;
      case 1:
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 1),
          'Monday': today[Symbol.toPrimitive]('number'),
          'Tuesday': new Date().setDate(new Date().getDate() + 1),
          'Wednesday': new Date().setDate(new Date().getDate() + 2),
          'Thursday': new Date().setDate(new Date().getDate() + 3),
          'Friday': new Date().setDate(new Date().getDate() + 4),
          'Saturday': new Date().setDate(new Date().getDate() + 5),
        }
        break;
      case 2:
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 2),
          'Monday': new Date().setDate(new Date().getDate() - 1),
          'Tuesday': today[Symbol.toPrimitive]('number'),
          'Wednesday': new Date().setDate(new Date().getDate() + 1),
          'Thursday': new Date().setDate(new Date().getDate() + 2),
          'Friday': new Date().setDate(new Date().getDate() + 3),
          'Saturday': new Date().setDate(new Date().getDate() + 4),
        }
        break;
      case 3:
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 3),
          'Monday': new Date().setDate(new Date().getDate() - 2),
          'Tuesday': new Date().setDate(new Date().getDate() - 1),
          'Wednesday': today[Symbol.toPrimitive]('number'),
          'Thursday': new Date().setDate(new Date().getDate() + 1),
          'Friday': new Date().setDate(new Date().getDate() + 2),
          'Saturday': new Date().setDate(new Date().getDate() + 3),
        }
        break;
      case 4:
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 4),
          'Monday': new Date().setDate(new Date().getDate() - 3),
          'Tuesday': new Date().setDate(new Date().getDate() - 2),
          'Wednesday': new Date().setDate(new Date().getDate() - 1),
          'Thursday': today[Symbol.toPrimitive]('number'),
          'Friday': new Date().setDate(new Date().getDate() + 1),
          'Saturday': new Date().setDate(new Date().getDate() + 2),
        }
        break;
      case 5:
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 5),
          'Monday': new Date().setDate(new Date().getDate() - 4),
          'Tuesday': new Date().setDate(new Date().getDate() - 3),
          'Wednesday': new Date().setDate(new Date().getDate() - 2),
          'Thursday': new Date().setDate(new Date().getDate() -1),
          'Friday': today[Symbol.toPrimitive]('number'),
          'Saturday': new Date().setDate(new Date().getDate() + 1),
        }
        break;
      case 6:
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 6),
          'Monday': new Date().setDate(new Date().getDate() - 5),
          'Tuesday': new Date().setDate(new Date().getDate() - 4),
          'Wednesday': new Date().setDate(new Date().getDate() - 3),
          'Thursday': new Date().setDate(new Date().getDate() - 2),
          'Friday': new Date().setDate(new Date().getDate() - 1),
          'Saturday': today[Symbol.toPrimitive]('number'),
        }
        break;
      // Need to change default
      default: {
        newStateWeek = {
          'Sunday': new Date().setDate(new Date().getDate() - 1),
          'Monday': today[Symbol.toPrimitive]('number'),
          'Tuesday': new Date().setDate(new Date().getDate() + 1),
          'Wednesday': new Date().setDate(new Date().getDate() + 2),
          'Thursday': new Date().setDate(new Date().getDate() + 3),
          'Friday': new Date().setDate(new Date().getDate() + 4),
          'Saturday': new Date().setDate(new Date().getDate() + 5),
        }
        break;
      }
    }

    setWeek(newStateWeek);
  }, []);

  const tbody = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((hour, idx) => {
    return (
      <tr key={idx}>
        <td>{hour < 12  ? `${hour === 0 ? 12 : hour} A.M.` : `${hour - 12 === 0 ? 12 : hour - 12} P.M.`}</td>
        <TableRow week={week} hour={hour} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
      </tr>
    );
  });

  const tHeadRow = Object.keys(week).map((weekDay, idx) => {
    // October
    // ${MONTHS[week[weekDay].getUTCMonth()]}
    return (
      <th key={idx}>{`${weekDay} ${new Date (week[weekDay]).getUTCDate()}`}</th>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Times</th>
            {tHeadRow}
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  )
}