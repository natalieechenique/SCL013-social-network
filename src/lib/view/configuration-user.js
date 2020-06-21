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
          <ul class='interior'>
              <li><a href='#/editarPerfil'>Editar Perfil</a></li>
              <li><a id='sign-out-list' class='sign-out-list'>Cerrar sesión</a></li>
          </ul>
      </li>
      <li id='sign-out' class='small sign-out'><a>Cerrar sesión</a></li>
  </ul>
</header>
</div> `;

  // agregamos el evento al boton cerrar sesion dentro de el div de perfil de usuario
  // eslint-disable-next-line no-undef
  const signOutOption = divElement.querySelector('#sign-out');
  signOutOption.addEventListener('click', cerrarSesionUsuario);
  return elemento;
};
