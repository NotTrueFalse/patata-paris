import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from './components/PageLayout.jsx';
import './styles/purged.scss';
import './styles/ui-icons.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Missing #root mount point in index.html');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <PageLayout />
  </React.StrictMode>,
);
