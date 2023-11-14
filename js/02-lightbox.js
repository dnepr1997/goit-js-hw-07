import { galleryItems } from './gallery-items.js';
// Change code below this line
const galery = document.querySelector('.gallery')
galery.insertAdjacentHTML('beforeend', createMurkup(galleryItems))

function createMurkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    ).join("")
}

galery.addEventListener('click', hendleClick)

function hendleClick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
        return
    }
}
let lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
    captionsType: 'alt',
});
