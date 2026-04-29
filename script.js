function toggleMode() {
  const html = document.documentElement //pegando o html
  html.classList.toggle("light") // fazendo a troca das classes

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imgem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
