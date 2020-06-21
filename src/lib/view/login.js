// aca importamos las siguientes funciones para poder crear los eventos
import { ingresarClick, ingresarGoogleClick } from '../control.js';

export default () => {
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'container');
  divElement.innerHTML = `
    <div class='containerAll'>
    <section class='container2'>
    <header>
    <img src='logotitulo.png' class='logotitulo'>
    <h2 class='subtitle'>La red para seguidores de Star Wars</h2>
    </header>
      <form action='' class='login'>
      <p class='inciciasesion'>Inicia sesión</p>
          <input id='email' class='datos' type='email' placeholder='Ingresa tu correo' required>
          <input id='password' class='datos' type='password'  placeholder='***************' required>
          <button type='button' class='btn' id='btn-sign-in'>Ingresar</button>
      </form>
      <div class='ingresogoogle'>
          <p class='inciciasesion'>Ingresa con<br><img button='icon-network' id='icon-google' src='LOGOGLE.png' height='30px' width='30px'></p>
          <a href='#/olvido' class='recuperar'>Olvide mi contraseña</a>
         <a href='#/registro' id='register-link' class='aqui'> Crea tu cuenta </a>
      </div>
    </section>
    `;

  // funciones para que el usuario pueda ingresar a la pagina
  const email = divElement.querySelector('#email');
  const password = divElement.querySelector('#password');
  const btnSignIn = divElement.querySelector('#btn-sign-in');
  // evento al boton ingresar
  btnSignIn.addEventListener('click', () => {
    ingresarClick(email.value, password.value);
  });
  // evento click al icono de google
  const iconGoogle = divElement.querySelector('#icon-google');
  iconGoogle.addEventListener('click', ingresarGoogleClick);

  return divElement;
};
