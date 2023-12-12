import { React, useState } from 'react';
import { Table } from '../table/table';
import { MonthlyTable } from '../monthlyTable/monthlyTable';

export const PollForm = ({ handleSubmit, editData }) => {
  const [pollName, setPollName] = useState(editData ? editData.name : '');
  const [pollDescription, setPollDescription] = useState(editData ? editData.description : '');
  const [pollLocation, setPollLocation] = useState(editData ? editData.location : '');
  const [pollDuration, setPollDuration] = useState(editData ? parseInt(editData.duration) : '15');
  const [pollAvailabilities, setPollAvailabilities] = useState(editData ? editData.availabilities : {});
  const [toggleDays, setToggleDays] = useState(editData && editData.duration === 1440 ? true : false);

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

  const handleDurationClick = (minutes, e) => {
    const previousDuration = document.querySelector(`li.list-item-duration[data-duration="${pollDuration}"]`);
    previousDuration.classList.remove('selected');
    if (!e.target.classList.contains('selected')) {
      e.target.classList.add('selected');
    }
    setPollDuration(minutes);
  }

  const listDurations = toggleDays
    ? <ul id='list-durations'><li className="list-item-duration selected" data-duration='all-day'>All</li></ul>
    : (<ul id='list-durations'><li className="list-item-duration selected" data-duration='15' onClick={(e) => handleDurationClick(15, e)}>15</li><li className="list-item-duration" data-duration='30' onClick={(e) => handleDurationClick(30, e)}>30</li><li className="list-item-duration" data-duration='60' onClick={(e) => handleDurationClick(60, e)}>60</li></ul>);

  return (
    <form action={editData ? `/polls/${editData.id}` : '/polls'} onSubmit={(e) => handleFormSubmit(e)}>
      <div>
        <label htmlFor='inputName'>Name
          <input id='inputName' name='pollName' type='text' onChange={e => setPollName(e.target.value)} placeholder='John Doe' value={pollName} />
          <span></span>
        </label>
      </div>
      <div>
        <label htmlFor='inputDescription'>Description
          <input id='inputDescription' name='pollDescription' type='text' onChange={e => setPollDescription(e.target.value)} placeholder='Meeting, Conference, Birthday Party...' value={pollDescription} />
          <span></span>
        </label>
      </div>
      <div>
        <label htmlFor='inputLocation'>Location
          <input id='inputLocation' name='pollLocation' type='text' onChange={e => { setPollLocation(e.target.value) }} placeholder='Conference Room A' value={pollLocation} />
          <span></span>
        </label>
      </div>
        <div id="div-duration">Duration {listDurations}</div>
      {/* Does this input need to be here anymore. */}
      <label htmlFor='inputAvailabilities'>
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
      <button type='submit' id="btn-form-submit">{editData ? 'Update' : 'Create'}</button>
    </form>
  );
};