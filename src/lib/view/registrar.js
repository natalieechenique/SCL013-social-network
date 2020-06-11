export const mostrarRegistro =() => {
    let contenido = `

    <div class="containerAll">
        <section class="container2">
  
            <div class='header'>
            <img src="logotitulo.png" width="200" height="100">
                    <h2 class='subtitle'>La red para seguidores de Star Wars</h2>
                </div>
        
            <div class="login">            
                <h1>Crea tu cuenta</h1>
                <input type="text" id="nombre" placeholder="Nombre*" class="datos" requiere>
                <input type="email" id="email" placeholder="Correo electrónico*" class="datos" requiere>
                <input type="password" id="contraseña" placeholder="**************" class="datos" requiere>
                <p>Contraseña debe tener mínimo 8 caracteres.</p>
                <button id="registrarse" class="btn">Registrarse</button>
                <a href="#/"><button id="atras" class="btn">Atrás</button></a>
            </div>

            </section>
  
            </div>
  `;
  return contenido;
  };
  