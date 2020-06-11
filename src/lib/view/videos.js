export const mostrarVideos =() => {
    window.location.hash = "#/videos";
    let contenido = `

    <div class="containerAll">
        <section class="container2">
  
            <div class='header'>
            <img src="logotitulo.png" width="200" height="100">
                    <h2 class='subtitle'>La red para seguidores de Star Wars</h2>
                </div>
        
                <!--Sube aqui tu video-->
                <div class='contenedor'>
                    <div class='divPrincipalImg'>
                        <img src='img/iconopost.png' class='icono-post'>
                        <div class='divPrincipalPublicar'>
                            <textarea id='post' class='inputPost' type='text'></textarea>
                        </div>
                        <img id='publicar' src='./img/publicar.png' class='btn-publicar'>
                    </div>
              </div>
            
              </section>
            
              </div>
  `;
  return contenido;
  };
  