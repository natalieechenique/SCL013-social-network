import { cerrarSesionUsuario, editarPerfil, } from "../control.js";
//creamos div donde el usuario pueda editar su perfil 
export default (user) => {
    console.log(user)
    const divElement = document.createElement("div");
    divElement.innerHTML = ` 
    <header class="header">
    <img src="logotitulo.png" width="100" height="50">
    <div class="header height-auto">

   
    <div class="sub-container edit-body">
    <aside class="ancho aside-edit">
        </div>       
    </aside>
    <main class="edit-right">
    <div class="formulario1 " id="edit-form">
    <div class="element-photo2"><img id="user-image" class="image-photo-edit " src="${user.photo}" alt="default photo">
    <i class="fas fa-camera-retro"></i></div>
    <div id="full-name" class="input2 width-all redondear">${user.name}</div>
    <div id="user-age" class="input2  width-all redondear" contentEditable=false data-text=>${user.age}</div>
    <div id="user-sex" class="input2 width-all redondear" contentEditable=false data-text="Sexo">${user.sex}</div>
    <div id="user-birth-country"  class="input2 width-all redondear" contentEditable=false data-text="Pais">${user.country}</div>

    <button type="button" class="button-acceder redondear boton duo editar" id="btn-edit-profile">Editar Datos</button>
    <button type="button" class="button-acceder redondear boton duo guardar" id="btn-save-profile">Guardar Datos</button>
    </div>
    </main>
    </div>

    <ul class="menu2">
    
        <li><a href="#/user-profile">Volver a Inicio</a></li>
        </ul>
        <button type="button" id="sign-out" class="small sign-out"><a>Cerrar sesión</a></button>
    </ul>
    </div>
    </section> 
    </div> 

`;
//aca el usuario podra ingresar sus datos ---falta  mostrar en pantalla verifivar---
    if (user.age === undefined || user.sex === undefined || user.country === undefined) {

        divElement.querySelector('#user-age').textContent = '';
        divElement.querySelector('#user-sex').textContent = '';
        divElement.querySelector('#user-birth-country').textContent = '';

    }
    //funcion de  boton cerrar sesion
    const signOutOption = divElement.querySelector("#sign-out");
    signOutOption.addEventListener("click", cerrarSesionUsuario);
    //este doton guarda la informacion cambiada del perfil
    const btnSave = divElement.querySelector('#btn-save-profile');
    //boton para editar el perfil
    const editProfileButton = divElement.querySelector('#btn-edit-profile');
    //datos que podria agregar pero no no se ven los botones en el html
    const fullName = divElement.querySelector('#full-name');
    const userAge = divElement.querySelector('#user-age');
    const userSex = divElement.querySelector('#user-sex');
    const userBirthCountry = divElement.querySelector('#user-birth-country');
    //evento a boton editar perfil cuando los siguientes datos esten llenos
    editProfileButton.addEventListener('click', () => {
        fullName.setAttribute('contenteditable', true);
        userAge.setAttribute('contenteditable', true);
        userSex.setAttribute('contenteditable', true);
        userBirthCountry.setAttribute('contenteditable', true);

    });
    //evento para guardar los datos ingresados
    btnSave.addEventListener('click', () => {
        fullName.setAttribute('contenteditable', false);
        userAge.setAttribute('contenteditable', false);
        userSex.setAttribute('contenteditable', false);
        userBirthCountry.setAttribute('contenteditable', false);
        const newFullName = fullName.textContent;
        const newAge = userAge.textContent;
        const newSex = userSex.textContent;
        const newBirthCountry = userBirthCountry.textContent;

        console.log(newFullName);
        console.log(newAge);
        console.log(newSex);
        console.log(newBirthCountry);
        editarPerfil(newFullName, newAge, newSex, newBirthCountry, user.userId);
    });


    return divElement;
};