import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
	return (
		<footer className="footer">
			<ul className="footer--list">
				<li className="footer--twitter">
					<a href="https://twitter.com/ManDalorian9371">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li className="footer--github">
					<a href="https://github.com/ManDalorian9371">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
				<li className="footer--instagram">
					<a href="https://www.instagram.com/mostafa_r9371/">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</li>
			</ul>
		</footer>
	);
}
