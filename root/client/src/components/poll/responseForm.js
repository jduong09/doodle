import { React, useState } from 'react';
import { AvailabilitiesList } from './availabilitiesTable';

export const ResponseForm = ({ pollUuid, availabilities, responses }) => {
  const [name, setName] = useState('');
  const [choices, setChoices] = useState([]);

  const handleUserChoice = (e) => {
    e.preventDefault();
    const timestamp = e.target.parentElement.getAttribute('data-timestamp');
    let newChoicesObj = [...choices];

    if (!newChoicesObj.includes(timestamp)) {
      newChoicesObj.push(timestamp)
      e.target.classList.add('selected');
    } else {
      newChoicesObj = choices.filter((chosenTimestamps) => chosenTimestamps !== timestamp);
      e.target.classList.remove('selected');
    }
    setChoices(newChoicesObj);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`/polls/${pollUuid}/response`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          choices
        })
      });
      window.location = '/';
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div id="div-form-response">
      <form id="form-response" onSubmit={(e) => handleFormSubmit(e)}>
        <AvailabilitiesList
          availabilities={availabilities}
          responses={responses}
          choices={choices}
          handleUserChoice={handleUserChoice}
        />
        <label htmlFor='name'>Name:
          <input id='name' name='name' placeholder='Justin' value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>
        <button id="btn-submit">Submit Response</button>
      </form>
    </div>
  )
};