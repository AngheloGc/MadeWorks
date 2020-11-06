import Logo from '../../assets/Logo.png';
import './styled.scss';
import HeaderMenu from '../../components/header_menu/header_menu.js';

function Header() {
    return (
      <div className="Header">
        <img src={Logo} alt='MadeWorks' />
        <HeaderMenu />
      </div>
    );
  }
  
  export default Header;