import React from 'react';
import '../App.css';
import './courses.css';

const coursesList = [
	{
		title: 'Docker Mastery: with Kubernetes + Swarm',
		image: 'docker_mastery',
		link: '',
	},
	{
		title: 'Kubernetes Mastery: Hands-On Lessons',
		image: 'kube_mastery',
		link: '',
	},
	{
		title: 'Docker for Node.js',
		image: 'docker_node',
		link: '',
	},
	{
		title: 'Docker Swarm Master: DevOp Style Cluster Orchestration',
		image: 'swarm_devops',
		link: '',
	},
];

class Courses extends React.Component {
	CoursesList = () => {
		return (
			<div className='courses-container'>
				{coursesList.map(item => {
					return (
						<a href={item.link} className='course-item-container'>
							<img
								src={require(`../assets/${item.image}.png`)}
								className='course-image'
								alt={item.title}
							/>
							<div className='course-title'>{item.title}</div>
						</a>
					);
				})}
			</div>
		);
	};

	render() {
		return (
			<div className='courses'>
				<div className='courses-header'>
					<h2>My Courses</h2>
					<p>
						I focus exclusively on Container DevOps practices and
						tools. This means Docker, Kubernetes, Swarm, Compose,
						Registry, and more! Get all my courses for the best
						current price each with coupon links below.
					</p>
				</div>

				<this.CoursesList />
			</div>
		);
	}
}

export default Courses;
