import styles from '../styles/sidebarmen.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHouse, faLinesLeaning, faGear } from '@fortawesome/free-solid-svg-icons';

function Sidebarmen() {
    return (
        <div className={styles.sidebarmen}>
            <Image src="/assets/nonealbum.png" alt="main image icon"  width={50}  height={50}/>
            <ul>
                <li>
                    <button aria-label="Account Menu/button" onclick="switchthingy('user')">
                        <FontAwesomeIcon icon={faUser} style={{color: '#fff', fontSize: 35}} />
                    </button>
                </li>
                <li>
                    <button aria-label="Search" onclick="switchthingy('search')">
                        <FontAwesomeIcon icon={faSearch} style={{color: '#fff', fontSize: 35}} />
                    </button>
                </li>
                <li>
                    <button aria-label="Home" onclick="switchthingy('hom')">
                        <FontAwesomeIcon icon={faHouse} style={{color: '#fff', fontSize: 35}} />
                    </button>
                </li>
                <li>
                    <button aria-label="Library" onclick="switchthingy('lil')" style={{marginLeft: '2px'}}>
                        <FontAwesomeIcon icon={faLinesLeaning} style={{color: '#fff', fontSize: 35}} />
                    </button>
                </li>
                <li>
                    <button aria-label="App Settings" onclick="switchthingy('set')">
                        <FontAwesomeIcon icon={faGear} style={{color: '#fff', fontSize: 35}} />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmen;