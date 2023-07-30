let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider img");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide, idx) => {
    if (idx === slideIndex) {
      slide.style.left = "0";
      dots[idx].classList.add("active");
    } else {
      const direction = idx > slideIndex ? "-100%" : "100%"; // 방향을 수정
      slide.style.left = direction;
      dots[idx].classList.remove("active");
    }
  });
}

function changeSlide(n) {
  showSlide(slideIndex + n); // 이동 방향을 원래대로 변경
}

document
  .querySelector(".prev")
  .addEventListener("click", () => changeSlide(-1)); // 왼쪽 버튼 클릭 시 왼쪽으로 이동
document.querySelector(".next").addEventListener("click", () => changeSlide(1)); // 오른쪽 버튼 클릭 시 오른쪽으로 이동

showSlide(slideIndex); // 초기 슬라이드 표시
