import React from 'react';
import '../App.css';

const socials = [
	{
		link: '/',
		icon: '',
		name: 'Github',
	},
	{
		link: '/',
		icon: '',
		name: 'Twitter',
	},
	{
		link: '/',
		icon: '',
		name: 'Youtube',
	},
	{
		link: '/',
		icon: '',
		name: 'Patreon',
	},
];

class Banner extends React.Component {
	Socials = () => {
		return (
			<ul className='social-links'>
				{socials.map(item => {
					return (
						<li className='social-icon'>
							<a href={item.link}>{item.name}</a>
						</li>
					);
				})}
			</ul>
		);
	};
	BannerTitle = () => {
		return (
			<div className='banner-title'>
				<h1>Bret Fisher</h1>
				<p>
					Bestselling Courses and Training on DevOps and Containers.
					Docker Captain.
				</p>
			</div>
		);
	};
	render() {
		return (
			<div className='banner'>
				<this.BannerTitle />
				<this.Socials />
			</div>
		);
	}
}

export default Banner;
