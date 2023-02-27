import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const photosMarkup = createPhotosMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", photosMarkup);

function createPhotosMarkup(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}

// let lightbox = new SimpleLightbox(".gallery a", {/* options */});

let lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionSelector: "img[alt]",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
