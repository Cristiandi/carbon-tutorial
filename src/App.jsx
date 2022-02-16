import React from "react";

import { Content } from 'carbon-components-react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';

import TutorialHeader from './components/TutorialHeader';

import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

const App = () => {
  return (
    <div className="App">
      <TutorialHeader />
      <Content>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/repos" element={<RepoPage />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;