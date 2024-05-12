import styles from '../styles/audiocontrols.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faStepBackward, faStepForward, faPlay , faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const stylecurrentartist = {
    fontSize: '10px',
    textCenter: 'center',
    flexDirection: 'row',
    marginTop: '0px',
};


function Audiocontrols() {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };
    return (
        <div className={styles.audiocontrols}>
            <div class="album-cover">
                <Image id="albumCover" src="/assets/nonealbum.png" alt="Album Cover" width={60} height={60} />
            </div>
        <div>
          <p className={styles.stylecurrentTrack}></p>
          <p class="currentartist" style={stylecurrentartist}></p>
        </div>
            <button aria-label="Back" onclick="previousTrack()">
                <FontAwesomeIcon icon={faStepBackward} />
            </button>
            <button aria-label="Play/Pause" id="playbuttonthung" onclick="playPause()">
                <FontAwesomeIcon icon={faPlay} />
            </button>
            <button aria-label="Skip Track" onclick="skipTrack()">
                <FontAwesomeIcon icon={faStepForward} />
            </button>
            <button aria-label="Volume Control For Audio"  id="volumeIcon">
                <FontAwesomeIcon icon={faVolumeUp} />
            </button>
            <input type="range" value={volume} onChange={handleVolumeChange} />
                <div id="songTime">0:00</div>
            <progress id="progress" value="0" max="100" onclick="seek(event, 'progress')"></progress>
                <div id="songDuration">0:00</div>
            <button onclick="openfullplayer()" aria-label="Open full screen player" id="arrow-button">
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        </div>
    )
}

export default Audiocontrols;