import { React, useState } from 'react';
import { Table } from '../table/table';

export const PollForm = ({ handleSubmit }) => {
  const [pollName, setPollName] = useState('');
  const [pollDescription, setPollDescription] = useState('');
  const [pollLocation, setPollLocation] = useState('');
  const [pollDuration, setPollDuration] = useState('15');
  const [pollAvailabilities, setPollAvailabilities] = useState({});

  /*
  {
    name: { type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: false },
    location: { type: String },
    duration: { type: Number }
    createdAt: { type: Date },
    // { 'Day': 'Time start?' }
    availabilities: { type: Object, required: true },
  }
  */

  /* 
    Insert Calendar with clickable starting times.
  */
  return (
    <form method='POST' action='/polls' onSubmit={(e) => handleSubmit(e, { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities })}>
      <label htmlFor='pollName'>Name:
        <input id='inputName' name='pollName' type='text' onChange={e => setPollName(e.target.value)} placeholder='John Doe' value={pollName} />
      </label>
      <label htmlFor='pollDescription'>Description (optional):
        <input id='inputDescription' name='pollDescription' type='text' onChange={e => setPollDescription(e.target.value)} placeholder='Meeting, Conference, Birthday Party...' value={pollDescription} />
      </label>
      <label htmlFor='pollLocation'>Location (optional):
        <input id='inputLocation' name='pollLocation' type='text' onChange={e => { setPollLocation(e.target.value) }} placeholder='Conference Room A' value={pollLocation} />
      </label>
      <label htmlFor='pollDuration'>Duration:
        <select id='pollDuration' name='pollDuration' value={pollDuration} onChange={e => setPollDuration(e.target.value)}>
          <option value='15'>15 mins</option>
          <option value='30'>30 mins</option>
          <option value='60'>1 hour</option>
          <option value='120'>2 hours</option>
        </select>
      </label>
      <label htmlFor='pollAvailabilities'>Availabilities
        <input id='inputAvailabilities' name='pollAvailabilities' type='text' value={pollAvailabilities} readOnly="readOnly" hidden/>
        <Table duration={pollDuration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
      </label>
      <button type='submit'>Create Poll</button>
    </form>
  )
}
