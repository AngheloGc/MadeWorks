import {
    useFirebaseApp
} from 'reactfire';

import Header from '../../components/header/header.js';
import SignupForm from '../../components/signup_form/signup_form.js';

import './styled.scss';

function Acceso() {
  return (
    <div className="Acceso">
      <Header />
      <div className="Acceso_Content">
        <div className="Acceso_Content_Form">
          <div className="Acceso_Content_Headers">
            <div>
              <span>Crear cuenta</span>
            </div>
            <div>
              <span className='inactive-button'>Iniciar sesión</span>
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Acceso;