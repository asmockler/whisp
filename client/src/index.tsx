import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div
      style={{
        alignItems: 'center',
        background: '#111',
        color: '#fafafa',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <h1>whisp</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('main'));
