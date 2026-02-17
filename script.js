const nextEl = document.querySelector(".next");
const imgContEl = document.querySelector(".img-container");
const imagesEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");

let slideIndex = 1;

let timeout;

nextEl.addEventListener("click", () => {
  slideIndex++;
  clearTimeout(timeout)
  updateImg();
});

prevEl.addEventListener("click", () => {
  slideIndex--;
  clearTimeout(timeout)
  updateImg();
});

updateImg()

function updateImg() {
  if (slideIndex > imagesEl.length) {
    slideIndex = 1;
  }else if(slideIndex < 1){
    slideIndex = imagesEl.length;
  }
  imgContEl.style.transform = `translateX(-${(slideIndex - 1) * 500}px)`;

  timeout = setTimeout(() => {
    slideIndex++;
    updateImg();
  }, 3000);
}
