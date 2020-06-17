 
import Login from './view/login.js';
import Register from './view/register.js';
import Error404 from './view/error.js';
import Profile from './view/profile-user.js';
import Configuration from './view/configuration-user.js';
import editarPerfil from './view/edit-profile.js';
import Videos from './view/videos.js';
import Memes from './view/memes.js';
import FanArt from './view/fanArt.js'

const components = {
    login: Login,
    registro: Register,
    profile: Profile,
    editarPerfil: editarPerfil,
    configuration: Configuration,
    edit: editarPerfil,
    error: Error404,
    videos: Videos,
    memes: Memes,
    fanArt: FanArt
}

export { components }