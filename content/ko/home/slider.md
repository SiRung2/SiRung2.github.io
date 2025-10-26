---
widget: blank
headless: false
active: true
weight: 5
title: "전북대 김시현 포트폴리오 갤러리"
subtitle: "자동으로 전환되는 이미지 슬라이더"

design:
  columns: "1"
  background:
    color: "#f0fff0"
  spacing:
    padding: ["40px", "0", "40px", "0"]
---

<div class="image-slider-container">
  <div class="slider-wrapper">
    <div class="slider">
      <div class="slide active">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="전북대 김시현 - 웹 개발 프로젝트">
        <div class="slide-content">
          <h3>웹 개발 프로젝트</h3>
          <p>Hugo 기반 포트폴리오 사이트 개발</p>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="전북대 김시현 - AI 개발">
        <div class="slide-content">
          <h3>AI 개발</h3>
          <p>머신러닝과 딥러닝 프로젝트</p>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="전북대 김시현 - 게임 개발">
        <div class="slide-content">
          <h3>게임 개발</h3>
          <p>Unity와 C#을 활용한 게임 프로젝트</p>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="전북대 김시현 - 오픈소스 기여">
        <div class="slide-content">
          <h3>오픈소스 기여</h3>
          <p>GitHub에서 활발한 오픈소스 활동</p>
        </div>
      </div>
    </div>
    
    <!-- 슬라이더 네비게이션 -->
    <div class="slider-nav">
      <button class="nav-btn prev" onclick="changeSlide(-1)">❮</button>
      <button class="nav-btn next" onclick="changeSlide(1)">❯</button>
    </div>
    
    <!-- 슬라이더 인디케이터 -->
    <div class="slider-indicators">
      <span class="indicator active" onclick="currentSlide(1)"></span>
      <span class="indicator" onclick="currentSlide(2)"></span>
      <span class="indicator" onclick="currentSlide(3)"></span>
      <span class="indicator" onclick="currentSlide(4)"></span>
    </div>
  </div>
</div>

<script>
// 이미지 슬라이더 자동 전환 기능
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let slideInterval;

// 슬라이더 초기화
function initSlider() {
  if (slides.length === 0) return;
  
  // 자동 슬라이드 시작
  startAutoSlide();
  
  // 마우스 호버 시 자동 슬라이드 일시정지
  const sliderContainer = document.querySelector('.image-slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
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
  
  slides[currentSlideIndex].classList.remove('active');
  indicators[currentSlideIndex].classList.remove('active');
  
  currentSlideIndex += direction;
  
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  
  slides[currentSlideIndex].classList.add('active');
  indicators[currentSlideIndex].classList.add('active');
  
  // 자동 슬라이드 재시작
  startAutoSlide();
}

// 특정 슬라이드로 이동
function currentSlide(slideNumber) {
  stopAutoSlide();
  
  slides[currentSlideIndex].classList.remove('active');
  indicators[currentSlideIndex].classList.remove('active');
  
  currentSlideIndex = slideNumber - 1;
  
  slides[currentSlideIndex].classList.add('active');
  indicators[currentSlideIndex].classList.add('active');
  
  // 자동 슬라이드 재시작
  startAutoSlide();
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
  initSlider();
});
</script>
