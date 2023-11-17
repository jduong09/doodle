import { React, useState, useEffect } from 'react';
import { PollForm } from '../poll/pollForm';
import { apiRequest } from '../../util/api';

export const Dashboard = () => {
  const [showPollForm, setShowPollForm] = useState(false);
  const [polls, setPolls] = useState([]);
  const [editData, setEditData] = useState(null);
  const [formError, setFormError] = useState({ name: '', description: '', location: '', duration: '', availabilities: '' });

  const handleSubmit = async (e, formData, action, method) => {
    e.preventDefault();
    try {
      const { response } = await apiRequest(action, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      console.log(response);
      setShowPollForm(false);
      setEditData(null);
    } catch(err) {
      console.log(err);
    }
  }

  const handleEdit = async (poll_uuid, e) => {
    e.preventDefault();
    try {
      // Do we want to do something with success response message?
      const { pollData } = await apiRequest(`/polls/${poll_uuid}/pollInfo`, { method: 'GET' });
      setEditData(pollData);
      setShowPollForm(true);
    } catch(err) {
      console.log(err);
    }
  }

  const handlePollOpen = () => {
    setShowPollForm(!showPollForm);
    setEditData(null);
  }

  useEffect(() => {
    const getPolls = async () => await apiRequest('/polls', { method: 'GET' })
      .then(({ polls, response }) => {
        setPolls(polls);
      })
      .catch(err => {
        console.error(err);
      })

      getPolls();
  }, [showPollForm]);

  const handleSubmitResponse = (e) => {
    e.preventDefault();

    const pollId = e.target.parentElement.getAttribute('data-poll-id');

    window.location = `/polls/${pollId}`;
  }

  const handleAdminPage = (e) => {
    e.preventDefault();

    const pollId = e.target.parentElement.getAttribute('data-poll-id');
    window.location = `/admin/${pollId}`;
  }

  const arrPolls = polls.map((poll, idx) => {
    return (
      <li key={idx} data-poll-id={poll.id}>
        <h3>{poll.title}</h3>
        <div>{poll.location}</div>
        <button>Edit</button>
        <button onClick={handleSubmitResponse}>Submit Response</button>
        <button onClick={handleAdminPage}>Admin</button>
      </li>
    );
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