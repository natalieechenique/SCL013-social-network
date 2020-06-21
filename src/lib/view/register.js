// importamos la funcion para darle el evento al boton registar
import { registrarClick } from '../control.js';

// creamos el div que contiene la pagina de registro
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
    <form action='' class='login' id='register-form'>
    <p class='inciciasesion'>Registro</p>
    <input type='text' id='name' class='datos' placeholder='Nombre y Apellido'>                 
    <input id='email2' class='datos' type='email' placeholder='Ingresa tu correo'>
    <input id='password2' class='datos' type='password' placeholder='Ingresa tu contraseña'>
    <button type='button' class='btn' id='btn-sign-up'>Registrar</button>
    </form>
    <p class='parrafo'>Si ya tienes una cuenta <br><a href=''>Inicia sesión</a></p>
    </section>
    </div>
    `;

  // creamos las variables para guardar los datos dentro del input-text
  const registerClick = divElement.querySelector('#btn-sign-up');
  const email2 = divElement.querySelector('#email2');
  const password2 = divElement.querySelector('#password2');
  const userName = divElement.querySelector('#name');

  // le damos el evento click al boton registrar
  registerClick.addEventListener('click', () => {
    registrarClick(email2.value, password2.value, userName.value);
  });
  return divElement;
};
