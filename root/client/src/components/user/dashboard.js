import { React, useState, useEffect } from 'react';
import { PollForm } from '../poll/pollForm';

export const Dashboard = () => {
  const [showPollForm, setShowPollForm] = useState(false);
  const [polls, setPolls] = useState([]);
  const [editData, setEditData] = useState(null);
  const [formMethod, setFormMethod] = useState('POST');

  const handleSubmit = async (e, formData) => {
    e.preventDefault();

    if (formMethod === 'POST') {
      await fetch('/polls', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
    } else {
      await fetch(`/polls/${editData.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
    }
    setShowPollForm(false);
  }

  const handleEdit = async (poll_uuid, e) => {
    e.preventDefault();
    await fetch(`/polls/${poll_uuid}/pollInfo`).then(data => data.json()).then(response => setEditData(response.pollData));
    setShowPollForm(true);
    setFormMethod('PATCH');
  }

  const handlePollOpen = () => {
    setShowPollForm(!showPollForm);
    setFormMethod('POST');
  }

  useEffect(() => {
    const getPolls = async () => await fetch('/polls').then(data => data.json()).then(result => result.response);

    try {
      const polls = getPolls();
      polls.then(response => setPolls(response));
    } catch(error) {
      console.log(error);
    }
  }, [showPollForm]);

  const arrPolls = polls.map((poll, idx) => {
    return (
      <li key={idx} data-poll-id={poll.id}>
        <h3>{poll.title}</h3>
        <div>{poll.location}</div>
        <button onClick={(e) => handleEdit(poll.id, e)}>Edit</button>
        <button>Delete</button>
        <button>See Results?</button>
      </li>
    )
  });

  return (
    <div>
      <header><h1>Doodle Clone</h1></header>
      <main>
        <div id="div-main">
          <div id="div-main-header">
            <h2>{showPollForm ? 'Create/Update Poll' : 'Polls'}</h2>
            <button id={showPollForm ? 'btn-poll-create' : 'btn-poll-close'} type='button' onClick={handlePollOpen}>
              {showPollForm 
              ? <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              : 'Create'}
            </button>
          </div>
        </div>
        {showPollForm ? <PollForm handleSubmit={handleSubmit} editData={editData} /> : <ul id="list-polls">{arrPolls}</ul>}
      </main>
    </div>
  );
};