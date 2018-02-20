import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <App
    url="http://localhost:3001/api/songs"
    pollInterval={ 2000 } />,
  document.getElementById('root')
);
