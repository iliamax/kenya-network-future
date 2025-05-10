
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root');

// Make sure we have a root element to render to
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root element not found. Cannot mount React application.');
}
