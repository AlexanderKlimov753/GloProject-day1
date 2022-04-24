/*const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
  const title = elem.querySelector('.program-line__title');
  const descr = elem.querySelector('.program-line__descr');

  title.addEventListener('click', () => {
    descr.classList.toggle('active');
  });

  /* console.dir(descr.classList.remove);*/
//});


/*if (thisContentBlock.hasClass('active')) {
    thisContentBlock.removeClass('active')
}
     else {
    thisContentBlock.addClass('active')
}*/


const contents = document.querySelectorAll('.program-line__content');

contents.forEach((element) => {
    const title = element.querySelector('.program-line__title');

    title.addEventListener('click', () => {
        contents.forEach((elements) => {

            const descr = elements.querySelector('.program-line__descr');
            if (elements == element) {
                descr.classList.toggle('active');
            }
            else {
                descr.classList.remove('active');
            }
        });
    })
})
