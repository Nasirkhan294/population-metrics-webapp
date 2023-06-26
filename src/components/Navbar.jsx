import { useLocation, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

const Navbar = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          {locate.pathname === '/' ? (
            ''
          ) : (
            <BiLeftArrowAlt onClick={() => navigate('/')} />
          )}
        </li>
        <li>{locate.pathname === '/' ? 'Item Info' : 'Item Details'}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
