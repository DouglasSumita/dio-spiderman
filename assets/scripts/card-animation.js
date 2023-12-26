
function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButton) {
  const selectItem = selectedButton.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const newRotateY = -120 * (Number(selectItem) - 1);
  
  carousel.style.transform = transform.replace(rotateY[0], `rotateY(${newRotateY}deg)`);
 
  cardButtonActive = document.querySelector('.s-controller__button--active');
  cardButtonActive.classList.remove('s-controller__button--active');

  selectedButton.classList.add('s-controller__button--active');
}
