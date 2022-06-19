import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import myPic from '../images/1.png';
export default function Header(){
	return (
		<header>
			<img src={myPic} />
			<h2>Mostafa Rafati</h2>
			<h3>Front End Developer</h3>
			<h4>https://mostafa-rafati.netlify.app/</h4>
			<section className="buttons">
				<button className="buttons--email" type="button">
					<i>
						<FontAwesomeIcon icon={faEnvelope} />
					</i>{' '}
					Email
				</button>
				<button className="buttons--linkedin" type="button">
					<i>
						<FontAwesomeIcon icon={faLinkedin} />
					</i>{' '}
					LinkedIn
				</button>
			</section>
		</header>
	);
}
