import { React, useState } from 'react';
import { AvailabilitiesList } from './availabilitiesTable';

export const ResponseForm = ({ pollId, availabilities, responses }) => {
  const [name, setName] = useState('');
  const [choices, setChoices] = useState({});

  const handleUserChoice = (e) => {
    e.preventDefault();
    const timestamp = e.target.parentElement.getAttribute('data-timestamp');
    const date = timestamp.slice(0, 10);
    const time = timestamp.slice(11, 19);
    const newChoicesObj = { ...choices };

    // if choices does not have this date yet.
    if (!newChoicesObj[date]) {
      newChoicesObj[date] = [time];
      e.target.classList.add('selected');
    // if this date already has this time selected, then this user choice will unselect it.
    } else if (newChoicesObj[date].includes(time)) {
      const array = newChoicesObj[date].filter((startTime) => startTime !== time);
      // If unselecting the choice causes this date to have no more times, we delete the key
      if (!array.length) {
        delete newChoicesObj[date];
      // Else we just filter it out and leave the selected times from this specific date.
      } else {
        newChoicesObj[date] = array;
      }
      e.target.classList.remove('selected');
    // Choices obj has date already, and is being selected, so add. 
    } else {
      newChoicesObj[date] = [...newChoicesObj[date], time];
      e.target.classList.add('selected');
    }
    setChoices(newChoicesObj);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`/polls/${pollId}/response`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          choices
        })
      });
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div id="div-form-response">
      <form id="form-response" onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor='name'>Name:
          <input id='name' name='name' placeholder='Justin' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <AvailabilitiesList
          availabilities={availabilities}
          responses={responses}
          choices={choices}
          handleUserChoice={handleUserChoice}
        />
        <button id="btn-submit">Submit Response</button>
      </form>
    </div>
  )
};