import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';

// Pages
import { Skills } from './pages/Skills';
import { SkillsHome } from './pages/Skills/SkillsHome';
import { CodingSkills } from './pages/Skills/CodingSkills';
import { Portfolio } from './pages/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'/new'}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="skills" element={<Skills />}>
            <Route path="" element={<SkillsHome />} />
            <Route path="coding" element={<CodingSkills />} />
          </Route>
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
