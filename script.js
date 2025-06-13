let Now_Playing=document.querySelector('.now-playing');
let track_art=document.querySelector('.track-art');
let track_name=document.querySelector('.track-name');
let track_details=document.querySelector('.track-details');
let current_time=document.querySelector('.current-time');
let seek_slider=document.querySelector('.seek_slider');
let total_duration=document.querySelector('.total_duration');
let volume_slider=document.querySelector('.volume_slider');
let random_track=document.querySelector('.random-track');
let prev_track=document.querySelector('.prev-track');
let playpause_track=document.querySelector('.playpause-track');
let next_track=document.querySelector('.next-track');
let repeat_track=document.querySelector('.next_track');
let wave=document.getElementsByClassName('.loading-wave');
let curr_track = document.createElement('audio');
let randomIcon = document.querySelector('.fa-random');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'music/stay.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];

