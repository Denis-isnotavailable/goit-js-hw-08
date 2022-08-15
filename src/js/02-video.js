import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));
}

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem(LOCAL_STORAGE_KEY, seconds); 
        
        }).catch(function(error) {
            console.log(error);
        });
    
}, 1000));