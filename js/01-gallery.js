import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galery = document.querySelector('.gallery')


function createMurkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join("")
}

galery.insertAdjacentHTML('beforeend', createMurkup(galleryItems))
galery.addEventListener('click', hendleClick)

function hendleClick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
        return
    }

    const modalOn = basicLightbox.create(
    `<img src="${event.target.dataset.source}" />`
    )
  modalOn.show()

  galery.addEventListener('keydown', modalClose)
  
  function modalClose(event) {
    if (event.key === 'Escape') {
      modalOn.close()
    }
  }
}







