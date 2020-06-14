import React from 'react';
import './App.css';
import HelloBar from './components/HelloBar';
import Banner from './components/Banner';
import About from './components/About';
import Courses from './components/Courses';

class App extends React.Component {
	render() {
		return (
			<div className='root'>
				<HelloBar />
				<Banner />
				<About />
				<Courses />
			</div>
		);
	}
}

export default App;
