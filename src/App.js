import React, { useState } from 'react';
//adding styles
import './styles/app.scss';
//adding components
import Player from './components/Player';
import Song from './components/Song';
//importing data
import data from './data';

function App() {
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player />
		</div>
	);
}

export default App;
