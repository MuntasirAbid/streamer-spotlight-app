import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StreamerSubmissionForm from './components/StreamerSubmissionForm';
import StreamerList from './components/StreamerList';
import StreamerDetails from './components/StreamerDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StreamerSubmissionForm />} />
      <Route path="/streamers" element={<StreamerList />} />
      <Route path="/streamers/:id" element={<StreamerDetails />} />
    </Routes>
  );
};

export default App;
