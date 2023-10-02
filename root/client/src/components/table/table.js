import { React } from 'react';
import '../../css/table.css';
import { TableRow } from './tableRow';

export const Table = ({ pollAvailabilities, setPollAvailabilities, duration }) => {
  const tbody = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((hour, idx) => {
    return (
      <tr key={idx}>
        <td>{hour < 12  ? `${hour === 0 ? 12 : hour} A.M.` : `${hour - 12 === 0 ? 12 : hour - 12} P.M.`}</td>
        <TableRow hour={hour} duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Times</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  )
}