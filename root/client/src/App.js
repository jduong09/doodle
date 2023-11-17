import './css/meyers_reset.css';
import './css/App.css';
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { LandingPage } from './components/landingPage';
import { NewPoll } from './components/user/newPoll';
import { Dashboard } from './components/user/dashboard';
import { PollDetail } from './components/poll/pollDetail';
import { PollDetailAdmin } from './components/poll/pollDetailAdmin';
import { PollCheckout } from './components/poll/pollCheckout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/polls/new' element={<NewPoll />} />
          <Route path='/polls/:pollUuid' element={<PollDetail />} />
          <Route path='/admin/:pollUuid' element={<PollDetailAdmin />} />
          <Route path='/polls/:pollUuid/checkout' element={<PollCheckout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
