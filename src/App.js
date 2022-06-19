import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './style.css';
export default function App(){
	return (
		<div className="container">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
