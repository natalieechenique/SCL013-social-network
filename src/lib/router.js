
import { components } from "./index.js";
import {
  obtenerDatosUsuario,
  getUserActive,
  getPostsInRealtime /* getUsersAfterLikes */,
} from "./control.js";

//rutas para ingresar a diferente paginas
const changeview = (route, userActivo) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  switch (route) {
    case "#/":
      root.appendChild(components.login()); //pagina login
      break;
    case "#/registro":
      root.appendChild(components.registro()); //pagina para registrar
      break;

    case "#/user-profile": // perfil del usuario
      const printUserInfo = (user) => {
        if (user) {
          const uid = user.uid;
          obtenerDatosUsuario(uid)
            .then((dataUser) => {
              console.log(dataUser);
              getPostsInRealtime((arrPosts) => {
                root.innerHTML = "";
                root.appendChild(components.profile(dataUser, arrPosts));
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("no hay usuario");
        }
      };
      getUserActive(printUserInfo);

      break;
    case "#/edit-profile": //pagina editar el perfil
      {
        const printUserInfo = (user) => {
          if (user) {
            const uid = user.uid;
            obtenerDatosUsuario(uid).then((dataUser) => {
              root.appendChild(components.editarPerfil(dataUser));
            });
          } else {
            console.log("no hay usuario");
          }
        };
        getUserActive(printUserInfo);
      }
      break;

    case "#/videos": //pagina de videos
      root.appendChild(components.videos());
      break;

    case "#/memes": //pagina de memes
      root.appendChild(components.memes());
      break;

    case "#/fanArt": //pagina de fans art
      root.appendChild(components.fanArt());
      break;
    default:
      root.appendChild(components.error());
  }
};

export { changeview };
