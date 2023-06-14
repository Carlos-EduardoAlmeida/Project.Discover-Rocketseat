function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if(html.classList.contains('luz')){
    html.classList.remove('luz')
    img.setAttribute("src", "./assets/simbbatman.png")
    img.setAttribute("alt", "Foto de perfil com símbolo do batman")
    
  }
  else {
    html.classList.add('luz')
    img.setAttribute("src", "./assets/simbsuperman.png")
    img.setAttribute("alt", "Foto de perfil com símbolo do superman")
  }

/*
  if (html.classList.contains("luz")) {
    img.setAttribute('src', './assets/simbsuperman.png')
  } else {
    img.setAttribute("src", "./assets/simbbatman.png")
  }
  */
}