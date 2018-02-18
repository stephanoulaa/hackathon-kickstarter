import React, { Component } from 'react';
import  {Button}  from 'reactstrap';
import LinearProgress from 'material-ui/LinearProgress';
import './App.css';
import dump from './dump.jpg';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
		return (
			<MuiThemeProvider>
			<div>
			<div className="App">
						<h1 className="App-content">Jumpstarter Title</h1>
						<h3>Organizer and Coordinator names</h3>
						<img src={dump} className="pic" alt="pic of dump"/>
						<div className="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis neque faucibus, tincidunt dolor sit amet, dapibus sapien. Etiam eleifend elit velit, eget mattis sem molestie ac. Suspendisse ullamcorper blandit leo, ut iaculis ligula congue ut. Donec rutrum leo. Cras ultricies mollis mauris tincidunt posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incept os himenaeos. Nulla facilisi. Suspendisse nulla rhoncus, congue erat non, malesuada massa. Nullam tristique aliquam massa at tempus. Cras ultricies neque quis rutrum condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis neque faucibus, tincidunt dolor sit amet, dapibus sapien. Etiam eleifend elit
						</p>
						<Button className="button" color="danger">Contribute</Button>
						<LinearProgress mode="determinate" value={25} />
						<p className="stuff">Goal Reached!</p>
						</div>
					</div>
			</div>
				</MuiThemeProvider>
		)
  }
}

export default App;
