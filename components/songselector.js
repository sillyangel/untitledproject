import styles from '../styles/songselector.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Songselector() {
    return (
        <div id={styles.songselector}>
            <h2>Home</h2>
            <div id={styles.user}>
                <FontAwesomeIcon icon={faUser}/>
                <span id="username">Not Logged In</span>
            </div>
            <div id="farts">
            </div>
            <div id="single">
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Songselector;