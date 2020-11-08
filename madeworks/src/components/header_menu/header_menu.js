import { Link } from 'react-router-dom';
import { useUser } from 'reactfire';
import MainButton from '../../components/main_button/main_button.js';

function HeaderMenu() {

  const user = useUser();

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
              {user != null ? user.email : <Link to='/acceso'><MainButton text="Acceder" /></Link>}
            </li>
        </ul>
      </div>
    );
  }
  
  export default HeaderMenu;