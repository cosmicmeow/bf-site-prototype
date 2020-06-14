import React from 'react';
import '../App.css';

class About extends React.Component {
	render() {
		return (
			<div className='about'>
				<div className='about-image'>
					<img
						src={require(`../assets/brethimself.png`)}
						alt='bret fisher'
						className='bret-image'
					/>
				</div>
				<div className='about-text'>
					<h2>I'm Bret!</h2>
					<p>
						Hey, thanks for stopping by. I'm a freelance DevOps and
						Docker consultant, Udemy Instructor, trainer, speaker,
						and Open Source volunteer working from Virginia Beach,
						VA
					</p>
					<p>
						I teach courses on Docker and Container technology that
						you can find{' '}
						<a href='/' target='_blank'>
							here
						</a>
						.
					</p>
					<p>
						I do live training workshops often, which you can come
						join me at over{' '}
						<a href='/' target='_blank'>
							here
						</a>
						.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
