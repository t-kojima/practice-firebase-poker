import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import routes from './routes';

ReactDOM.render( <Root routes={routes} />, document.getElementById('root'));
