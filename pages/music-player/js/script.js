const wrapper = document.querySelector(".wrapper");
const musicImg = document.querySelector(".img-area img");
const musicName = document.querySelector(".song-details .name");
const musicArtist = document.querySelector(".song-details .artist");
const mainAudio = document.getElementById("main-audio");
const btnPlayPause = document.querySelector(".play-pause");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const progressBar = document.querySelector(".progress-bar");
const progressArea = document.querySelector(".progress-area");
const btnRepeat = document.getElementById("repeat-plist");
const musicList = document.querySelector(".music-list");
const btnShowMore = document.getElementById("more-music");
const btnHideMusic = document.getElementById("close");

let musicIndex = 0;

addEventListener("DOMContentLoaded", () => {
  loadMusic(musicIndex);
  playingNow();
});

function loadMusic(musicIndex) {
  musicName.textContent = allMusic[musicIndex].name;
  musicArtist.textContent = allMusic[musicIndex].artist;
  musicImg.src = `images/${allMusic[musicIndex].img}.jpg`;
  mainAudio.src = `sounds/${allMusic[musicIndex].src}.mp3`;
}

// Play music function
function playMusic() {
  wrapper.classList.add("paused");
  btnPlayPause.querySelector("i").textContent = "pause";
  mainAudio.play();
}

// Pause music function
function pausedMusic() {
  wrapper.classList.remove("paused");
  btnPlayPause.querySelector("i").textContent = "play_arrow";
  mainAudio.pause();
}

// Next music function
function nextMusic() {
  musicIndex++;
  // If musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length - 1
    ? (musicIndex = 0)
    : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

// Prev music function
function prevMusic() {
  musicIndex--;
  // If musicIndex is less than 1 then musicIndex will be the array length so the last music play
  musicIndex < 0
    ? (musicIndex = allMusic.length - 1)
    : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

// Play or pause button event
btnPlayPause.addEventListener("click", () => {
  const isMusicPaused = wrapper.classList.contains("paused");
  // If isPlayMusic is true then call pauseMusic else call playMusic
  isMusicPaused ? pausedMusic() : playMusic();
  playingNow();
});

// Next music button event
btnNext.addEventListener("click", () => {
  nextMusic();
  playingNow();
});

// Prev music button event
btnPrev.addEventListener("click", () => {
  prevMusic();
  playingNow();
});

// Update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime; // Getting playing song currentTime
  const duration = e.target.duration; // Getting playing song total duration
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = document.querySelector(".current");
  let musicDuration = document.querySelector(".duration");

  mainAudio.addEventListener("loadeddata", (e) => {
    // Update song total duration
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    musicDuration.textContent = `${(totalMin + "").padStart(2, 0)}:${(
      totalSec + ""
    ).padStart(2, 0)}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  musicCurrentTime.textContent = `${(currentMin + "").padStart(2, 0)}:${(
    currentSec + ""
  ).padStart(2, 0)}`;
});

// Update playing song currentTime on according to the progress bar width
progressArea.addEventListener("click", (e) => {
  let progressWhidth = progressArea.clientWidth; // Getting width of progress bar
  let clickedOffSetX = e.offsetX; // Getting offset x value
  let soundDuration = mainAudio.duration; // Getting song total duration

  mainAudio.currentTime = (clickedOffSetX / progressWhidth) * soundDuration;
  playMusic(); // Calling playMusic function
});

btnRepeat.addEventListener("click", (e) => {
  let getText = btnRepeat.textContent;
  // Change loop, shuffle, repeat icon onclick
  switch (getText) {
    case "repeat":
      btnRepeat.textContent = "repeat_one";
      btnRepeat.setAttribute("title", "Song looped");
      break;

    case "repeat_one":
      btnRepeat.textContent = "shuffle";
      btnRepeat.setAttribute("title", "PLayback shuffle");
      break;

    case "shuffle":
      btnRepeat.textContent = "repeat";
      btnRepeat.setAttribute("title", "Playlist Looped");
      break;
  }
});

// Code for what to do after song ended
mainAudio.addEventListener("ended", () => {
  // We'll do according to the icon means if user has set icon to
  // loop song then we'll repeat the current song and will do accordingly
  let getText = btnRepeat.textContent; //Getting this tag innerText
  switch (getText) {
    case "repeat":
      nextMusic(); // Calling nextMusic function
      break;

    case "repeat_one":
      mainAudio.currentTime = 0; // Setting audio current time to 0
      loadMusic(musicIndex); // Calling loadMusic function with argument, in the argument there is a index of current song
      playMusic(); // Calling nextMusic function
      break;

    case "shuffle":
      let randIndex = Math.floor(Math.random() * allMusic.length + 1); // Genereting random index/numb with max range of array length
      if (musicIndex == randIndex) {
        randIndex = Math.floor(Math.random() * allMusic.length + 1); //this loop run until the next random number won't be the same of current musicIndex
      }
      musicIndex = randIndex; //passing randomIndex to musicIndex
      loadMusic(musicIndex);
      playMusic();
      playingNow();
      break;
  }
});

// Show music list onclick of music icon
btnShowMore.addEventListener("click", () => {
  musicList.classList.toggle("show");
});

btnHideMusic.addEventListener("click", () => {
  btnShowMore.click();
});

const ulTag = document.querySelector("ul");
// Create li tags according to array length for list
allMusic.forEach((el, i) => {
  let liTag = document.createElement("li");
  liTag.id = i;

  let divTag = document.createElement("div");
  divTag.classList.add("row");
  liTag.appendChild(divTag);

  let spanTagName = document.createElement("span");
  spanTagName.textContent = el.name;
  divTag.appendChild(spanTagName);

  let pTag = document.createElement("p");
  pTag.textContent = el.artist;
  divTag.appendChild(pTag);

  let audioTag = document.createElement("audio");
  audioTag.classList.add(el.src);
  audioTag.src = `sounds/${el.src}.mp3`;
  liTag.appendChild(audioTag);

  let spanTagAudioDuration = document.createElement("span");
  spanTagAudioDuration.id = el.src;
  spanTagAudioDuration.classList.add("audio-duration");
  spanTagAudioDuration.textContent = "";
  liTag.appendChild(spanTagAudioDuration);

  ulTag.append(liTag);

  let liAudioDuration = document.getElementById(el.src);
  let liAudioTag = document.querySelector(`.${el.src}`);

  liAudioTag.addEventListener("loadeddata", () => {
    let audioDuration = liAudioTag.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    liAudioDuration.textContent = `${(totalMin + "").padStart(2, 0)}:${(
      totalSec + ""
    ).padStart(2, 0)}`;
  });
});

const allLiTags = document.querySelectorAll("li");

// Play particular song from the list onclick of li tag
function playingNow() {
  allLiTags.forEach((el) => {
    // If the li tag index is equal to the musicIndex then add playing class in it
    if (el.getAttribute("id") == musicIndex) {
      el.classList.add("playing");
    } else {
      el.classList.remove("playing");
    }
    el.addEventListener("click", clicked);
  });
}

// Particular li clicked function
const clicked = (e) => {
  let getIdIndex = e.target.parentNode.parentNode.getAttribute("id");
  // Updating current song index with clicked li index
  musicIndex = getIdIndex;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
};