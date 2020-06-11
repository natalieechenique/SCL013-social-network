
export const mostrarLogin = () => { //exportamos la funcion que nos mostrars el html en la pagina principal para ello cremoa la variable contenido
    let contenido = `

    <div class='containerAll'>
    <section class="container2">
    
    <div class='header'>
    <img src="logotitulo.png" width="200" height="100">
            <h2 class='subtitle'>La red para seguidores de Star Wars</h2>
        </div>

        <div class="login">
            <h1>Inicia sesión</h1>
            <input class="datos" type="email" id="email2" placeholder="Ingresa tu correo" required>
            <input class="datos" type="password" id="password2" placeholder="***************" required>
            <button class="btn" id="ingresar">Ingresar</button>
            <a href="#/google"><button class="btn2" id="gmail"><i class="google fab fa-google"></i> <img id="g" class="gogle" src="LOGOGLE.png" height="13px" width="13px">  Ingresar con Google</button></a>
            <br>  <br>
            <a href="#/olvido" class="recuperar">Olvide mi contraseña</a>
            <a href="#/registrar" class="aqui" id="crearCuenta">Crear una cuenta</a>
        </div>
        
    </section>

    </div>
  `;

  return contenido;
};