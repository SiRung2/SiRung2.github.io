---
widget: blank
headless: false
active: true
weight: 25
title: "Personal Information Cards"
subtitle: "Check out various topics in card format"

design:
  columns: "1"
  background:
    color: "#f8fff8"
  spacing:
    padding: ["20px", "0", "20px", "0"]
---

<!-- 카드 뷰 선택 버튼 -->
<div class="view-selector mb-4">
  <button class="view-btn active" onclick="changeView('grid')">Grid View</button>
  <button class="view-btn" onclick="changeView('masonry')">Masonry View</button>
  <button class="view-btn" onclick="changeView('carousel')">Carousel View</button>
  <button class="view-btn" onclick="changeView('timeline')">Timeline View</button>
</div>

<!-- 그리드 뷰 -->
<div id="grid-view" class="card-view active">
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🎯 Goals</h5>
          <p class="card-text">My goal is to contribute to 3 open source projects by 2026 and launch my own GPT API-based application.</p>
          <a href="/goal/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">💻 Tech Stack</h5>
          <p class="card-text">I am familiar with various programming languages and development environments including Python, C, C++, Linux, and Java.</p>
          <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🔬 Research Interests</h5>
          <p class="card-text">I have a deep interest in Artificial Intelligence, Game Development, and Backend Development, and I continue to learn.</p>
          <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🎵 Hobbies</h5>
          <p class="card-text">I maintain life balance through various hobbies including music listening, gaming, exercise, and bass playing.</p>
          <a href="/hobby/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🎓 Education</h5>
          <p class="card-text">I am currently studying Computer Engineering at Jeonbuk National University, receiving systematic computer science education.</p>
          <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🚀 Projects</h5>
          <p class="card-text">I have worked on various projects including portfolio website, Discord bot, and AI music score generation program.</p>
          <a href="/project/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 매슨리 뷰 -->
<div id="masonry-view" class="card-view">
  <div class="masonry-container">
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🎯 Goals</h5>
          <p class="card-text">My goal is to contribute to 3 open source projects by 2026 and launch my own GPT API-based application.</p>
          <a href="/goal/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">💻 Tech Stack</h5>
          <p class="card-text">I am familiar with various programming languages and development environments including Python, C, C++, Linux, and Java.</p>
          <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🔬 Research Interests</h5>
          <p class="card-text">I have a deep interest in Artificial Intelligence, Game Development, and Backend Development, and I continue to learn.</p>
          <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🎵 Hobbies</h5>
          <p class="card-text">I maintain life balance through various hobbies including music listening, gaming, exercise, and bass playing.</p>
          <a href="/hobby/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🎓 Education</h5>
          <p class="card-text">I am currently studying Computer Engineering at Jeonbuk National University, receiving systematic computer science education.</p>
          <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🚀 Projects</h5>
          <p class="card-text">I have worked on various projects including portfolio website, Discord bot, and AI music score generation program.</p>
          <a href="/project/" class="btn btn-outline-secondary">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 캐러셀 뷰 -->
<div id="carousel-view" class="card-view">
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div class="carousel-track">
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🎯 Goals</h5>
              <p class="card-text">My goal is to contribute to 3 open source projects by 2026 and launch my own GPT API-based application.</p>
              <a href="/goal/" class="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">💻 Tech Stack</h5>
              <p class="card-text">I am familiar with various programming languages and development environments including Python, C, C++, Linux, and Java.</p>
              <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🔬 Research Interests</h5>
              <p class="card-text">I have a deep interest in Artificial Intelligence, Game Development, and Backend Development, and I continue to learn.</p>
              <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🎵 Hobbies</h5>
              <p class="card-text">I maintain life balance through various hobbies including music listening, gaming, exercise, and bass playing.</p>
              <a href="/hobby/" class="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🎓 Education</h5>
              <p class="card-text">I am currently studying Computer Engineering at Jeonbuk National University, receiving systematic computer science education.</p>
              <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🚀 Projects</h5>
              <p class="card-text">I have worked on various projects including portfolio website, Discord bot, and AI music score generation program.</p>
              <a href="/project/" class="btn btn-outline-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <button class="carousel-btn prev" onclick="carouselPrev()">❮</button>
      <button class="carousel-btn next" onclick="carouselNext()">❯</button>
    </div>
  </div>
