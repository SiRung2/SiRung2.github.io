---
widget: blank
headless: false
active: true
weight: 25
title: "김시현 포트폴리오 카드"
subtitle: "다양한 뷰 방식으로 정보를 확인하세요"

design:
  columns: "1"
  background:
    color: "#f8fff8"
  spacing:
    padding: ["20px", "0", "20px", "0"]
---


<div class="view-selector mb-4">
  <button class="view-btn active" onclick="changeView('grid')">그리드 뷰</button>
  <button class="view-btn" onclick="changeView('masonry')">매슨리 뷰</button>
  <button class="view-btn" onclick="changeView('carousel')">캐러셀 뷰</button>
  <button class="view-btn" onclick="changeView('timeline')">타임라인 뷰</button>
</div>


<div id="grid-view" class="card-view active">
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🎯 목표</h5>
          <p class="card-text">2026년까지 오픈소스 프로젝트 3개 기여하고, GPT API 기반 앱을 직접 런칭하는 것이 목표입니다.</p>
          <a href="/goal/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">💻 기술 스택</h5>
          <p class="card-text">Python, C, C++, Linux, Java 등 다양한 프로그래밍 언어와 개발 환경에 익숙합니다.</p>
          <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🔬 관심 분야</h5>
          <p class="card-text">인공지능, 게임개발, 백엔드 개발에 깊은 관심을 가지고 있으며 지속적으로 학습하고 있습니다.</p>
          <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🎵 취미</h5>
          <p class="card-text">음악 감상, 게임, 운동, 베이스 연주 등 다양한 취미를 통해 삶의 균형을 유지하고 있습니다.</p>
          <a href="/hobby/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🎓 교육</h5>
          <p class="card-text">전북대학교 컴퓨터공학부에 재학 중이며, 체계적인 컴퓨터 공학 교육을 받고 있습니다.</p>
          <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card widget-card h-100">
        <div class="card-body">
          <h5 class="card-title">🚀 프로젝트</h5>
          <p class="card-text">포트폴리오 사이트, 디스코드 봇, AI 채보 프로그램 등 다양한 프로젝트를 진행했습니다.</p>
          <a href="/project/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="masonry-view" class="card-view">
  <div class="masonry-container">
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🎯 목표</h5>
          <p class="card-text">2026년까지 오픈소스 프로젝트 3개 기여하고, GPT API 기반 앱을 직접 런칭하는 것이 목표입니다.</p>
          <a href="/goal/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">💻 기술 스택</h5>
          <p class="card-text">Python, C, C++, Linux, Java 등 다양한 프로그래밍 언어와 개발 환경에 익숙합니다.</p>
          <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🔬 관심 분야</h5>
          <p class="card-text">인공지능, 게임개발, 백엔드 개발에 깊은 관심을 가지고 있으며 지속적으로 학습하고 있습니다.</p>
          <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🎵 취미</h5>
          <p class="card-text">음악 감상, 게임, 운동, 베이스 연주 등 다양한 취미를 통해 삶의 균형을 유지하고 있습니다.</p>
          <a href="/hobby/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🎓 교육</h5>
          <p class="card-text">전북대학교 컴퓨터공학부에 재학 중이며, 체계적인 컴퓨터 공학 교육을 받고 있습니다.</p>
          <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
    <div class="masonry-item">
      <div class="card widget-card">
        <div class="card-body">
          <h5 class="card-title">🚀 프로젝트</h5>
          <p class="card-text">포트폴리오 사이트, 디스코드 봇, AI 채보 프로그램 등 다양한 프로젝트를 진행했습니다.</p>
          <a href="/project/" class="btn btn-outline-secondary">자세히 보기</a>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="carousel-view" class="card-view">
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div class="carousel-track">
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🎯 목표</h5>
              <p class="card-text">2026년까지 오픈소스 프로젝트 3개 기여하고, GPT API 기반 앱을 직접 런칭하는 것이 목표입니다.</p>
              <a href="/goal/" class="btn btn-outline-secondary">자세히 보기</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">💻 기술 스택</h5>
              <p class="card-text">Python, C, C++, Linux, Java 등 다양한 프로그래밍 언어와 개발 환경에 익숙합니다.</p>
              <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🔬 관심 분야</h5>
              <p class="card-text">인공지능, 게임개발, 백엔드 개발에 깊은 관심을 가지고 있으며 지속적으로 학습하고 있습니다.</p>
              <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🎵 취미</h5>
              <p class="card-text">음악 감상, 게임, 운동, 베이스 연주 등 다양한 취미를 통해 삶의 균형을 유지하고 있습니다.</p>
              <a href="/hobby/" class="btn btn-outline-secondary">자세히 보기</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🎓 교육</h5>
              <p class="card-text">전북대학교 컴퓨터공학부에 재학 중이며, 체계적인 컴퓨터 공학 교육을 받고 있습니다.</p>
              <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="card widget-card">
            <div class="card-body">
              <h5 class="card-title">🚀 프로젝트</h5>
              <p class="card-text">포트폴리오 사이트, 디스코드 봇, AI 채보 프로그램 등 다양한 프로젝트를 진행했습니다.</p>
              <a href="/project/" class="btn btn-outline-secondary">자세히 보기</a>
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


