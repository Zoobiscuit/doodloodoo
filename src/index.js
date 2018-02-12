import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const BaseApp = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(<BaseApp />, document.getElementById('root'));
registerServiceWorker();
