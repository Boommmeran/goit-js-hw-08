import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';

function onTimeUpdate(event) {
  localStorage.setItem(currentTime, JSON.stringify(event.seconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

if (localStorage.getItem(currentTime)) {
  player.setCurrentTime(localStorage.getItem(currentTime));
};