import '../../css/pollDetail.css';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ResultsList } from './resultsList'

export const PollDetailAdmin = () => {
  const { pollUuid } = useParams();
  const [pollData, setPollData] = useState('');
  
  useEffect(() => {
    const fetchPollData = async () => {
      const response = await fetch(`/polls/${pollUuid}/pollInfo`, { method: 'GET' });
      
      const data = response.json();
      if (response.ok) {
        return data;
      }
    }

    fetchPollData().then(data => setPollData(data.pollData));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    // route to update form.
    window.location = `http://localhost:3000/polls/${pollUuid}/update`
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`/admin/${pollUuid}`, { method: 'DELETE' });

    const data = response.json();

    if (response.ok) {
      window.location = '/';
    } else {
      console.error(data);
    }
  };

  const { name, duration, availabilities, responses } = pollData;

  return (
    <div>
      <header>
        <span>Doodle</span>
        <h1>{name}</h1>
        <button onClick={(e) => handleUpdate(e)}>Update Poll</button>
        <button onClick={handleDelete}>Delete Poll</button>
      </header>
      <main>
        <div id="div-availabilities">
          <ul id='ul-availabilities'>{availabilities && <ResultsList availabilities={availabilities} responses={responses} duration={duration} />}</ul>
        </div>
      </main>
    </div>
  )
};