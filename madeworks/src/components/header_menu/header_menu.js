import MainButton from '../../components/main_button/main_button.js';

function HeaderMenu() {
    return (
      <div className="Header_Menu">
        <ul>
            <li>
                anuncios
            </li>
            <li>
                empleos
            </li>
            <li>
              <MainButton text="Regístrate" />
            </li>
        </ul>
      </div>
    );
  }
  
  export default HeaderMenu;