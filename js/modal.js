/*const modalBtn = document.querySelector(".assembly__button")
console.log(modalBtn);*/

/*const modalBtn = document.querySelector(".modal__button")
const modal = document.querySelector(".modal")

console.log(modal);*/


// "Оставить заявку", модальное окно
const modalBtn1 = document.querySelector(".modal__button")
const modal1 = document.querySelector(".modal")

modalBtn1.addEventListener("click", () => {
    
    //console.log("click");
    modal1.style.display = "flex";
})

 
modal1.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner")

  if (!modalContent) {
    modal1.style.display = ""
  }
})


// "Заказать курс", модальное окно
const modalBtn2 = document.querySelector(".course__button")
const modal2 = document.querySelector(".modal")

modalBtn2.addEventListener("click", () => {
    
    //console.log("click");
    modal2.style.display = "flex";
})

 
modal2.addEventListener("click", (event) => {
  const modalContent = event.target.closest(".modal__inner")

  if (!modalContent) {
    modal2.style.display = ""
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
modal1.addEventListener('click', e => {
  const modalContent = e.target.closest('.modal__inner');

  if (!modalContent) closeModal();
});

function closeModal() {
  modal1.style.display = '';
}

modal2.addEventListener('click', e => {
  const modalContent = e.target.closest('.modal__inner');

  if (!modalContent) closeModal();
});

function closeModal() {
  modal2.style.display = '';
}
