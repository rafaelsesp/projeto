function toggleMode(){
    const html = document.documentElement
    // Ou pode ser:
    //html.classList.toggle("light")

    if(html.classList.contains('light')){
        html.classList.remove('light')//Se for true, ele remove
    } else { //Se não
        html.classList.add('light')
    }

    // pegar a tag img
    const image = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
    // se tiver ligth mode, adicionar a imagem light
        image.setAttribute('src', '../assets/avatar-light.png')
        image.setAttribute('alt', 'Mayk Britto, sorrindo, usando óculos escuros, jaqueta de couro preta e com a imagem com fundo mesclado entre azul claro e roxo claro')
    } else {
    // se tiver sem light mode, manter a imagem normal
        image.setAttribute('src', '../assets/avatar.png')
        image.setAttribute('alt', 'Mayk Britto, sorrindo, usando óculos, jaqueta de couro preta e com a imagem com fundo mesclado entre azul claro e roxo claro')
    }
}