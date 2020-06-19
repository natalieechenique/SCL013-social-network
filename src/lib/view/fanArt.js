export default () => {
  window.location.hash = '#/fanArt';
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'containerAll');
  divElement.innerHTML = `
      <section class='container2'>
      <header class='header2'>
      <!-- logo -->
      <div class='logocont2'>
      <img src='logotitulo.png' width='100' height='50'>
      </div>   
      </header>
          <!-- menu pagina -->
  <nav class='menu'>
    <div class='ul'>
         <li><a href='#/user-profile'><i class='fas fa-newspaper'></i><span>Publicaciones</span></a>
         <li><a href='#/videos'<i class='fas fa-grin-squint'></i> <span>Memes</span></a></li>
         <li><a href='#/fanArt'><i class='fas fa-paint-brush'></i> <span>Fan Art</span></a></li>                
         </div>
  </nav>
  <div id='Layer1' class='scroll' style='width:100%; height:250px; overflow: scroll;'>
              <!--Pega aquí tu FanArt-->
              <div class='divPost'>
              <div id='Layer1' class='scroll' style='width:100%; height:270px; overflow: scroll;'>
              <img id='like' src='ARTE1.jpg' width='300' height='300'> <vr>
              <img id='like' src='ARTE2.jpg' width='300' height='300'> <vr>
              <img id='like' src='ARTE3.jpg' width='300' height='300'> <vr>
               </div>
            </div>
          
            </section>
          
            </div>
`;

  return divElement;
};
