import {
  cerrarSesionUsuario,
  obtenerDatosUsuario,
  eliminarPostAlClick,
  editarPostEnFirestore,
  manejarInfoEnviada,
  postLike
} from "../control.js";

//funcion para hacer una publicación
const renderOnePost = (post, user, current) => {
  let idPost = post.id;
  let label = document.createElement("div");
  label.innerHTML = `
    <main class="divPost height-auto">
  <div id="comment-author" class='encabezado'>

  <p>Publicado por ${user.name}</p>
  <p>${post.hours}, ${post.today}</p> 
</div>

  <div class="text-comment height-auto" id="content-comment-div" data-id-post="${post.id}" >${post.content}
  <img class="img-post" src="${post.photoPost}" id="img-post" >
  </div>
  <img src="likestar.png" " width="25" height="25" class="icons like" id="btn-likes-${post.id}" alt="">
  <span id="counter-likes" >${post.likes.length}</span>
  <img src="editar.png" " width="20" height="20" class="icons edit" alt="icon edit" id="btn-edit" data-uid-post="${post.userId}" data-id-post="${post.id}">
  <button id="btn-save-after-edit" class="boton share">Guardar</button>
  <img src="eliminar.png" " width="20" height="20" id="btn-delete" class="delete" data-uid-post="${post.userId}" data-id-post="${post.id}">

  </main>
  `;

  label.setAttribute("class", "box2");

  if (post.photoPost === "" || post.photoPost === null) {
    label.querySelector("#img-post").style.display = "none";
  }

  //funcion para crear evento al boton que borrar post (btn-delete)
  const deleteButton = label.querySelector("#btn-delete");
  deleteButton.addEventListener("click", (e) => {
    console.log(e.target);
    const postId = e.target.dataset.idPost;
    const userIdOfPost = e.target.dataset.uidPost;
    eliminarPostAlClick(postId, userIdOfPost);
  });

  //funcion para poder editar el post - agregamos evento al boton editar
  const divCommentContent = label.querySelector("#content-comment-div");
  const editButton = label.querySelector("#btn-edit");
  editButton.addEventListener("click", (e) => {
    const idPostAttributeOfDivContent = divCommentContent.dataset.idPost;
    const idPostAttributeOfEditButton = e.target.dataset.idPost;
    const userIdAttributeOfEditButton = e.target.dataset.uidPost;
    if (idPostAttributeOfDivContent === idPostAttributeOfEditButton) {
      //si el id del post del div content es  igual al id del post que quiere modificar
      if (current.userId === userIdAttributeOfEditButton) {
        // si el id del usuario actual es igual al id del usuario que publico el post
        divCommentContent.setAttribute("contenteditable", true);
        console.log("You can edit now");
        const saveBtn = label.querySelector("#btn-save-after-edit");
        saveBtn.addEventListener("click", () => {
          divCommentContent.setAttribute("contenteditable", false);
          const newContent = divCommentContent.textContent;
          editarPostEnFirestore(
            idPostAttributeOfEditButton,
            userIdAttributeOfEditButton,
            newContent
          );
        });
      } else {
        alert("Solo puedes editar tu comentario Padawan");
        divCommentContent.setAttribute("contenteditable", false);
      }
    } else {
      divCommentContent.setAttribute("contenteditable", false);
    }
  });

  const imgLikes = label.querySelector(`#btn-likes-${post.id}`);
  imgLikes.addEventListener('click', (e) => {
    postLike(post.id);
  })


  return label;
};

