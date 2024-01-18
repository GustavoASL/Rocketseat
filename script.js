function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("dark")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-light.png")
  }

  if (html.classList.contains("dark")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, com barba e fundo amarelo"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro e camisa preta, sem barba e fundo azul"
    )
  }
}