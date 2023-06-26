import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>Navbar</div>
  );
};

export default Navbar;
