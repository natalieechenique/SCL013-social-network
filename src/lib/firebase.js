/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const online = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified === true) {
        window.location.hash = '#/user-profile';
      }
    }
  });
};
// Registro con solo correo y contraseña
const signUp = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  // eslint-disable-next-line no-unused-vars
  .then((user) => {
    // eslint-disable-next-line no-use-before-define
    verificarEmail(); // agregar nombre a user
    // eslint-disable-next-line no-alert
    alert('Verifica tu email y podras acceder');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
  });

// Inicio de sesión  con solo email y contraseña
const signIn = (email, password) => firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified === true) {
          window.location.hash = '#/user-profile';
        } else {
          alert('Se necesita verificar email para ingresar');
          // eslint-disable-next-line no-use-before-define
          signOut();
        }
      }
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
  });

// verificar email
const verificarEmail = () => {
  const user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(() => {
    })
    .catch((error) => {

    });
};

// Inicio de sesión con g-mail y contraseña de g-mail
const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};

// Cerrar sesión
const signOut = () => firebase
  .auth()
  .signOut()
  .then(() => {
    console.log('salir');
    window.location.hash = '#/';
  })
  .catch((error) => {
    // console.log(error);
  });

const currentUser = () => firebase.auth().currentUser;
const promiseOfSetFirebase = (nameCollection, docId, obj) => firebase.firestore().collection(nameCollection).doc(docId).set(obj);
const promiseOfgetFirebase = (nameCollection, docId) => firebase.firestore().collection(nameCollection).doc(docId).get();
const promiseOfdeleteFirebase = (nameCollection, docId) => firebase.firestore().collection(nameCollection).doc(docId).delete();
const promiseOfUpdateFirebase = (nameCollection, docId, obj) => firebase.firestore().collection(nameCollection).doc(docId).update(obj);
const promiseOnSnapshotFirebase = (nameCollection, callback) => firebase
  .firestore()
  .collection(nameCollection)
  .orderBy('today', 'desc')
  .onSnapshot(callback);
const firebaseAuthState = callback => firebase.auth().onAuthStateChanged(callback);
const promiseOfAddFirebase = (nameCollection, obj) => firebase.firestore().collection(nameCollection).add(obj);

const getUrlImageFromStorage = (selectedFile, /* progress, */ callback) => {
  const storageService = firebase
    .storage()
    .ref()
    .child(`images/${selectedFile.name}`)
    .put(selectedFile);
  storageService.on(
    'state_changed',
    () => {
    },
    (error) => {
      // console.log(error);
    },
    () => {
      storageService.snapshot.ref.getDownloadURL().then((url) => {
        // console.log(url);
        callback(url);
      });
    },
  );
};

export {
  signUp,
  signIn,
  signInWithGoogle,
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
