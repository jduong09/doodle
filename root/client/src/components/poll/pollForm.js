import { React, useState } from 'react';
import { Table } from '../table/table';
import { MonthlyTable } from '../monthlyTable/monthlyTable';

export const PollForm = ({ handleSubmit, editData }) => {
  const [pollName, setPollName] = useState(editData ? editData.name : '');
  const [pollDescription, setPollDescription] = useState(editData ? editData.description : '');
  const [pollLocation, setPollLocation] = useState(editData ? editData.location : '');
  const [pollDuration, setPollDuration] = useState(editData ? editData.duration : '15');
  const [pollAvailabilities, setPollAvailabilities] = useState(editData ? editData.availabilities : {});
  const [toggleDays, setToggleDays] = useState(editData && editData.duration === 1440 ? true : false);
  console.log(pollDuration);

  const resetFormData = () => {
    setPollName('');
    setPollDescription('');
    setPollLocation('');
    setPollDuration('15');
    setPollAvailabilities({})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e, { pollName, pollDescription, pollLocation, pollDuration, pollAvailabilities }, e.target.action, editData ? 'PATCH' : 'POST');
    resetFormData();
  }

  const handleTimesToggle = (e) => {
    e.preventDefault();

    setToggleDays(false);
    setPollDuration('15');
    setPollAvailabilities({});
  }

  const handleDaysToggle = (e) => {
    e.preventDefault();

    setToggleDays(true);
    setPollDuration('1440');
    setPollAvailabilities({});
  }

  return (
    <form action={editData ? `/polls/${editData.id}` : '/polls'} onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor='inputName'>Name:
        <input id='inputName' name='pollName' type='text' onChange={e => setPollName(e.target.value)} placeholder='John Doe' value={pollName} />
      </label>
      <label htmlFor='inputDescription'>Description (optional):
        <input id='inputDescription' name='pollDescription' type='text' onChange={e => setPollDescription(e.target.value)} placeholder='Meeting, Conference, Birthday Party...' value={pollDescription} />
      </label>
      <label htmlFor='inputLocation'>Location (optional):
        <input id='inputLocation' name='pollLocation' type='text' onChange={e => { setPollLocation(e.target.value) }} placeholder='Conference Room A' value={pollLocation} />
      </label>
      {!toggleDays
      && <label htmlFor='pollDuration'>Duration:
        <select id='pollDuration' name='pollDuration' value={pollDuration} onChange={e => setPollDuration(parseInt(e.target.value))}>
          <option value='15'>15 mins</option>
          <option value='30'>30 mins</option>
          <option value='60'>1 hour</option>
          <option value='120'>2 hours</option>
        </select>
      </label>}
      <label htmlFor='inputAvailabilities'>Availabilities
        <input id='inputAvailabilities' name='pollAvailabilities' type='text' value={pollAvailabilities} readOnly="readOnly" hidden/>
      </label>
      <div id='div-calendars'>
        <ul>
          <li>
            <button id='btn-toggle-times' className={!toggleDays ? 'selected' : ''} onClick={handleTimesToggle}>Times</button>
            <button id='btn-toggle-days' className={toggleDays ? 'selected' : ''} onClick={handleDaysToggle}>Days</button>
          </li>
        </ul>
        {toggleDays
          ? <MonthlyTable setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />
          : <Table duration={pollDuration} setPollAvailabilities={setPollAvailabilities} pollAvailabilities={pollAvailabilities} />}
      </div>
      <button type='submit'>{editData ? 'Update' : 'Create'}</button>
    </form>
  );
};