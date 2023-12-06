import { React } from 'react';
import { convertIntToMonth } from '../../util/tablehelpers';

export const Week = ({ month, week }) => {
  const days = week.map((day, idx) => {
    return (day === '' ?
      <li key={idx}></li> :
      <li key={idx}>
        <h3>{convertIntToMonth(month).slice(0, 3)}</h3>
        <h2>{day}</h2>
      </li>);
  }) ;

  return <ul className='week'>{days}</ul>;
}