// Este es el punto de entrada de tu aplicacion

/*import { myFunction } from './lib/index.js';*/
import{changeRoute} from './lib/router.js';
import {mostrarLogin} from './lib/view/ingresar.js'

/*myFunction*/


//mostrar login función
const root = document.getElementById('root');
const limpiar = root.innerHTML = "";
window.location.hash = '#/';//window = nuestra ventana, location hash, es el valor para la ubicacion de la ventana

//funcion que nos permite mostrar el inicio 
const init = () => {
    root.innerHTML = mostrarLogin();
    let inicio = () => {//la funcion inicio le dara funcionalidad a todo lo que este en nuestra pagina de inicio
      document.getElementById("ingresar").addEventListener('click', () => {
      let email = document.getElementById("email2").value;
      let password = document.getElementById("password2").value;
      //codigo para iniciar sesion en firebase 
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(){ //si las cosas salen bien esto me redireccionar al home
          firebase.auth().onAuthStateChanged(function(user) {
              if(user){
                if(user.emailVerified === true){ //si verifica su mail podra ingresar home
                  window.location.hash = '#/home';
                }else{
                  alert("Necesitas verificar tu email para ingresar querido Padawan");//si no mostrara un alert y no mostrara el home
                  logOut();
                }
              }                                  
            })
      })
      .catch(function(error) {// en caso contrario muestra un error (catch atrapa el error)
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(error.message);
          // ...
      });
  });
}


inicio();//llamo a la funcion inicio
    window.addEventListener('hashchange', () => {
      changeRoute(window.location.hash); //a changeRoute le doy los valores de hash y este me muestra el contenido de la ventanaa
      switch (window.location.hash) {//este switch es como interactuan los usuarios con la ventana    
        //esto es la primera pagina "login"
        case '#/':           
            inicio(); break;
            //esto nos permite registrar al usuario
        case '#/registrar':   
        document.getElementById("registrarse").addEventListener("click",() => {
            let email = document.getElementById("email").value;
            let password = document.getElementById("contraseña").value;
            //este es el codigo que crea usuarios en firebase
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user){//si las cosas salen bien se ejecuta el home
                verificar(); //agregar nombre a user
                alert("Verifica tu email Padawan o no podrás entrar");
                logOut();
              })
              .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.message);
              });
        });
              break;
              //esto nos permite ingresar al home
        case '#/home':
            document.getElementById("salir").addEventListener('click',() => {
                logOut();
            })            
             break;  


        default:
            root.innerHTML = "<h1> UP'S ESTA PAGINA ESTA EN REPARACIÓN </h1>"; break;
    }
    });

  }//aqui termina la funcion init

  window.addEventListener('load', init);// llamo a la funcion init que creamos anteriormente

//observador (nos muestra si hay un usuario activo en el momento)
firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      window.location.hash = '#/home';
    }
  }) 

//funcion verificar envia el correo
  const verificar = () => {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });


}
//funcion para cerrar sesion
  const logOut = () => {
    firebase.auth().signOut()
    .then(function (){
        console.log("salir");
        window.location.hash = '#/';
    })
    .catch(function(error){
        console.log(error);
    });
  }


