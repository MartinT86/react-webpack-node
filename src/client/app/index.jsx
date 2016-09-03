import React from 'react';
import {render} from 'react-dom';

import MainComponent from './MainComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <MainComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));