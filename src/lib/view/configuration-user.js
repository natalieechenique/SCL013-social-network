
// creamos div para poder editar el perfil del usuario
export default (user) => {
  const elemento = document.createElement('div');
  elemento.setAttribute('class', 'container');
  elemento.innerHTML = `
  <header class='header2'>
  <div class='logocont2'>
    <img src='logotitulo.png' width='100' height='50'>
</div>
  <ul class='menu'>
      <li class='small'><input type='checkbox' name='list' id='nivel1-1'><label for='nivel1-1'>${user.name}</label>
          <ul class='interior'>
              <li><a href='#/editarPerfil'>Editar Perfil</a></li>
              <li><a id='sign-out-list' class='sign-out-list'>Cerrar sesión</a></li>
          </ul>
      </li>
      <li id='sign-out' class='small sign-out'><a>Cerrar sesión</a></li>
  </ul>
</header>
<div class='sub-container'>
<aside class='user-name'>
</aside>
<main class='post-zone'>
</main>
</div> `;

  // agregamos el evento al boton cerrar sesion dentro de el div de perfil de usuario
  const signOutOption = divElement.querySelector('#sign-out');
  signOutOption.addEventListener('click', cerrarSesionUsuario);

  return elemento;
};
