// 이미지 슬라이더 자동 전환 기능
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
let slideInterval;

// 슬라이더 초기화
function initSlider() {
  if (slides.length === 0) return;

  // 자동 슬라이드 시작
  startAutoSlide();

  // 마우스 호버 시 자동 슬라이드 일시정지
  const sliderContainer = document.querySelector(".image-slider-container");
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);
  }
}

// 자동 슬라이드 시작
function startAutoSlide() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 4000); // 4초마다 자동 전환
}

// 자동 슬라이드 정지
function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

// 슬라이드 변경
function changeSlide(direction) {
  stopAutoSlide();

  slides[currentSlideIndex].classList.remove("active");
  indicators[currentSlideIndex].classList.remove("active");

  currentSlideIndex += direction;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides[currentSlideIndex].classList.add("active");
  indicators[currentSlideIndex].classList.add("active");

  // 자동 슬라이드 재시작
  startAutoSlide();
}

// 특정 슬라이드로 이동
function currentSlide(slideNumber) {
  stopAutoSlide();

  slides[currentSlideIndex].classList.remove("active");
  indicators[currentSlideIndex].classList.remove("active");

  currentSlideIndex = slideNumber - 1;

  slides[currentSlideIndex].classList.add("active");
  indicators[currentSlideIndex].classList.add("active");

  // 자동 슬라이드 재시작
  startAutoSlide();
}

// 카드 뷰 변경 기능
function changeView(viewType) {
  // 모든 뷰 숨기기
  const views = document.querySelectorAll(".card-view");
  views.forEach((view) => view.classList.remove("active"));

  // 모든 버튼 비활성화
  const buttons = document.querySelectorAll(".view-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // 선택된 뷰 보이기
  const selectedView = document.getElementById(viewType + "-view");
  if (selectedView) {
    selectedView.classList.add("active");
  }

  // 선택된 버튼 활성화
  const selectedButton = event.target;
  selectedButton.classList.add("active");

  // 캐러셀 뷰인 경우 초기화
  if (viewType === "carousel") {
    initCarousel();
  }
}

// 캐러셀 기능
let currentCarouselIndex = 0;
const carouselSlides = document.querySelectorAll(".carousel-slide");
let carouselInterval;

function initCarousel() {
  if (carouselSlides.length === 0) return;

  // 캐러셀 자동 전환 시작
  startCarouselAutoSlide();

  // 마우스 호버 시 자동 전환 일시정지
  const carouselContainer = document.querySelector(".carousel-container");
  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", stopCarouselAutoSlide);
    carouselContainer.addEventListener("mouseleave", startCarouselAutoSlide);
  }
}

function startCarouselAutoSlide() {
  carouselInterval = setInterval(() => {
    carouselNext();
  }, 3000); // 3초마다 자동 전환
}

function stopCarouselAutoSlide() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

function carouselNext() {
  stopCarouselAutoSlide();

  const track = document.querySelector(".carousel-track");
  if (!track) return;

  currentCarouselIndex++;
  if (currentCarouselIndex >= carouselSlides.length) {
    currentCarouselIndex = 0;
  }

  track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;

  startCarouselAutoSlide();
}

function carouselPrev() {
  stopCarouselAutoSlide();

  const track = document.querySelector(".carousel-track");
  if (!track) return;

  currentCarouselIndex--;
  if (currentCarouselIndex < 0) {
    currentCarouselIndex = carouselSlides.length - 1;
  }

  track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;

  startCarouselAutoSlide();
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  initSlider();

  // 매슨리 레이아웃 초기화
  initMasonry();
});

// 매슨리 레이아웃 초기화
function initMasonry() {
  const masonryContainer = document.querySelector(".masonry-container");
  if (!masonryContainer) return;

  // 매슨리 아이템들의 높이를 동적으로 조정
  const masonryItems = document.querySelectorAll(".masonry-item");
  masonryItems.forEach((item, index) => {
    // 랜덤한 높이를 주어 매슨리 효과 강화
    const randomHeight = Math.random() * 100 + 200;
    item.style.height = randomHeight + "px";
  });
}

// 스크롤 애니메이션
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // 애니메이션할 요소들 관찰
  const animatedElements = document.querySelectorAll(
    ".card, .timeline-item, .masonry-item"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// 페이지 로드 완료 후 스크롤 애니메이션 초기화
window.addEventListener("load", initScrollAnimations);
