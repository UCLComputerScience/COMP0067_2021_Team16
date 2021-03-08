localStorage.clear()
  let imageData = ["asteroblastusstellatus.png", "porpitaprunella.png", "poliopogonamadou.png", "botryllusschlosseri.png", "cassiopeaandromeda.png", "hemipholiscordifera.png", "centrostephanuslongispinus.png", "nautiluspompilius.png", "haeckelianaporcellana.png", "cannorrhizaconnexa.png", "nausithoechallengeri.png", "solmaris.png"]
  for (let i = 0; i < imageData.length; i++) {
    localStorage.setItem(imageData[i], "/images/" + imageData[i]);
  }

  let audioData = ["asteroblastusstellatus.mp3", "porpitaprunella.mp3", "poliopogonamadou.mp3", "botryllusschlosseri.mp3", "cassiopeaandromeda.mp3", "hemipholiscordifera.mp3", "centrostephanuslongispinus.mp3", "nautiluspompilius.mp3", "haeckelianaporcellana.mp3", "cannorrhizaconnexa.mp3", "nausithoechallengeri.mp3", "solmaris.mp3"]
  for (let i = 0; i < audioData.length; i++) {
    localStorage.setItem(audioData[i], "/audios/" + audioData[i]);
  }