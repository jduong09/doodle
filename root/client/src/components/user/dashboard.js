import { React, useState, useEffect } from 'react';
import { apiRequest } from '../../util/api';

export const Dashboard = () => {
  const [polls, setPolls] = useState([]);

  const handleEdit = async (poll_uuid, e) => {
    e.preventDefault();
    window.location = `/polls/${poll_uuid}/update`;
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
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    window.location = `polls/new`
  }

  const handleSubmitResponse = (poll_uuid, e) => {
    e.preventDefault();
    window.location = `/polls/${poll_uuid}`;
  }

  const handleAdminPage = (poll_uuid, e) => {
    e.preventDefault();
    window.location = `/admin/${poll_uuid}`;
  }

  const arrPolls = polls.map((poll, idx) => {
    return (
      <li key={idx} data-poll-id={poll.id}>
        <h3>{poll.title}</h3>
        <div>{poll.location}</div>
        <button onClick={(e) => handleEdit(poll.id, e)}>Edit</button>
        <button onClick={(e) => handleSubmitResponse(poll.id, e)}>Submit Response</button>
        <button onClick={(e) => handleAdminPage(poll.id, e)}>Admin</button>
      </li>
    );
  });

  return (
    <div>
      <header>
        <h1>Doodle</h1>
        <h2>Dashboard</h2>
        <button id='btn-poll-create' onClick={handleCreate}>Create</button>
      </header>
      <main>
        <div id='div-polls'>
          <ul id="list-polls">{arrPolls}</ul>
        </div>
      </main>
    </div>
  );
};