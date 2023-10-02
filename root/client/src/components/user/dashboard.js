import { React, useState, useEffect } from 'react';
import { PollForm } from '../poll/pollForm';

export const Dashboard = () => {
  const [showPollForm, setShowPollForm] = useState(false);
  const [polls, setPolls] = useState([]);
  const handleSubmit = async (e, formData) => {
    e.preventDefault();  
    await fetch('/polls', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
  }

  useEffect(() => {
    const getPolls = async () => {
      return await fetch('/polls/all').then(data => data.json()).then(result => result.response);
    }

    try {
      const polls = getPolls();
      polls.then(response => setPolls(response));
    } catch(error) {
      console.log(error);
    }
  }, []);

  const arrPolls = polls.map((poll, idx) => {
    return (
      <li key={idx}>
        <h3>{poll.title}</h3>
        <div>{poll.location}</div>
        <button>Edit</button>
        <button>Delete</button>
        <button>See Results?</button>
      </li>
    )
  });

  return (
    <div>
      <header><h1>Hello this is Dashboard.</h1></header>
      <main>
        <div id="div-main">
          <div id="div-main-header">
            <h2>Polls</h2>
            <button onClick={() => { setShowPollForm(!showPollForm)} }>Create</button>
          </div>
        </div>
        {!showPollForm && <ul id="list-polls">{arrPolls}</ul>}
        {showPollForm && <PollForm handleSubmit={handleSubmit} />}
      </main>
    </div>
  )
}