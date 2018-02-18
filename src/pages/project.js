import React from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import dumpLand from '../dumpland.jpg';
import mockProjects from '../projects.json'

class ProjectPage extends React.Component {
  render () {
    console.log(this.props.match.params)
    const currProject = mockProjects[this.props.match.params.project]

    return (
      <div>
        <h1>{currProject.title}</h1>
        <tr>
          <td>{currProject.org}</td>
          <td>{currProject.rep}</td>
          <td>Date</td>
        </tr>
        <img src={dumpLand} alt="pic of dumpland"/>  
      </div>
    )
  }
}

export default ProjectPage
