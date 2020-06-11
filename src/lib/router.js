import {mostrarLogin} from './view/ingresar.js';
import {mostrarRegistro} from './view/registrar.js';

import {mostrarHome} from './view/home.js';

import {mostrarVideos} from './view/videos.js';
import {mostrarMemes} from './view/memes.js';
import { google } from './index.js';


export const changeRoute = (hash) => {
    let root = document.getElementById("root");
    root.innerHTML ="";

    switch(hash){ 
    
        case '#/':            
            root.innerHTML = mostrarLogin(); break;
        case '#/registrar':
            root.innerHTML = mostrarRegistro(); break;
        case '#/home':            
            root.innerHTML = mostrarHome(); break;  

        case '#/videos':            
            root.innerHTML = mostrarVideos(); break;
        case '#/memes':            
            root.innerHTML = mostrarMemes(); break;

        case '#/google':            
            google(); break;
   
        default:
            root.innerHTML = "<h1>No existe =(</h1>"; break;
    }    
}