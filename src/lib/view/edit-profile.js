import { cerrarSesionUsuario, editarPerfil } from '../control.js';
// creamos div donde el usuario pueda editar su perfil
export default (user) => {
  console.log(user);
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'containerAll');
  divElement.innerHTML = ` 
    <section class='container2'>
    <header class='header3'>
    <!---logo -->
    <span class='logocont2'>
    <img src='logotitulo.png' class='logotitulo2'>
  </span>
    <div class='element-photo2'><img id='user-image' class='image-photo-edit' src='${user.photo}' alt='default photo'>
   <br>
    <i class='fas fa-camera-retro'></i></div>
    <div id='full-name' class='input2'>${user.name} <i class='fab fa-jedi-order' id='btn-menu'></i>
    </header>
    </div>
    <br>
    <main class='edit'>
    <div id='user-age' class='input2' contentEditable=false data-text=>${user.age}</main>
    <div id='user-sex' class='input2' contentEditable=false data-text='Sexo'>${user.sex}</div>
    <div id='user-birth-country' class='input2' contentEditable='false' data-text='Pais'>${user.country}</div>
    </div>
    <br>
    <div class='edit-options'>
    <button type='button' class='button-acceder' id='btn-edit-profile'>Editar Datos</button>
    <button type='button' class='button-acceder' id='btn-save-profile'>Guardar Datos</button>
    </div>
    <br>
    <div class='menu2'>
   <a href='#/user-profile'>Volver a Inicio</a>
        </div>
        <br>
        <span id='sign-out' class='small sign-out'><a><img class='icons cerrar' src='cerrar.png' width='20' height='20' >Cerrar sesión</a></span>
    </span>
        </div>
    </div>
    </main>
    </section> 
    </div> 
`;

  // aca el usuario podra ingresar sus datos ---falta  mostrar en pantalla verificar
  if (
  // eslint-disable-next-line operator-linebreak
    user.age === undefined ||
    // eslint-disable-next-line operator-linebreak
    user.sex === undefined ||
    user.country === undefined
  ) {
    divElement.querySelector('#user-age').textContent = '';
    divElement.querySelector('#user-sex').textContent = '';
    divElement.querySelector('#user-birth-country').textContent = '';
  }

  // funcion de  boton cerrar sesion
  const signOutOption = divElement.querySelector('#sign-out');
  signOutOption.addEventListener('click', cerrarSesionUsuario);
  // este doton guarda la informacion cambiada del perfil
  const btnSave = divElement.querySelector('#btn-save-profile');
  // boton para editar el perfil
  const editProfileButton = divElement.querySelector('#btn-edit-profile');
  // datos que podria agregar pero no no se ven los botones en el html
  const fullName = divElement.querySelector('#full-name');
  const userAge = divElement.querySelector('#user-age');
  const userSex = divElement.querySelector('#user-sex');
  const userBirthCountry = divElement.querySelector('#user-birth-country');

  // evento a boton editar perfil cuando los siguientes datos esten llenos
  editProfileButton.addEventListener('click', () => {
    fullName.setAttribute('contenteditable', true);
    userAge.setAttribute('contenteditable', true);
    userSex.setAttribute('contenteditable', true);
    userBirthCountry.setAttribute('contenteditable', true);
  });

  // evento para guardar los datos ingresados
  btnSave.addEventListener('click', () => {
    fullName.setAttribute('contenteditable', false);
    userAge.setAttribute('contenteditable', false);
    userSex.setAttribute('contenteditable', false);
    userBirthCountry.setAttribute('contenteditable', false);
    const newFullName = fullName.textContent;
    const newAge = userAge.textContent;
    const newSex = userSex.textContent;
    const newBirthCountry = userBirthCountry.textContent;
    // console.log(newFullName);
    // console.log(newAge);
    // console.log(newSex);
    // console.log(newBirthCountry);
    editarPerfil(newFullName, newAge, newSex, newBirthCountry, user.userId);
  });

  return divElement;
};
