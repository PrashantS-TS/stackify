import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './pages/Form';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { sdk } from './apis/api';
import Dashboard from './pages/Dashboard';
import SlackAuth from './pages/user/auth/SlackAuth';
import Slack from './pages/user/Slack';
import Teams from './pages/user/Teams';
import TeamsAuth from './pages/user/auth/TeamsAuth';

const App = () => {

  useEffect(async () => {
    console.log("mai idhar hu")
    const { managementToken } = await sdk.getThriveStackToken("STACKIFY's Auth Token");
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user/slack" element={<Slack />} />
      <Route path="/user/teams" element={<Teams />} />
      <Route path="/user/auth/slack" element={<SlackAuth />} />
      <Route path="/user/auth/teams" element={<TeamsAuth />} />
    </Routes>
  );
};

export default App;

// 47ffa1c5-035f-4a79-b952-1befb3bd0113 SecretID
// PXn8Q~1ZV8KnndRGcQm1sBlz4sHg6d042.To8c~O Value