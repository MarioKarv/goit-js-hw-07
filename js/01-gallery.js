import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const photosMarkup = createPhotosMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", photosMarkup);

gallery.addEventListener("click", onPhotoClick);

function createPhotosMarkup(photos) {
  return photos
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

// function onPhotoClick(event) {
//   event.preventDefault();
//   const instance = basicLightbox.create(`
// 		<img width="1400" height="900" src="${event.target.dataset.source}">
// 	`);
//   instance.show();
// }

const instance = basicLightbox.create(
  `<img width="1140" height="720" src="#">`,
  {
    onShow: () => {
      window.addEventListener("keydown", onEscPress);
    },
    onClose: () => {
      window.removeEventListener("keydown", onEscPress);
    },
  }
);

function onPhotoClick(event) {
  event.preventDefault();
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function onEscPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
