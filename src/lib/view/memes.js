export default () => {
    window.location.hash = "#/memes";
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
  
                <!--Pega aquí tu meme-->
                <div class='contenedor'>
                    <div class='divPrincipalImg'>
                        <div class='divPrincipalPublicar'>
                        
                        </div>
                        <img id='like' src='MEME1.jpg' width="300" height="300"> <vr>
                        <img id='like' src='MEME2.jpg' width="300" height="300"> <vr>
                        <img id='like' src='MEME3.jpg' width="300" height="300"> <vr>
                        
                        
                    </div>
              </div>
            
              </section>
            
              </div>
  `;

  return divElement;
  
  };