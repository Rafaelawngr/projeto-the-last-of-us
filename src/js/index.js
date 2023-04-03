/* 
OBJETIVO: Quando clicar no botão deve-se mostrar a imagem de fundo correspondente.
1. Pegar o elemento HTML dos botões;
2. Identificar o clique no botão;
3. Desmarcar o botão selecionado anterior;
4. Marcar o botão clicado;
5. Esconder a imagem ativa anterior;
6. Mostrar a imagem selecionada; 
*/

const carouselButtons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    disableSelectedButton();

    selectCarouselButton(button);

    hideActiveImage();

    showBackgroundImage(index);
  });
});
function showBackgroundImage(index) {
  images[index].classList.add("active");
}

function selectCarouselButton(button) {
  button.classList.add("selected");
}

function hideActiveImage() {
  const activeImage = document.querySelector(".active");
  activeImage.classList.remove("active");
}

function disableSelectedButton() {
  const selectedButton = document.querySelector(".selected");

  selectedButton.classList.remove("selected");
}
