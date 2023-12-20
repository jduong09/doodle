import { React, useState, useEffect } from 'react';
import '../../css/table.css';
import { TableRow } from './tableRow';
import { convertIntToMonth, dateDiff } from '../../util/tablehelpers';
const DAYABBRIEVATIONS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const Table = ({ pollAvailabilities, setPollAvailabilities, duration, startDate, endDate, startTime, endTime }) => {
  const [week, setWeek] = useState({});
  // const mounted = useRef(false);

  // if the range is less than 7 days then the table is less than 7 days.
  // if the range is greater than 7 days then we need to have a table of 7 days and an arrow to move forward and back.

  useEffect(() => {
    if (startDate && endDate) {
      const startDateObject = new Date(`${startDate}T12:00:00.000Z`);
      const endDateObject = new Date(`${endDate}T00:00:00.000Z`);
      const tableBtnsDiv = document.getElementById('table-btns')

      const tableLength = dateDiff(startDateObject, endDateObject) + 1;

      if (tableLength && tableLength > 7) {
        const newStateWeek = {
          0: startDateObject[Symbol.toPrimitive]('number'),
          1: new Date().setDate(startDateObject.getDate() + 1),
          2: new Date().setDate(startDateObject.getDate() + 2),
          3: new Date().setDate(startDateObject.getDate() + 3),
          4: new Date().setDate(startDateObject.getDate() + 4),
          5: new Date().setDate(startDateObject.getDate() + 5),
          6: new Date().setDate(startDateObject.getDate() + 6),
        }
        // we can show the arrows for previous and next.
        tableBtnsDiv.classList.remove('hide');
        setWeek(newStateWeek);
      } else {
        // table length < 6,
        const newStateWeek = {};
        newStateWeek[0] = startDateObject[Symbol.toPrimitive]('number');
        for (let i = 1; i <= tableLength; i++) {
          const newDateObject = new Date().setDate(startDateObject.getDate() + i);
          newStateWeek[i] = newDateObject;
        }
        tableBtnsDiv.classList.add('hide');
        setWeek(newStateWeek);
      }
    }
    /*
    if (!mounted.current) {
      mounted.current = true;
    }
    */
      /*
      const today = new Date();
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
      mounted.current = true;
    } else {
    }
    */
  }, [startDate, endDate]);

  const handlePrevWeek = (e) => {
    e.preventDefault();
    // const newStateWeek = {};
    const sevenDaysFromStart = week[0] - (7 * 24 * 60 * 60 * 1000);
    const startDateObject = new Date(`${startDate}T12:00:00.000Z`);
    /* If going back seven days from this current startWeek is past the given startDate, then we just set the startOf the previous week to the startDate */
    if (sevenDaysFromStart < startDateObject[Symbol.toPrimitive]('number')) {
      const newStateWeek = {
        0: startDateObject[Symbol.toPrimitive]('number'),
        1: new Date().setDate(startDateObject.getDate() + 1),
        2: new Date().setDate(startDateObject.getDate() + 2),
        3: new Date().setDate(startDateObject.getDate() + 3),
        4: new Date().setDate(startDateObject.getDate() + 4),
        5: new Date().setDate(startDateObject.getDate() + 5),
        6: new Date().setDate(startDateObject.getDate() + 6),
      }
      // we can show the arrows for previous and next.
      setWeek(newStateWeek);
    } else {
      /* Else we set the start of the week to the day seven days back. */
      const newStartWeek = new Date(sevenDaysFromStart);
      const newStateWeek = {
        0: newStartWeek[Symbol.toPrimitive]('number'),
        1: new Date().setDate(newStartWeek.getDate() + 1),
        2: new Date().setDate(newStartWeek.getDate() + 2),
        3: new Date().setDate(newStartWeek.getDate() + 3),
        4: new Date().setDate(newStartWeek.getDate() + 4),
        5: new Date().setDate(newStartWeek.getDate() + 5),
        6: new Date().setDate(newStartWeek.getDate() + 6),
      }
      // we can show the arrows for previous and next.
      setWeek(newStateWeek);
    }
    /*
    for (const day in week) {
      newStateWeek[day] = week[day] - (7 * 24 * 60 * 60 * 1000)
    }
    
    setWeek(newStateWeek);
    */
  }

  const handleNextWeek = (e) => {
    e.preventDefault();
    /*
    const newStateWeek = {};
    for (const day in week) {
      newStateWeek[day] = week[day] + (7 * 24 * 60 * 60 * 1000)
    }
    setWeek(newStateWeek);
    */
    const sevenDaysForward = week[6] + (7 * 24 * 60 * 60 * 1000);
    const endDateObject = new Date(`${endDate}T12:00:00.000Z`);
    /* If going forward seven days from this current startWeek is past the given endDate, then we need to set the week to end of the previous week, and ends at endDate */
    if (sevenDaysForward > endDateObject[Symbol.toPrimitive]('number')) {
      const numDaysInNewWeek = Math.round((endDateObject - week[6]) / (24 * 60 * 60 * 1000));
      console.log(numDaysInNewWeek);
      const newStateWeek = {};
      for (let i = 0; i < numDaysInNewWeek - 1; i++) {
        newStateWeek[i] = new Date().setDate(endDateObject.getDate() - (numDaysInNewWeek - i - 1));
      }
      newStateWeek[numDaysInNewWeek - 1] = endDateObject[Symbol.toPrimitive]('number');
      setWeek(newStateWeek);
    } else {
      /* Else, we set the start week as the next day of the previous end week, and the table is seven days as normal */
      const nextDayOfWeek = new Date(week[6] + (24 * 60 * 60 * 1000));
      const newStateWeek = {
        0: nextDayOfWeek[Symbol.toPrimitive]('number'),
        1: new Date().setDate(nextDayOfWeek.getDate() + 1),
        2: new Date().setDate(nextDayOfWeek.getDate() + 2),
        3: new Date().setDate(nextDayOfWeek.getDate() + 3),
        4: new Date().setDate(nextDayOfWeek.getDate() + 4),
        5: new Date().setDate(nextDayOfWeek.getDate() + 5),
        6: new Date().setDate(nextDayOfWeek.getDate() + 6),
      }
      setWeek(newStateWeek);
    }

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
    const dateObj = new Date(week[weekDay]);
    return (
      <th key={idx}>
        <h3>{DAYABBRIEVATIONS[dateObj.getDay()]}</h3>
        <h2>{new Date (week[weekDay]).getUTCDate()}</h2>
      </th>
    );
  });

  const sunday = new Date(week['Sunday']);
  const saturday = new Date(week['Saturday']);

  return (
    <div id="div-availabilities-table">
      <div id="table-header">
        {week && <h2 id="week-current">{`Sunday, ${convertIntToMonth(sunday.getMonth())} ${sunday.getDate()}, ${sunday.getFullYear()} - Saturday, ${convertIntToMonth(saturday.getMonth())} ${saturday.getDate()}, ${saturday.getFullYear()}`}</h2>}
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
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            {tHeadRow}
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  )
}