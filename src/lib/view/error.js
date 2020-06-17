
//funcion creada para errores
export default () => {
  const divElemt = document.createElement("div");
  divElemt.innerHTML = `
             <!--<h2>404</h2>
  
              <h1>Página no encontrada</h1>
              <img src="sad.png" width="100" height="100" class="sad">--!>
  
              <p>Este sitio no esta disponible querido Padawan, verificalo con tu maestro Jedi</p>
              <img src="sad.png" width="200" height="200" class="sad">
  
            `;

  divElemt.setAttribute("id", "message");
  return divElemt;
};
