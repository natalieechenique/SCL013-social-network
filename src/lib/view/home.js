export const mostrarHome = () => {
    window.location.hash = "#/home";
    let contenido = `
    <div class='containerAll'>
    <section class="container2">
    
  <!-- Menú-->
  
    <header>
        <div class="header">
        <img src="logotitulo.png" width="100" height="50">
        </div>
        <div class="cerrarsesion"><p id="salir">Cerrar sesión</p></div>
        </header>  
      
        <nav class="menu">
            <ul>
                <li><a href="">PUBLICACIONES</a></li>
                <li><a href="">VIDEOS</a></li>
                <li><a href="">MEMES</a></li>
                <li><a href="">FAN ART</a></li>                  
            </ul>
        </nav>

        <!--Escribe aquí tu publicación-->

               <div class='divPrincipalPublicar'>
                   <textarea id='post' class='inputPost' type='text'></textarea>
                   <div class="btnpost-contenedor">
                   <img id='like' src='star.png' class='btn-like' width="20" height="20">
                   <button class="btnpost" id="comentar">Comentar</button>
                   <button class="btnpost" id="compartir">Compartir</button>
                   </div>
                </div>
       
     </section>

     </div>
        `;

    return contenido;
    
  };

  

