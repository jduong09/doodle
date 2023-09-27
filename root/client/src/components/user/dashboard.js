import { React, useState } from 'react';
import { PollForm } from '../poll/pollForm';

export const Dashboard = () => {
  const [showPollForm, setShowPollForm] = useState(false);
  const handleSubmit = async (e, formData) => {
    e.preventDefault();  
    await fetch('/polls', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
  }

  return (
    <div>
      <h2>Hello this is Dashboard Page.</h2>
      <button onClick={() => { setShowPollForm(!showPollForm)} }>Create New Poll</button>
      {showPollForm && <PollForm handleSubmit={handleSubmit} />}
    </div>
  )
}