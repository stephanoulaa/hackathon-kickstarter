import React, { Component } from 'react';
import  {Button}  from 'reactstrap';
import {Table} from 'reactstrap';
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
						<h1 className="App-content header1">Jumpstarter Title</h1>
						<h3 className="header2">Organizer and Coordinator names</h3>
						<p className="date">To Be Funded By: 12/19/18</p>
						<img src={dump} className="pic" alt="pic of dump"/>
						<div className="text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis neque faucibus, tincidunt dolor sit amet, dapibus sapien. Etiam eleifend elit velit, eget mattis sem molestie ac. Suspendisse ullamcorper blandit leo, ut iaculis ligula congue ut. Donec rutrum leo. Cras ultricies mollis mauris tincidunt posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per incept os himenaeos. Nulla facilisi. Suspendisse nulla rhoncus, congue erat non, malesuada massa. Nullam tristique aliquam massa at tempus. Cras ultricies neque quis rutrum condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis neque faucibus, tincidunt dolor sit amet, dapibus sapien. Etiam eleifend elit
						</p>
						<Button className="button" color="danger" size="lg">Contribute</Button>
						<LinearProgress mode="determinate" value={25} />
						<p className="stuff">250,000/1,000,000</p>
						</div>
					</div>
			</div>

			
			<p> (((new page lol))) </p>
		
	<div className="more-text">	
		<div className="contribute">
			<h3> Thank you for contributing! Please send your desired
					contribution to the following address: </h3>		
					<p>0xDEADBEEF</p>
		
		<h1>Track your contributions:</h1>
		<Table striped>
			<thead>
				<tr>
					<th>Project Name</th>
					<th>Contributed (ETH)</th>
					<th>Tokens</th>
					<th>Status</th>
				</tr></thead>
				<tbody><tr>
						<td>Sample 1</td>
						<td>500</td>
						<td>5000</td>
						<td>75% funded</td>
				</tr>
				<tr>
						<td>Sample 2</td>
						<td>10</td>
						<td>3</td>
						<td>40% funded</td>
			</tr></tbody>
				</Table>
				</div>
		</div>
					</MuiThemeProvider>
		)
  }
}

export default App;
