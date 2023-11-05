import '../../css/pollDetail.css';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ResponseForm } from './responseForm';

export const PollDetail = () => {
  const { pollUuid } = useParams();
  const [pollData, setPollData] = useState('')
  
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

  const { name, description, location, availabilities, responses } = pollData;
  
  return (
    <div>
      <header>
        <span>Doodle</span>
        <h1>{name}</h1>
      </header>
      <main>
        <div id="div-poll-description">
          <ul id="ul-poll-description">
            <li>{description}</li>
            <li>Location:{location}</li>
          </ul>
        </div>
        {availabilities && <ResponseForm pollUuid={pollUuid} availabilities={availabilities} responses={responses} />}
      </main>
    </div>
  );
};