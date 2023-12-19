document.addEventListener("DOMContentLoaded", function () {
  const piano = document.getElementById("piano");

  const keys = [
    { note: "C", sound: "c4.mp3", key: "a" },
    { note: "C#", sound: "c-sharp4.mp3", key: "w" },
    { note: "D", sound: "d4.mp3", key: "s" },
    { note: "D#", sound: "d-sharp4.mp3", key: "e" },
    { note: "E", sound: "e4.mp3", key: "d" },
    { note: "F", sound: "f4.mp3", key: "f" },
    { note: "F#", sound: "f-sharp4.mp3", key: "t" },
    { note: "G", sound: "g4.mp3", key: "g" },
    { note: "G#", sound: "g-sharp4.mp3", key: "y" },
    { note: "A", sound: "a4.mp3", key: "h" },
    { note: "A#", sound: "a-sharp4.mp3", key: "u" },
    { note: "B", sound: "b4.mp3", key: "j" },
    { note: "C5", sound: "c5.mp3", key: "k" },
  ];

  keys.forEach((key) => {
    const keyElement = document.createElement("div");
    keyElement.className = key.note.includes("#") ? "key black-key" : "key";
    keyElement.dataset.note = key.note;
    keyElement.addEventListener("mousedown", () => playSound(key.sound));
    keyElement.addEventListener("mouseup", stopSound);
    piano.appendChild(keyElement);

    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === key.key) {
        playSound(key.sound);
        keyElement.classList.add("active");
      }
    });

    document.addEventListener("keyup", (event) => {
      if (event.key.toLowerCase() === key.key) {
        stopSound();
        keyElement.classList.remove("active");
      }
    });

    let audio; // Declare audio variable outside the functions

    function playSound(soundFile) {
      if (audio) {
        // If audio is already playing, pause and reset
        audio.pause();
        audio.currentTime = 0;
      }
      audio = new Audio(`sounds/${soundFile}`);
      audio.play();
      keyElement.classList.add("active");
    }

    function stopSound() {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      keyElement.classList.remove("active");
    }
  });
});
