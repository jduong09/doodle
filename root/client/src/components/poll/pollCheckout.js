import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


// Display sharable email.
// Display admin email.
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
          <li>Link for users to share: {`http://localhost:3000/polls/${pollData.id}`}</li>
          <li>Link for you to edit poll: {`http://localhost:3000/admin/${pollData.id}`}</li>
        </ul>
      }
    </div>
  )
}