</div>

<!-- 타임라인 뷰 -->
<div id="timeline-view" class="card-view">
  <div class="timeline-container">
    <div class="timeline-item">
      <div class="timeline-marker">🎯</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">Goals</h5>
            <p class="card-text">My goal is to contribute to 3 open source projects by 2026 and launch my own GPT API-based application.</p>
            <a href="/goal/" class="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">💻</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">Tech Stack</h5>
            <p class="card-text">I am familiar with various programming languages and development environments including Python, C, C++, Linux, and Java.</p>
            <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🔬</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">Research Interests</h5>
            <p class="card-text">I have a deep interest in Artificial Intelligence, Game Development, and Backend Development, and I continue to learn.</p>
            <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🎵</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">Hobbies</h5>
            <p class="card-text">I maintain life balance through various hobbies including music listening, gaming, exercise, and bass playing.</p>
            <a href="/hobby/" class="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🎓</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">Education</h5>
            <p class="card-text">I am currently studying Computer Engineering at Jeonbuk National University, receiving systematic computer science education.</p>
            <a href="/about/" class="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🚀</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">Projects</h5>
            <p class="card-text">I have worked on various projects including portfolio website, Discord bot, and AI music score generation program.</p>
            <a href="/project/" class="btn btn-outline-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// 카드 뷰 변경 기능
function changeView(viewType) {
  // 모든 뷰 숨기기
  const views = document.querySelectorAll('.card-view');
  views.forEach(view => view.classList.remove('active'));
  
  // 모든 버튼 비활성화
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // 선택된 뷰 보이기
  const selectedView = document.getElementById(viewType + '-view');
  if (selectedView) {
    selectedView.classList.add('active');
  }
  
  // 선택된 버튼 활성화
  const selectedButton = event.target;
  selectedButton.classList.add('active');
  
  // 캐러셀 뷰인 경우 초기화
  if (viewType === 'carousel') {
    initCarousel();
  }
  
  // 매슨리 뷰인 경우 초기화
  if (viewType === 'masonry') {
    initMasonry();
  }
}

// 캐러셀 기능
let currentCarouselIndex = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');
let carouselInterval;

function initCarousel() {
  if (carouselSlides.length === 0) return;
  
  // 캐러셀 자동 전환 시작
  startCarouselAutoSlide();
  
  // 마우스 호버 시 자동 전환 일시정지
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarouselAutoSlide);
    carouselContainer.addEventListener('mouseleave', startCarouselAutoSlide);
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
  
  const track = document.querySelector('.carousel-track');
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
  
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  
  currentCarouselIndex--;
  if (currentCarouselIndex < 0) {
    currentCarouselIndex = carouselSlides.length - 1;
  }
  
  track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
  
  startCarouselAutoSlide();
}

// 매슨리 레이아웃 초기화
function initMasonry() {
  const masonryContainer = document.querySelector('.masonry-container');
  if (!masonryContainer) return;
  
  // 매슨리 아이템들의 높이를 동적으로 조정
  const masonryItems = document.querySelectorAll('.masonry-item');
  masonryItems.forEach((item, index) => {
    // 랜덤한 높이를 주어 매슨리 효과 강화
    const randomHeight = Math.random() * 100 + 200;
    item.style.height = randomHeight + 'px';
  });
}

// 스크롤 애니메이션
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 애니메이션할 요소들 관찰
  const animatedElements = document.querySelectorAll('.card, .timeline-item, .masonry-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
});
</script>
