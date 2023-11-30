import { React, useState } from 'react';
import { Table } from '../table/table';

export const PollForm = ({ handleSubmit, editData }) => {
  console.log('Poll Form: ', editData);
  const [pollName, setPollName] = useState(editData ? editData.name : '');
  const [pollDescription, setPollDescription] = useState(editData ? editData.description : '');
  const [pollLocation, setPollLocation] = useState(editData ? editData.location : '');
  const [pollDuration, setPollDuration] = useState(editData ? parseInt(editData.duration) : '15');
  const [pollAvailabilities, setPollAvailabilities] = useState(editData ? editData.availabilities : {});

  const resetFormData = () => {
    setPollName('');
    setPollDescription('');
    setPollLocation('');
    setPollDuration('15');
    setPollAvailabilities({});
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities }, e.target.action, editData ? 'PATCH' : 'POST');
    resetFormData();
  }
  
  return (
    <form action={editData ? `/polls/${editData.id}` : '/polls'} onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor='inputName'>Name
        <input id='inputName' name='pollName' type='text' onChange={e => setPollName(e.target.value)} placeholder='John Doe' value={pollName} />
      </label>
      <label htmlFor='inputDescription'>Description
        <input id='inputDescription' name='pollDescription' type='text' onChange={e => setPollDescription(e.target.value)} placeholder='Meeting, Conference, Birthday Party...' value={pollDescription} />
      </label>
      <label htmlFor='inputLocation'>Location
        <input id='inputLocation' name='pollLocation' type='text' onChange={e => { setPollLocation(e.target.value) }} placeholder='Conference Room A' value={pollLocation} />
      </label>
      <label htmlFor='pollDuration'>Duration:
        <select id='pollDuration' name='pollDuration' value={pollDuration} onChange={e => setPollDuration(parseInt(e.target.value))}>
          <option value='15'>15 mins</option>
          <option value='30'>30 mins</option>
          <option value='60'>1 hour</option>
          <option value='120'>2 hours</option>
        </select>
      </label>
      <label htmlFor='inputAvailabilities'>Availabilities
        <input id='inputAvailabilities' name='pollAvailabilities' type='text' value={pollAvailabilities} readOnly="readOnly" hidden/>
      </label>
      <Table duration={pollDuration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
      <button type='submit' id="btn-form-submit">{editData ? 'Update' : 'Create'}</button>
    </form>
  );
};