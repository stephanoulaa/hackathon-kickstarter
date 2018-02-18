import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import dumpLand from './dumpland.jpg';

class App extends Component {
  render() {
      return (
          <div className="App">
        <h1>Name of Thing</h1>
          <tr>
          <td>Name of Organizer</td>
          <td>Name of Public Rep</td>
          <td>Date</td>
          </tr>
          <img src={dumpLand} alt="pic of dumpland"/>
          </div>
      )
  }
}

export default App;