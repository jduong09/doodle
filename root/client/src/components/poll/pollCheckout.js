import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PollCheckout = () => {
  const { pollUuid } = useParams();
  const [pollData, setPollData] = useState(null);
  useEffect(() => {
    const fetchPollData = async () => {
      const response = await fetch(`/polls/${pollUuid}/pollInfo`);
      const data = await response.json();

      return data;
    }

    fetchPollData().then(data => setPollData(data.pollData));
  }, []);

  return (
    <div>
      {pollData &&
        <ul>
          <li>Link for users to share: <a href={`http://localhost:3000/polls/${pollData.id}`}>{`http://localhost:3000/polls/${pollData.id}`}</a></li>
          <li>Link for you to edit poll: <a href={`http://localhost:3000/admin/${pollData.id}`}>{`http://localhost:3000/admin/${pollData.id}`}</a></li>
        </ul>
      }
    </div>
  )
}