import { React } from 'react';
import { convertIntToMonth } from '../../util/tablehelpers';

export const Week = ({ pollAvailabilities, year, month, week, handleDayClick }) => {
  const days = week.map((day, idx) => {
    const dateISO = new Date(year, month, day).toISOString().slice(0, 10);
    return (day === '' ?
      <li key={idx} className='monthlyCalendar-day disabled'></li> :
      <li key={idx} className={`${pollAvailabilities[dateISO] ? 'selected' : ''} monthlyCalendar-day`} onClick={(e) => handleDayClick(year, month, day, e)}>
        <h3>{convertIntToMonth(month).slice(0, 3)}</h3>
        <h2>{day}</h2>
      </li>);
  }) ;

  return <ul className='week'>{days}</ul>;
}