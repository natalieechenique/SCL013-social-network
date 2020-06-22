export default () => {
  window.location.hash = '#/fanArt';
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'containerAll');
  divElement.innerHTML = `
      <section class='container2'>
      <header class='header'>
      <!-- logo -->
      <div class='logocont3'>
      <img src='logotitulo.png' width='100' height='50'>
      </div>   
      </header>
          <!-- menu pagina -->
  <nav class='menu'>
    <div class='ul'>
         <li><a href='#/user-profile'><i class='fas fa-newspaper'></i><span>Publicaciones</span></a>
         <li><a href='#/videos'><i class='fas fa-video'></i> <span>Videos</span></a></li>
         <li><a href='#/memes'<i class='fas fa-grin-squint'></i> <span>Memes</span></a></li>
         <li><a href='#/fanArt'><i class='fas fa-paint-brush'></i> <span>Fan Art</span></a></li>                
         </div>
  </nav>
  <div id='Layer1' class='scroll'>
              <!--Pega aquí tu FanArt-->
              <div class='divImagenes'>
              <img id='arte1' class='fanart' src='ARTE1.jpg' width='300' height='300'> <vr>
              <img id='arte2' class='fanart' src='ARTE2.jpg' width='300' height='300'> <vr>
              <img id='arte3' class='fanart' src='ARTE3.jpg' width='300' height='300'> <vr>
              <img id='arte4' class='fanart' src='ARTE4.jpg' width='300' height='300'> <vr>
               </div>
            </div>
            </section>   
            </div>
`;

  return divElement;
};
