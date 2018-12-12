import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './app-context';
import App from './components/App';
import 'bulma/css/bulma.css';

const RootApp = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
