document.addEventListener("DOMContentLoaded", () => {
  const musicList = [
    { nome: "3 porquinhos", arquivo: "3-PORQUINHOS-♫.mp3" },
    { nome: "COELHO E TARTARUGA", arquivo: "COELHO-E-TARTARUGA-♫.mp3" },
    { nome: "k a m a i t a c h i - Bob", arquivo: "k-a-m-a-i-t-a-c-h-i-Bob-_prodEAGLE_.mp3" },
    { nome: "O casamento", arquivo: "O-Casamento.mp3" },
    { nome: "Sitio do tio Harry", arquivo: "Sitio-do-Tio-Harry.mp3" },
  ];

  const voltar = document.getElementById("voltar");
  const playBtn = document.getElementById("play");
  const avancar = document.getElementById("avançar");

  const tempoBar = document.getElementById("tempo");
  const progressBar = document.getElementById("barra-de-progresso");

  const currentTimeEl = document.getElementById("progresso");
  const totalTimeEl = document.getElementById("progresso2");

  let currentMusicIndex = 0;

  // Reusa o mesmo objeto de áudio (boa prática)
  const audioPlayer = new Audio();
  audioPlayer.preload = "metadata";

  let isPlaying = false;

  function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
    const minute = Math.floor(seconds / 60);
    const secondLeft = Math.floor(seconds - minute * 60);
    return `${minute}:${secondLeft < 10 ? "0" : ""}${secondLeft}`;
  }

  function setPlayIcon(playing) {
    if (playing) {
      playBtn.classList.remove("bi-play-circle-fill");
      playBtn.classList.add("bi-pause-circle-fill");
    } else {
      playBtn.classList.add("bi-play-circle-fill");
      playBtn.classList.remove("bi-pause-circle-fill");
    }
  }

  function setTrack(index, { autoplay = false } = {}) {
    currentMusicIndex = (index + musicList.length) % musicList.length;

    audioPlayer.src = musicList[currentMusicIndex].arquivo;
    audioPlayer.load(); // garante metadata/duration atualizando

    // reseta UI enquanto carrega
    progressBar.style.setProperty("--progress", "0%");
    currentTimeEl.textContent = "00:00";
    totalTimeEl.textContent = "00:00";

    if (autoplay) {
      audioPlayer.play().then(() => {
        isPlaying = true;
        setPlayIcon(true);
      }).catch(() => {
        // navegador pode bloquear autoplay sem interação do usuário
        isPlaying = false;
        setPlayIcon(false);
      });
    }
  }

  function playSong() {
    audioPlayer.play().then(() => {
      isPlaying = true;
      setPlayIcon(true);
    }).catch(() => {
      // se der erro, não mente dizendo que tá tocando
      isPlaying = false;
      setPlayIcon(false);
    });
  }

  function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    setPlayIcon(false);
  }

  function togglePlayPause() {
    if (isPlaying) pauseSong();
    else playSong();
  }

  function updateProgressUI() {
    const duration = audioPlayer.duration;
    const current = audioPlayer.currentTime;

    // atualiza textos
    currentTimeEl.textContent = formatTime(current);

    if (Number.isFinite(duration) && duration > 0) {
      const pct = (current / duration) * 100;
      progressBar.style.setProperty("--progress", `${pct}%`);
    } else {
      progressBar.style.setProperty("--progress", "0%");
    }
  }

  function updateTotalTimeUI() {
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
  }

  // Seek confiável: usa posição real do clique na barra (não offsetX)
  function jumpTo(e) {
    const rect = tempoBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (!Number.isFinite(audioPlayer.duration) || audioPlayer.duration <= 0) return;

    const ratio = Math.min(Math.max(x / width, 0), 1);
    audioPlayer.currentTime = ratio * audioPlayer.duration;
    updateProgressUI();
  }

  function previousSong() {
    const shouldAutoplay = isPlaying;
    setTrack(currentMusicIndex - 1, { autoplay: shouldAutoplay });
  }

  function nextSong() {
    const shouldAutoplay = isPlaying;
    setTrack(currentMusicIndex + 1, { autoplay: shouldAutoplay });
  }

  // quando acabar a música, passa pra próxima (padrão player)
  function handleEnded() {
    setTrack(currentMusicIndex + 1, { autoplay: true });
  }

  // Eventos
  playBtn.addEventListener("click", togglePlayPause);
  voltar.addEventListener("click", previousSong);
  avancar.addEventListener("click", nextSong);

  tempoBar.addEventListener("click", jumpTo);

  audioPlayer.addEventListener("timeupdate", updateProgressUI);
  audioPlayer.addEventListener("loadedmetadata", () => {
    updateTotalTimeUI();
    updateProgressUI();
  });
  audioPlayer.addEventListener("ended", handleEnded);

  // Inicializa primeira música sem autoplay
  setPlayIcon(false);
  setTrack(0, { autoplay: false });
});

