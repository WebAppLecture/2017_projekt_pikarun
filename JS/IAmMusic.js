
let audio = document.getElementById("Intro");
let isPlaying = true;
let change = document.getElementById("PlayPause");
let audindex = 1;

audio.play();
audio.loop = true;           //IntroSong spielt von anfang an
audio.volume = 0.25;

function playPause() //Veränderung der Pokeball-Liedspiel-Funktion
{
    switch(audindex)
    {
        case 1:

            if (isPlaying) {
                audio.pause();
                change.innerHTML = "Play Music";
            } else {
                audio.play();
                change.innerHTML = "Pause Music";
                audio.loop = true;
                audio.volume = 0.25;
            }
            isPlaying = !isPlaying;
            break;

        case 2:
            if (isPlaying) {
                gameaudio.pause();
                change.innerHTML = "Play Music";
            } else {
                gameaudio.play();
                change.innerHTML = "Pause Music";
                gameaudio.loop = true;
                gameaudio.volume = 0.25;
            }
            isPlaying = !isPlaying;
            break;
        case 3:
            if (isPlaying) {
                victorysnd.pause();
                change.innerHTML = "Play Music";
            } else {
                victorysnd.play();
                change.innerHTML = "Pause Music";
                victorysnd.loop = true;
                victorysnd.volume = 0.25;
            }
            isPlaying = !isPlaying;
            break;

    }
}


//miauzgenau sound
let miauzgenau = document.getElementById("miauzgenau");

function miauzmiauz()
{
    miauzgenau.play();
    miauzgenau.loop = false;
    miauzgenau.volume = 0.35;
}


//coinsound

let size = 20; // um maximalen Coinspielsound zu erhalten
let pool = [];
let currSound = 0;
for (i = 0; i < size; i++) {
    caching = new Audio("Sound/Super%20Mario%20Coin%20Sound.mp3");
    caching.volume = 0.22;
    caching.load();
    pool[i] = caching;
}

function sound_coin(){
    if(pool[currSound].currentTime === 0 || pool[currSound].ended) {
        pool[currSound].play();
    }
    currSound = (currSound + 1) % size;
}

//Springsound
let boing = document.getElementById("jumpsnd");

function jumpboing()
{
    boing.play();
    boing.loop = false;
    boing.volume = 0.15;
}

//Diedsound
let diedsnd = document.getElementById("deathsnd");

function dead()
{
    gameaudio.volume = 0.05;
    diedsnd.play();
    diedsnd.loop = false;
    diedsnd.volume = 0.35;
    setTimeout(function(){
        gameaudio.volume = 0.35;
    }, 3000);
}

//While Playing Sound
let gameaudio = document.getElementById("gamesnd");

function gamesndplay()
{
    gameaudio.play();
    gameaudio.loop = true;           //While Game Sound
    gameaudio.volume = 0.25;
}

//Pikachu-Ruf
let pikasound = document.getElementById("pikasnd");

function pikachusnd()
{
    pikasound.play();
    pikasound.loop = false;
    pikasound.volume = 0.40;
}

//Sound für die Gewinnsequenz
let victorysnd = document.getElementById("victoryaudi");

function victoryaudire()
{
    gameaudio.volume = 0.01;
    victorysnd.play();
    victorysnd.loop = false;
    victorysnd.volume = 0.40;
}