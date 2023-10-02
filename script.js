
// get the audio element
let audio = new Audio(`1.mp3`)
const masterPlay = document.getElementById(`masterPlay`)
const myProgressbar = document.getElementById(`myProgressbar`)
const gif = document.getElementById(`gif`)

// get an array of object containing song and  file path
const songs = [
    {
        songName: `Let me love you`,
        filePath: `1.mp3`
    },
    {
        songName: `Hey`,
        filePath: `1.mp3`
    },
    {
        songName: `YEAH YEAH`,
        filePath: `1.mp3`
    }
]

// play/stop the song
masterPlay.addEventListener(`click`, () => {
    console.log('hit')
    if (audio.paused || audio.currentTime === 0) {
        audio.play()
        masterPlay.classList.remove(`fa-play`)
        masterPlay.classList.add(`fa-pause`)
        gif.classList.remove(`hidden`)
    } else {
        audio.pause()
        masterPlay.classList.remove(`fa-pause`)
        masterPlay.classList.add(`fa-play`)
        gif.classList.add(`hidden`)
    }
})

// listen to events
audio.addEventListener(`timeupdate`, () => {
    // update the seek bar
    const progress = parseInt(
        (audio.currentTime / audio.duration) * 100
    )
    // /update the myProgressbar
    myProgressbar.value = progress
})

// listen to the change events in myProgressbar
myProgressbar.addEventListener(`change`, () => {
    audio.currentTime = myProgressbar.value * audio.duration / 100
})

// listen the click on the audio bar
const songList = document.getElementsByClassName(`songItem`)
for (let index = 0; index < songList.length; index++) {
    // check for click
    songList[index].addEventListener(`click`, (e) => {
        // change image source
        document.querySelector(`.songBanner`).querySelector(`img`).src = `image${index + 1}.jpg`
        songList[index].querySelector(`.player`).classList.remove(`fa-play`)
        songList[index].querySelector(`.player`).classList.add(`fa-pause`)
        audio = new Audio(`1.mp3`)
    })

}
