import { React } from 'react';

export const LandingPage = () => {
  const handleNewPoll = (e) => {
    e.preventDefault();
    window.location = '/polls/new';
  }

  return (
    <div>
      <header>
        <h1>Doodle</h1>
        <div>A Simple Meeting Scheduling App</div>
        <button id='btn-poll-new' onClick={handleNewPoll}>Get Started</button>
      </header>
      <main>
        <div>
          <span>Insert Image here</span>
          <span>Insert app's purpose.</span>
        </div>
      </main>
    </div>
  );
};