<div id="timeline-view" class="card-view">
  <div class="timeline-container">
    <div class="timeline-item">
      <div class="timeline-marker">🎯</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">목표</h5>
            <p class="card-text">2026년까지 오픈소스 프로젝트 3개 기여하고, GPT API 기반 앱을 직접 런칭하는 것이 목표입니다.</p>
            <a href="/goal/" class="btn btn-outline-secondary">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">💻</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">기술 스택</h5>
            <p class="card-text">Python, C, C++, Linux, Java 등 다양한 프로그래밍 언어와 개발 환경에 익숙합니다.</p>
            <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🔬</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">관심 분야</h5>
            <p class="card-text">인공지능, 게임개발, 백엔드 개발에 깊은 관심을 가지고 있으며 지속적으로 학습하고 있습니다.</p>
            <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🎵</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">취미</h5>
            <p class="card-text">음악 감상, 게임, 운동, 베이스 연주 등 다양한 취미를 통해 삶의 균형을 유지하고 있습니다.</p>
            <a href="/hobby/" class="btn btn-outline-secondary">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🎓</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">교육</h5>
            <p class="card-text">전북대학교 컴퓨터공학부에 재학 중이며, 체계적인 컴퓨터 공학 교육을 받고 있습니다.</p>
            <a href="/about/" class="btn btn-outline-secondary">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker">🚀</div>
      <div class="timeline-content">
        <div class="card widget-card">
          <div class="card-body">
            <h5 class="card-title">프로젝트</h5>
            <p class="card-text">포트폴리오 사이트, 디스코드 봇, AI 채보 프로그램 등 다양한 프로젝트를 진행했습니다.</p>
            <a href="/project/" class="btn btn-outline-secondary">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function changeView(viewType) {
  const views = document.querySelectorAll('.card-view');
  views.forEach(view => view.classList.remove('active'));
  
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  const selectedView = document.getElementById(viewType + '-view');
  if (selectedView) {
    selectedView.classList.add('active');
  }
  
  const selectedButton = event.target;
  selectedButton.classList.add('active');
  
  if (viewType === 'carousel') {
    initCarousel();
  }
  

  if (viewType === 'masonry') {
    initMasonry();
  }
}


let currentCarouselIndex = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');
let carouselInterval;

function initCarousel() {
  if (carouselSlides.length === 0) return;
  

  startCarouselAutoSlide();
  
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarouselAutoSlide);
    carouselContainer.addEventListener('mouseleave', startCarouselAutoSlide);
  }
}

function startCarouselAutoSlide() {
  carouselInterval = setInterval(() => {
    carouselNext();
  }, 3000);
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

function initMasonry() {
  const masonryContainer = document.querySelector('.masonry-container');
  if (!masonryContainer) return;
  
  const masonryItems = document.querySelectorAll('.masonry-item');
  masonryItems.forEach((item, index) => {
    
    const randomHeight = Math.random() * 100 + 200;
    item.style.height = randomHeight + 'px';
  });
}

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
  
  const animatedElements = document.querySelectorAll('.card, .timeline-item, .masonry-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
});
</script>
