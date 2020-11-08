import { Link } from 'react-router-dom';
import MainButton from '../../components/main_button/main_button.js';

function HeaderMenu() {
    return (
      <div className="Header_Menu">
        <ul>
            <li>
                <Link to='/anuncios'>anuncios</Link>
            </li>
            <li>
                <Link to='/empleos'>empleos</Link>
            </li>
            <li>
              <Link to='/registro'><MainButton text="Regístrate" /></Link>
            </li>
        </ul>
      </div>
    );
  }
  
  export default HeaderMenu;