/*const modalBtn = document.querySelector(".assembly__button")
console.log(modalBtn);*/

/*const modalBtn = document.querySelector(".modal__button")
const modal = document.querySelector(".modal")

console.log(modal);*/


// "Оставить заявку", модальное окно
/*const modalBtn = document.querySelector(".modal__button")
const modal = document.querySelector(".modal")

modalBtn.addEventListener("click", () => {
    
    //console.log("click");
    modal.style.display = "flex";
})

 
modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner")

  if (!modalContent) {
    modal.style.display = ""
  }
})*/


// "Заказать курс", модальное окно
const modalBtn = document.querySelector(".course__button")
const modal = document.querySelector(".modal")

modalBtn.addEventListener("click", () => {
    
    //console.log("click");
    modal.style.display = "flex";
})

 
modal.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner")

  if (!modalContent) {
    modal.style.display = ""
  }
})



// создание триггера закрытия в модуле
function createCloseModalTrigger() {
  const modalContent = document.querySelector('.modal__inner');

  if (modalContent) {
    // создание и размещение элемента
    const modalCloseTrigger = document.createElement('div');
    modalCloseTrigger.classList.add('modal__close');
    modalCloseTrigger.innerHTML = '&times;';
    modalContent.prepend(modalCloseTrigger);

    // стили
    modalContent.style.position = 'relative';

    //TODO: создание стиля из массива
    modalCloseTrigger.style.fontSize = '30px';
    modalCloseTrigger.style.position = 'absolute';
    modalCloseTrigger.style.top = '10px';
    modalCloseTrigger.style.right = '20px';
    modalCloseTrigger.style.cursor = 'pointer';

  
    modalCloseTrigger.addEventListener('click', closeModal);
  }
}

createCloseModalTrigger();


// закрытие 
modal.addEventListener('click', e => {
  const modalContent = e.target.closest('.modal__inner');

  if (!modalContent) closeModal();
});

function closeModal() {
  modal.style.display = '';
}