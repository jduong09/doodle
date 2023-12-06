import { React } from 'react'

export const Week = ({ week }) => {
  const days = week.map((day, idx) => {
    return (day === '' ? <li key={idx}></li> : <li key={idx}>{day}</li>);
  }) ;

  return <ul className='week'>{days}</ul>;
}