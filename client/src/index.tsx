import './styles/normalize.css';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Home} from './features/Home';
import {Notes} from './features/Notes';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </Router>,
  document.getElementById('main'),
);
