import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import routes from './routes';

import './assets/css/bulma.scss';

ReactDOM.render( <Root routes={routes} />, document.getElementById('root'));
