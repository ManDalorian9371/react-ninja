import logo from './logo.svg';
import './App.css';

// link to ninja tutorial
// https://www.youtube.com/watch?v=9D1x7-2FmTA&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=3
function App(){
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					fuck with <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
