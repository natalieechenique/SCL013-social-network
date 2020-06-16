export default () => {
    window.location.hash = "#/videos";
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "containerAll");
    divElement.innerHTML = `
    <div class="containerAll">
     <section class="container2">
        <header class="header2">
            <!---logo -->
            <div class="logocont">
            <img src="logotitulo.png" width="100" height="50">
            </div>   

            </header>
                <!---menu pagina-->
                    <input type="checkbox" id="btn-menu">
        </nav>
        <nav class="menu">
          <ul>
               <li><a href="#/user-profile"><i class="fas fa-newspaper"></i><span>Publicaciones</span></a>
               <li><a href="#/videos"><i class="fas fa-video"></i> <span>Videos</span></a></li>
               <li><a href="#/memes"><i class="fas fa-grin-squint"></i> <span>Memes</span></a></li>
               <li><a href="#/fanArt"><i class="fas fa-paint-brush"></i> <span>Fan Art</span></a></li>                
               </ul>
        </nav>

                <!--Sube aqui tu video-->
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OQO4YjxjMaY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
              </div>
            
              </section>
            
              </div>
  `;
  return divElement;
  };
  