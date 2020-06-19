export default () => {
  window.location.hash = '#/videos';
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'containerAll');
  divElement.innerHTML = `
     <section class='container2'>
        <header class='header2'>
            <!---logo -->
            <div class='logocont2'>
            <img src='logotitulo.png' width='100' height='50'>
            </div>   
            </header>
        
                <!---menu pagina-->
        <nav class='menu'>
          <div class='ul'>
               <li><a href='#/user-profile'><i class='fas fa-newspaper'></i><span>Publicaciones</span></a>
               <li><a href='#/videos'><i class='fas fa-video'></i> <span>Videos</span></a></li>
               <li><a href='#/memes'><i class='fas fa-grin-squint'></i> <span>Memes</span></a></li>
               <li><a href='#/fanArt'><i class='fas fa-paint-brush'></i> <span>Fan Art</span></a></li>                
               </div>
        </nav>
        <div id='Layer1' class='scroll' style='width:100%; height:250px; overflow: scroll;'>
                <!--Sube aqui tu video-->
                <main class='divPost'>
                
                <iframe width='300' height='200' src='https://www.youtube.com/embed/OQO4YjxjMaY' frameborder='4' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
              </div>

              </section>
              </main>

              </div>
  `;

  return divElement;
};
