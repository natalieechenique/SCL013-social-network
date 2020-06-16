//aca importamos las siguientes funciones para poder crear los eventos 
import {
    ingresarClick,
    ingresarGoogleClick,
} from "../control.js";


export default () => {
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "container");
    divElement.innerHTML = `
    <div class='containerAll'>
    <section class="container2">
    <header>
    <img src="logotitulo.png" width="200" height="100">
    <h2 class='subtitle'>La red para seguidores de Star Wars</h2>
    </header>
      <form action="" class="login">
          <input id="email" class="datos" type="email" placeholder="Ingresa tu correo" required>
          <input id="password" class="datos" type="password"  placeholder="***************" required>
          <button type="button" class="btn"  id="btn-sign-in">Ingresar</button>
      </form>
      <div>
          <div class="iconos">
                <a> Ingresa con <br><img button="icon-network" id="icon-google" src="LOGOGLE.png" height="20px" width="20px"></a>

          </div>
          <a href="#/olvido" class="recuperar">Olvide mi contraseña</a>
          <br><br>
         <a href="#/registro" id="register-link" class="aqui"> Crea tu cuenta </a>
      </div>

    </section>
    </div>
    `;
    //funciones para que el usuario pueda ingresar a la pagina
    const email = divElement.querySelector('#email');
    const password = divElement.querySelector('#password');
    const btnSignIn = divElement.querySelector('#btn-sign-in');
    //evento al boton ingresar
    btnSignIn.addEventListener('click', () => {
        ingresarClick(email.value, password.value);
    });
    //evento click al icono de google
    const iconGoogle = divElement.querySelector("#icon-google");
    iconGoogle.addEventListener("click", ingresarGoogleClick);


    return divElement;
};