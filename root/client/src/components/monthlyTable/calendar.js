import { React, useEffect } from 'react';
import { Week } from './week.js';

export const Calendar = ({ month, firstDayOfMonth, daysInMonth }) => {
  const arrCalendar = [["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];

  let row = 0;
  let col;

  switch (firstDayOfMonth) {
    case 'Sunday':
      col = 0;
      break;
    case 'Monday':
      col = 1;
      break;
    case 'Tueday':
      col = 2;
      break;
    case 'Wednesday':
      col = 3;
      break;
    case 'Thursday':
      col = 4;
      break;
    case 'Friday':
      col = 5;
      break;
    case 'Saturday':
      col = 6;
      break;
    default:
      break;
  }

  for (let i = 0; i < daysInMonth; i++) {
    arrCalendar[row][col] = i + 1;
    
    if (col + 1 < 7) {
      col++;
    } else {
      row++;
      col = 0;
    }
  }

  const weeks = arrCalendar.map((week, idx) => {
    return <Week month={month} week={week} key={idx} />
  });

  return <div id="div-calendar">{weeks}</div>
};