import { useLocation, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          {locate.pathname === '/' ? (
            '© 2023'
          ) : (
            <BiLeftArrowAlt className={styles.arrow} onClick={() => navigate('/')} />
          )}
        </li>
        <li>{locate.pathname === '/' ? 'Global Population' : 'Country Details'}</li>
        <li>
          <FaMicrophone className={styles.microphone} />
          <FaRegSun className={styles.setting} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
