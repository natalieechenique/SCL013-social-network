
export default () => {
  window.location.hash = "#/memes";
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "containerAll");
  divElement.innerHTML = `

    <div class="containerAll">
        <section class="container2">
        <header class="header2">
<!---logo -->
<div class="logocont2">
<img src="logotitulo.png" width="100" height="50">
</div>   
    </header>
        <!---menu pagina-->
            <nav class="menu">
              <div class="ul">
                   <li><a href="#/user-profile"><i class="fas fa-newspaper"></i><span>Publicaciones</span></a>
                   <li><a href="#/videos"><i class="fas fa-video"></i> <span>Videos</span></a></li>
                   <li><a href="#/memes"><i class="fas fa-grin-squint"></i> <span>Memes</span></a></li>
                   <li><a href="#/fanArt"><i class="fas fa-paint-brush"></i> <span>Fan Art</span></a></li>                
            </div>
            </nav>
            
                <!--Pega aquí tu meme-->
                    <main class='divPost'>
                        <div id="Layer1" class="scroll" style="width:300px; height:200px; overflow: scroll;">
                       
                        <img id='like' src='MEME1.jpg' width="250" height="250"> <vr>
                        <img id='like' src='MEME2.jpg' width="250" height="250"> <vr>
                        <img id='like' src='MEME3.jpg' width="250" height="250"> <vr>
                        <img id='like' src='MEME4.jpg' width="250" height="250"> <vr>
                    </div>
              </div>
             
              </section>
             </main>
              </div>

  `;

  return divElement;
};

