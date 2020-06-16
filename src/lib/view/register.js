//importamos la funcion para darle el evento al boton registar
import { registrarClick } from "../control.js"; 
//creamos el div que contiene la pagina de registro
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


    <form action="" class="login" id="register-form">
    <input type="text" id="name" class="input" placeholder="Nombre y Apellidos">                 
    <input id="email2" class="input" type="email" placeholder="Ingrese su correo">
    <input id="password2" class="input" type="password" placeholder="Ingresa tu contraseña"><br>
    <button type="button" class="button-acceder boton" id="btn-sign-up">Registrar</button>
     </form>
      <div>
          <p class="parrafo">Si ya tienes una cuenta <a href="">Inicia sesión</a></p>
      </div>
    
    <section>
    <div>
    
    `;

    //creamos las variables para guardar los datos dentro del input-text
    const registerClick = divElement.querySelector("#btn-sign-up");
    const email2 = divElement.querySelector('#email2');
    const password2 = divElement.querySelector('#password2');
    const userName = divElement.querySelector('#name');
    // le damos el evento click al boton registrar
    registerClick.addEventListener("click", () => {
        registrarClick(email2.value, password2.value, userName.value);


    });
    return divElement;
};
