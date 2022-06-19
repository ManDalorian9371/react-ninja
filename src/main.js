import React from 'react';

const linkedinBtn = document.querySelector('.buttons--linkedin');
const emailBtn = document.querySelector('.buttons--email');
const twitterBtn = document.querySelector('.footer--twitter');
const githubBtn = document.querySelector('.footer--github');
const instagramBtn = document.querySelector('.footer--instagram');

export default function eventHandlers(){
	return linkedinBtn.addEventListener('click', () => {
		window.open('https://www.xyz.com', __blank);
	});
}
