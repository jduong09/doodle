import { React } from 'react';
import { PollForm } from '../poll/pollForm';
import { apiRequest } from '../../util/api';


export const NewPoll = () => {
  const handleSubmit = async (e, formData, action, method) => {
    e.preventDefault();
    try {
      const { pollUuid } = await apiRequest(action, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      window.location = `/polls/${pollUuid}/checkout`;
    } catch(err) {
      console.log(err);
    }
  }
  
  return (
    <div>
      <header>
        <h1>Doodle</h1>
        <h2>New Poll</h2>
        <div></div>
      </header>
      <main>
        <div id="div-form">
          <PollForm handleSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
};