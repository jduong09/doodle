import { React } from 'react';
import { PollForm } from '../poll/pollForm';

export const NewPoll = () => {
  return (
    <div>
      <header>
        <h1>Doodle</h1>
        <div>New Poll</div>
      </header>
      <main>
        <PollForm />
      </main>
    </div>
  );
};