//creamos la pagina del perfil del usuario
export default (user, posts) => {
  //variable para mostrar la foto del usuario segun url
  let photoUrl = "";
  try {
    new URL(user.photo);
    photoUrl = user.photo;
  } catch {
    photoUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjBhr15zxJ2Udj1pZ6S3ktJctBu51YukJOoetZc3VrKjxquwN";
  }

  //creamos la variable div element para poder mostar el home principal
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "containerAll");
  divElement.innerHTML = `
   <section class="container2">
   <header class="header2">

   <!---logo -->
   <span class="logocont2">
   <img src="logotitulo.png" width="70" height="35">
   </span>   

   <!---muestra foto usuario y nombre by google-->
   <div class="box1">
   <div class="user-name">
            <div class="element"><img class="image-photo" id="image-user" src="${photoUrl}" width="50" height="50" alt="default photo"> </div>
                <div class="nombre"><h3 class="namebygoogle" id="name-user">${user.name}</h3><p>${user.email}</p>
                </div>
   
    <!---menu usuario-->
    <div class="menu2">
    <a href="#/edit-profile" width:10 height:10 class="fas fa-user-edit"></a>
    <br>
    <span id="sign-out" class="small sign-out"><a><img class="icons cerrar" src="cerrar.png" " width="15" height="15" >Cerrar sesión</a></span>
            </div>
        </span>
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
       

        <!---publicaciones-->
        <main class='divPost'>
    
        <div id="Layer1" class="scroll" style="width:330px; height:250px; overflow: scroll;">

        <div id="add-comment-form" class="inputPost">
            <textarea id="input-comment" class="text-write height-auto"
            name="comment" type="text" style= 'margin:0px; width:100%; height=100%'; placeholder="Escribe aquí"></textarea>

            <input type="file" id="image-file" class="inputfile"><i class="fas fa-folder-open"></i>
            <br>
            <input type="checkbox" id="private" value="true"><label for="private" class="privatePost">Mostrar solo para mi</label>

            <button id="btn-share" class="share boton">Enviar</button>  

           <div class="filter height-auto" id="valores">
      <span>Ver publicaciones</span>
     <input type="radio" class='input-filter' name="filterPost" id="allPost" checked value="publicPost"><label for="allPost">Todas</label>
     <input type="radio" class='input-filter' name="filterPost" id="privatePost" value="myPosts"><label for="privatePost">Solo mías</label>
     </div>
        <div id="comment-list"></div>
    
   </section>
  </div>
  </main>
  
  </div>
`;

  //varible para subir imagenes
  let selectedFile;
  const inputFile = divElement.querySelector("#image-file");
  inputFile.addEventListener("change", (e) => {
    if (inputFile.value !== "") {
      console.log("file selected!!");
      selectedFile = e.target.files[0];
    }
  });

  //le agregamos el evento al boton compartir
  const shareBtn = divElement.querySelector("#btn-share");
  shareBtn.addEventListener("click", () => {
    const inputComment = divElement.querySelector("#input-comment").value;
    const inputStatus = divElement.querySelector("#private").checked;
    let status;
    if (inputStatus) {
      status = true;
    } else {
      status = false;
    }
    return manejarInfoEnviada(
      inputComment,
      user.userId,
      status,
      /* uploaderProgress, */ selectedFile
    );
  });

  //Agregamos evento al boton cerrar session
  const signOutOption = divElement.querySelector("#sign-out");
  signOutOption.addEventListener("click", cerrarSesionUsuario);
  //esta funcion hace que nuestras publicaciones se vean en pantalla
  const divCommentList = divElement.querySelector("#comment-list");
  //con esta funcion solo podre ver mis post
  const validar = () => {
    const e = divElement.querySelector("#privatePost");
    try {
      if (e.checked == true) {
        return "myPosts";
      } else if (e.checked == false) {
        return "publicPost";
      }
    } catch (err) {
      return "publicPost";
    }
  };

  //con esta funcion podre ver todos los post
  const estadosDePosts = (posts, user) => {
    switch (validar()) {
      case "publicPost":
        posts.forEach((onePost) => {
          if (onePost.state === false) {
            obtenerDatosUsuario(onePost.userId).then((userdata) => {
              const divPost = renderOnePost(onePost, userdata, user);
              divCommentList.appendChild(divPost);
            });
          }
        });
        break;
      case "myPosts":
        posts.forEach((onePost) => {
          obtenerDatosUsuario(onePost.userId).then((userdata) => {
            if (userdata.userId === user.userId) {
              const divPost = renderOnePost(onePost, userdata, user);
              divCommentList.appendChild(divPost);
            }
          });
        });
        break;
    }
  };

  //filtro para los valores en donde puedo ver solo mis publicaciones o la de todos
  const viewComments = divElement.querySelector("#valores");
  viewComments.addEventListener("click", () => {
    console.log(validar());
    divCommentList.innerHTML = "";
    estadosDePosts(posts, user);
  });  
  
  estadosDePosts(posts, user);
  return divElement;
};
