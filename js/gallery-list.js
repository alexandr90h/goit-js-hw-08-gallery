import galleryListObj from "./gallery-items.js";
console.log(galleryListObj);
const galleryListElem = document.querySelector(".js-gallery");

function createListGallery(gall) {
  return gall
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/></a></li>`;
    })
    .join("");
}
function getUrl(evt) {
  console.log(evt.target.dataset.source);
}
galleryListElem.insertAdjacentHTML(
  "afterbegin",
  createListGallery(galleryListObj)
);

galleryListElem.addEventListener("click", getUrl);
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
