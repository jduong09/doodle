import { React, useState, useEffect } from 'react';
import { Calendar } from './calendar.js';

export const MonthlyTable = () => {
  const [month, setMonth] = useState(null);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(null);
  const [daysInMonth, setDaysInMonth] = useState(null);

  useEffect(() => {
    const todaysDate = new Date(Date.now());

    // Get which month it is.

    const dayOfWeek = todaysDate.getDay();
    const dayOfMonth = todaysDate.getDate();

    if (dayOfMonth < 7) {
      // ex: day of Month = 5;
      // day of Week = 2 (Tuesday)
      // result: first day of month is Friday

      const numSinceFirst = dayOfMonth - 1;
      // console.log('Days since first: ', numSinceFirst);

      // console.log(numSinceFirst % 7);

      const numAdj = numSinceFirst > 7 ? numSinceFirst % 7 : 7 % numSinceFirst;

      const firstDayOfWeek = numAdj + dayOfWeek;

      switch (firstDayOfWeek) {
        case 0:
          setFirstDayOfMonth('Sunday');
          break;
        case 1:
          setFirstDayOfMonth('Monday');
          break;
        case 2:
          setFirstDayOfMonth('Tuesday');
          break;
        case 3:
          setFirstDayOfMonth('Wednesday');
          break;
        case 4:
          setFirstDayOfMonth('Thursday');
          break;
        case 5:
          setFirstDayOfMonth('Friday');
          break;
        case 6:
          setFirstDayOfMonth('Saturday');
          break;
        default:
          break;
      }
    }

    const todaysMonth = todaysDate.getMonth();

    switch (todaysMonth) {
      case 0:
        setMonth('January');
        setDaysInMonth(31);
        break;
      case 1:
        setMonth('February');
        setDaysInMonth(28);
        break;
      case 2:
        setMonth('March');
        setDaysInMonth(31);
        break;
      case 3:
        setMonth('April');
        setDaysInMonth(30);
        break;
      case 4:
        setMonth('May');
        setDaysInMonth(31);
        break;
      case 5:
        setMonth('June');
        setDaysInMonth(30);
        break;
      case 6:
        setMonth('July');
        setDaysInMonth(31);
        break;
      case 7:
        setMonth('August');
        setDaysInMonth(31);
        break;
      case 8:
        setMonth('September');
        setDaysInMonth(30);
        break;
      case 9:
        setMonth('October');
        setDaysInMonth(31);
        break;
      case 10:
        setMonth('November');
        setDaysInMonth(30);
        break;
      case 11:
        setMonth('December');
        setDaysInMonth(31);
        break;
      default:
        break;
    }
  }, []);

  console.log(firstDayOfMonth);

  return (
    <div>
      <h2>{month}</h2>
      <Calendar month={month} firstDayOfMonth={firstDayOfMonth} daysInMonth={daysInMonth} />
    </div>
  );
};