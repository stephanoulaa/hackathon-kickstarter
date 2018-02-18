import React from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import dumpLand from '../dumpland.jpg';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <div className="App">
        <h1>Name of Thing</h1>
        <tr>
        <td>Name of Organizer</td>
        <td>Name of Public Rep</td>
        <td>Date</td>
        </tr>
        <img src={dumpLand} alt="pic of dumpland"/>
        </div>

      </div>
    )
  }
}

export default HomePage
