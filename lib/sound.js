class AudioPlayer {
  constructor(audioUrl) {
    this.audio = new Audio(audioUrl);
    this.isPlayingAllowed = false;
    this.userInteracted = false;
    this.handleUserInteraction = this.handleUserInteraction.bind(this);
    document.addEventListener("click", this.handleUserInteraction);
    document.addEventListener("keydown", this.handleUserInteraction);
    document.addEventListener("touchstart", this.handleUserInteraction);
  }

  updatePlayAllowed() {
    this.isPlayingAllowed = this.userInteracted;
  }

  handleUserInteraction() {
    this.userInteracted = true;
    this.updatePlayAllowed();
  }

  setVolume(volume) {
    this.audio.volume = volume;
  }

  play() {
    if (this.isPlayingAllowed) {
      this.audio.play();
    } else {
      console.error(
        "Playback is not allowed until the user interacts with the website."
      );
    }
  }

  isPlaying() {
    return !this.audio.paused;
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  enableLoop() {
    this.audio.loop = true;
  }

  disableLoop() {
    this.audio.loop = false;
  }
}

const jumpSound = new AudioPlayer("assets/jump.mp3");
const hitSound = new AudioPlayer("assets/hit.wav");

window.sounds = {
  jumpSound,
  hitSound,
};
