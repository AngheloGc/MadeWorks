import { Link, useHistory } from 'react-router-dom';

import 'firebase/auth';
import  { useFirebaseApp } from 'reactfire';


import './styled.scss';
import { useState } from 'react';

function SignupForm() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebaseApp();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    await firebase.auth().createUserWithEmailAndPassword(email,password);
    setIsSubmitted(false);
    history.push('/');
  }


    return (
      <div className="SignupForm">
          <form>
              <input type='text' placeholder='Correo electrónico' onChange={e=>setEmail(e.target.value)}/>
              <input type='password' placeholder='Contraseña' onChange={e=>setPassword(e.target.value)}/>
              {!isSubmitted ? <button onClick={e=>submit(e)}>Registrarse</button> : <div class="loader"></div>}
              <Link to='recover-password'><p>Al crear una cuenta, automaticamente aceptas <b>nuestras políticas de privacidad</b> y los <b>términos de nuestro servicio</b></p></Link>
          </form>
      </div>
    );
  }
  
  export default SignupForm;