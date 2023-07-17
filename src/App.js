import React, { useState, useRef } from 'react';
//adding styles
import './styles/app.scss';
//adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//importing data
import data from './data';

function App() {
	const audioRef = useRef(null);
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration });
	};
	//state for song playing info
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});
	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player
				audioRef={audioRef}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setSongInfo={setSongInfo}
				songInfo={songInfo}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	);
}

export default App;
