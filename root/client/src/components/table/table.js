import { React, useState, useEffect } from 'react';
import '../../css/table.css';
import { TableRow } from './tableRow';

export const Table = ({ pollAvailabilities, setPollAvailabilities, duration }) => {
  const [today] = useState(new Date());
  const [week, setWeek] = useState({});

  useEffect(() => {
    const utcDayOfWeek = today.getUTCDay();
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

  const handlePrevWeek = (e) => {
    e.preventDefault();
    const newStateWeek = {};

    for (const day in week) {
      newStateWeek[day] = week[day] - (7 * 24 * 60 * 60 * 1000)
    }
    
    setWeek(newStateWeek);
  }

  const handleNextWeek = (e) => {
    e.preventDefault();

    const newStateWeek = {};

    for (const day in week) {
      newStateWeek[day] = week[day] + (7 * 24 * 60 * 60 * 1000)
    }

    setWeek(newStateWeek);
  }

  const tbody = [...Array(24).keys()].map((hour, idx) => {
    return (
      <tr key={idx}>
        <td>{hour < 12  ? `${hour === 0 ? 12 : hour} A.M.` : `${hour - 12 === 0 ? 12 : hour - 12} P.M.`}</td>
        <TableRow week={week} hour={hour} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
      </tr>
    );
  });

  const tHeadRow = Object.keys(week).map((weekDay, idx) => {
    return (
      <th key={idx}>{`${weekDay} ${new Date (week[weekDay]).getUTCDate()}`}</th>
    );
  });

  return (
    <div>
      <div id="table-btns">
        <ul>
          <li>
            <button id="btn-prev-week" onClick={handlePrevWeek}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </button>
          </li>
          <li>
            <button id="btn-next-week" onClick={handleNextWeek}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </button>
          </li>
        </ul>
        <div id="week-current">{`${new Date(week['Sunday']).toDateString()} - ${new Date(week['Saturday']).toDateString()}`}</div>
      </div>
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