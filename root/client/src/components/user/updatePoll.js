import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PollForm } from '../poll/pollForm';
import { apiRequest } from '../../util/api';

export const UpdatePoll = () => {
  const { pollUuid } = useParams();
  console.log(pollUuid);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const getPollData = async () => await apiRequest(`/polls/${pollUuid}/pollInfo`, { method: 'GET' })
      .then(({ pollData }) => {
        setEditData(pollData);
      })
      .catch(err => {
        console.error(err);
      })

      getPollData();
  }, [pollUuid]);
  
  const handleSubmit = async (e, formData, action, method) => {
    e.preventDefault();
    try {
      await apiRequest(action, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      setEditData(null);

      window.location = `/admin/${pollUuid}`;
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <header>
        <h1>Doodle</h1>
        <div>Update Poll</div>
      </header>
      <main>
        {editData && <PollForm handleSubmit={handleSubmit} editData={editData} />}
      </main>
    </div>
  );
}