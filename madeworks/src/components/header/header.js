import Logo from '../../assets/Logo.png';
import './styled.scss';
import HeaderMenu from '../../components/header_menu/header_menu.js';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="Header">
        <Link to='/'><img src={Logo} alt='MadeWorks' /></Link>
        <HeaderMenu />
      </div>
    );
  }
  
  export default Header;