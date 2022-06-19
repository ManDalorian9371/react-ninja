import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
	return (
		<footer className="footer">
			<ul className="footer--list">
				<li className="footer--twitter">
					<FontAwesomeIcon icon={faTwitter} />
				</li>
				<li className="footer--github">
					<FontAwesomeIcon icon={faGithub} />
				</li>
				<li className="footer--instagram">
					<FontAwesomeIcon icon={faInstagram} />
				</li>
			</ul>
		</footer>
	);
}
