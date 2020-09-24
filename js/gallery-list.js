import galleryListObj from "./gallery-items.js";
const galleryListElem = document.querySelector(".js-gallery");
const modalElem = document.querySelector(".js-lightbox");
const originalImagesElem = document.querySelector(".lightbox__image");

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
  evt.preventDefault();
  originalImagesElem.setAttribute("src", evt.target.dataset.source);
  modalElem.classList.add("is-open");
}
function closeModal(evt) {
  if (
    evt.target.dataset.action === "close-lightbox" ||
    evt.target.classList.contains("lightbox__overlay")
  ) {
    evt.currentTarget.classList.remove("is-open");
    originalImagesElem.removeAttribute("src");
  }
}
function KeyPress(evt) {
  if (evt.key === "Escape") {
    modalElem.classList.remove("is-open");
    originalImagesElem.removeAttribute("src");
  }
  const arrayOrgUrl = galleryListObj.map((orgUrl) => orgUrl.original);

  if (evt.key === "ArrowRight") {
    let i = arrayOrgUrl.indexOf(originalImagesElem.src);
    i++;
    if (i >= 9) {
      i = 0;
    }
    originalImagesElem.setAttribute("src", arrayOrgUrl[i]);
  }
  if (evt.key === "ArrowLeft") {
    let i = arrayOrgUrl.indexOf(originalImagesElem.src);
    i--;
    if (i < 0) {
      i = 8;
    }
    originalImagesElem.setAttribute("src", arrayOrgUrl[i]);
  }
}
galleryListElem.insertAdjacentHTML(
  "afterbegin",
  createListGallery(galleryListObj)
);
galleryListElem.addEventListener("click", getUrl);
modalElem.addEventListener("click", closeModal);
window.addEventListener("keydown", KeyPress);
