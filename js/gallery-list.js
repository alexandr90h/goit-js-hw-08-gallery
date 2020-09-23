import galleryListObj from "./gallery-items.js";
console.log(galleryListObj);
const galleryListElem = document.querySelector(".js-gallery");
const modalElem = document.querySelector(".js-lightbox");
const btnCloseElem = document.querySelector(".lightbox__button");

function createListGallery(gall) {
  return gall
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a
    class="gallery__link"
    href="${original}"
  >
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/></a></li>`;
    })
    .join("");
}
function getUrl(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.dataset.source);
  modalElem.classList.add("is-open");
}
galleryListElem.insertAdjacentHTML(
  "afterbegin",
  createListGallery(galleryListObj)
);
function closeModal() {
  modalElem.classList.remove("is-open");
}

galleryListElem.addEventListener("click", getUrl);
btnCloseElem.addEventListener("click", closeModal);
// galleryListObj.forEach(({ preview, original, description }) => {
//   const itemOfListGalleryElem = document.createElement("li");
//   const linkOfListGalleryElem = document.createElement("a");
//   const imagesOfListGalleryElem = document.createElement("img");

//   itemOfListGalleryElem.classList.add("gallery__item");
//   linkOfListGalleryElem.classList.add("gallery__link");
//   linkOfListGalleryElem.setAttribute("href", original);
//   imagesOfListGalleryElem.classList.add("gallery__image");
//   imagesOfListGalleryElem.setAttribute("src", preview);
//   imagesOfListGalleryElem.setAttribute("data-source",original);
//   imagesOfListGalleryElem.setAttribute("alt", description);

//   galleryListElem.append(itemOfListGalleryElem);
//   itemOfListGalleryElem.append(linkOfListGalleryElem);
//   linkOfListGalleryElem.append(imagesOfListGalleryElem);
// });

//комент в css і в href-ссилки додати змінну
