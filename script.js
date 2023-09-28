const songs = [
    {
        name : 'Chaleya',
        artist : "Arjit Singh",
        cover : 'Chaleya.jpg',
        src : 'chaleya.mp3',

    },
    {
        name : "Tere hawale",
        artist : "Arjit Singh",
        cover : 'tere hawale.jpg',
        src : "Tere Hawaale.mp3",
    
    },
    {
        name : "Saware",
        artist : "Arjit Singh",
        cover : "saware.jpg",
        src : "saware.mp3",
    
    },
    {
        name : "Sadi gali Aja",
        artist : "Ayushman Khurana",
        cover : "sadi gal aaja.jpg",
        src : "Saadi Galli Aaja.mp3",
    
    },
]

let ctrlIcon = document.querySelector("#ctrlIcon");
let nextBtn = document.querySelector("#nextBtn")
let progress = document.querySelector(".progressBar");
let prevBtn = document.querySelector("#prevBtn")
let playpause = document.querySelector("#ctrlIcon")
let songName = document.querySelector("#songName")
let artistName = document.querySelector("#artistName")
let image = document.querySelector(".image")
let audio = document.querySelector("#audio")

let currentIndexSong = 0;

const loadSongs = (songs)=>{
    songName.innerHTML = songs.name;
    artistName.innerHTML = songs.artist;
    audio.src = "./images/"+ songs.src;
    image.src = "./images/"+ songs.cover;
}

loadSongs(songs[currentIndexSong]);
nextBtn.addEventListener('click', ()=>{
    currentIndexSong = (currentIndexSong + 1) % songs.length; //This line increments the `currentIndexSong` variable by 1. The `%` operator is used to ensure that the `currentIndexSong` variable wraps around to 0 when it reaches the end of the `songs` array.
    loadSongs(songs[currentIndexSong]); 
 })

prevBtn.addEventListener('click', ()=>{
    currentIndexSong = (currentIndexSong - 1 + songs.length) % songs.length;
    loadSongs(songs[currentIndexSong]);     
})    

ctrlIcon.addEventListener('click',()=>{
    if(ctrlIcon.classList.contains('fa-pause')){
        audio.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');

    }else{
        audio.play();
        audio.muted = false;
        loadSongs(songs[currentIndexSong]);
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');

    }
})



audio.onloadedmetadata = ()=>{
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

if(audio.play()){
    setInterval(()=>{
        progress.value = audio.currentTime;
    }, 500)
}

progress.onchange= ()=>{
    audio.play();
    audio.currentTime = progress.value;

    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}

