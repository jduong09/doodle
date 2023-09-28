import { React } from 'react';
import '../../css/table.css';
import { TimeSlot } from './timeslot';

export const Table = ({ pollAvailabilities, setPollAvailabilities, duration }) => {
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
        <tbody>
          <tr>
            <td>12 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='12:15' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='12:45' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>1 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>2 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>3 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>4 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>5 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>6 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>7 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>8 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>9 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>10 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>11 A.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>12 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='12:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='12:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>1 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='1:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='1:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>2 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='2:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='2:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>3 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='3:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='3:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>4 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='4:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='4:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>5 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='5:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='5:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>6 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='6:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='6:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>7 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='7:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='7:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>8 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='8:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='8:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>9 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='9:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='9:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>10 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='10:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='10:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
          <tr>
            <td>11 P.M.</td>
            <td className="cell-time-slot">
              <TimeSlot date='09-09-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-09-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-10-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-10-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-11-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-11-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-12-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-12-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-13-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-13-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-14-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-14-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
            <td className="cell-time-slot">
              <TimeSlot date='09-15-1996' startTime='11:00' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
              <TimeSlot date='09-15-1996' startTime='11:30' duration={duration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}