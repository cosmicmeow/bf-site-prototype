import React from 'react';
import '../App.css';

class HelloBar extends React.Component {
	Button = () => {
		return (
			<a href='/' target='_blank'>
				<h3>Make me an expert!</h3>
			</a>
		);
	};
	render() {
		return (
			<div className='container'>
				<div className='hellobar'>
					<h4>
						Learn Docker & Kubernetes from a Docker Captain Today:
					</h4>
					<this.Button />
				</div>
			</div>
		);
	}
}

export default HelloBar;
