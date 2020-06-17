const online = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      if (user.emailVerified === true) {
        window.location.hash = "#/user-profile";
      }
    }
  });
};
// Registro con solo correo y contraseña
const signUp = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      verificarEmail(); //agregar nombre a user
      alert("Verifica tu email y podras acceder");
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message);
    });
};

// Inicion de sesión  con solo email y contraseña
const signIn = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          if (user.emailVerified === true) {
            window.location.hash = "#/user-profile";
          } else {
            alert("Se necesita verificar email para ingresar");
            signOut();
          }
        }
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message);
      // ...
    });
//verificar email
const verificarEmail = () => {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
};

// Inicio de sesión con g-mail y contraseña de g-mail
const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

// Inicio de sesión con  cuenta de facebook y contraseña de facebook
const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(facebookProvider);
};

// Cerrar seión
const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("salir");
      window.location.hash = "#/";
    })
    .catch(function (error) {
      console.log(error);
    });
}; //

const currentUser = () => {
  return firebase.auth().currentUser;
}; //

const promiseOfSetFirebase = (nameCollection, docId, obj) => {
  return firebase.firestore().collection(nameCollection).doc(docId).set(obj);
};

const promiseOfgetFirebase = (nameCollection, docId) => {
  return firebase.firestore().collection(nameCollection).doc(docId).get();
}; //
const promiseOfdeleteFirebase = (nameCollection, docId) => {
  return firebase.firestore().collection(nameCollection).doc(docId).delete();
}; //
const promiseOfUpdateFirebase = (nameCollection, docId, obj) => {
  return firebase.firestore().collection(nameCollection).doc(docId).update(obj);
}; //
const promiseOnSnapshotFirebase = (nameCollection, callback) => {
  return firebase
    .firestore()
    .collection(nameCollection)
    .orderBy("hours")
    .onSnapshot(callback);
}; //
const firebaseAuthState = (callback) => {
  return firebase.auth().onAuthStateChanged(callback);
}; //
const promiseOfAddFirebase = (nameCollection, obj) => {
  return firebase.firestore().collection(nameCollection).add(obj);
}; //

const getUrlImageFromStorage = (selectedFile, /* progress, */ callback) => {
  const storageService = firebase
    .storage()
    .ref()
    .child(`images/${selectedFile.name}`)
    .put(selectedFile);
  storageService.on(
    "state_changed",
    () => {
      // Observe state change events such as progress, pause, and resume
      /*         var percentage = (snapshot.bytesTransferred /
                  snapshot.totalBytes) * 100;
              progress.value = percentage; */
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    },
    () => {
      // Do something once upload is complete
      storageService.snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
        callback(url);
      });
    }
  );
};

export {
  signUp,
  signIn,
  signInWithGoogle,
  signInWithFacebook,
  signOut,
  currentUser,
  promiseOfSetFirebase,
  promiseOfgetFirebase,
  promiseOfdeleteFirebase,
  promiseOfUpdateFirebase,
  promiseOnSnapshotFirebase,
  firebaseAuthState,
  promiseOfAddFirebase,
  getUrlImageFromStorage,
  online,
};
