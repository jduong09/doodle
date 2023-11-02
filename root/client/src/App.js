import './css/meyers_reset.css';
import './css/App.css';
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/user/dashboard';
import { PollDetail } from './components/poll/pollDetail';
import { PollDetailAdmin } from './components/poll/pollDetailAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/polls/:pollUuid' element={<PollDetail />} />
          <Route path='/admin/:pollUuid' element={<PollDetailAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
