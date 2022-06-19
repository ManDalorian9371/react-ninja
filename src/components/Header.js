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
			<h4>
				{' '}
				<a href="https://mostafa-rafati.netlify.app/"> https://mostafa-rafati.netlify.app/</a>
			</h4>
			<section className="buttons">
				<a href="mailto:mostafarafati888@gmail.com">
					<button className="buttons--email" type="button">
						<i>
							<FontAwesomeIcon icon={faEnvelope} />
						</i>{' '}
						Email
					</button>
				</a>
				<a href="https://www.linkedin.com/in/rafati-mostafa/">
					<button className="buttons--linkedin" type="button">
						<i>
							<FontAwesomeIcon icon={faLinkedin} />
						</i>{' '}
						LinkedIn
					</button>
				</a>
			</section>
		</header>
	);
}
