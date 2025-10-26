# Google Search Console 등록 가이드

## 1. Google Search Console 접속

- https://search.google.com/search-console 접속
- Google 계정으로 로그인

## 2. 속성 추가

- "속성 추가" 버튼 클릭
- "URL 접두어" 선택
- 사이트 URL 입력: `https://sirung2.github.io`

## 3. 소유권 확인 방법

### 방법 1: HTML 파일 업로드 (권장)

1. Google에서 제공하는 HTML 파일 다운로드
2. `static/` 폴더에 업로드
3. 사이트 배포 후 확인

### 방법 2: HTML 태그 사용

1. Google에서 제공하는 메타 태그 복사
2. `layouts/partials/head.html` 파일에 추가
3. 사이트 배포 후 확인

### 방법 3: Google Analytics 연동

1. Google Analytics 계정 생성
2. 추적 코드를 사이트에 추가
3. Search Console에서 Analytics 연동

## 4. 사이트맵 제출

1. 소유권 확인 완료 후
2. "사이트맵" 메뉴 클릭
3. 새 사이트맵 추가: `sitemap.xml`
4. 제출

## 5. 색인 요청

1. "URL 검사" 도구 사용
2. 주요 페이지 URL 입력
3. "색인 요청" 클릭

## 6. SEO 모니터링

- 색인 상태 확인
- 검색 성능 분석
- "전북대 김시현" 키워드 순위 모니터링

## 주의사항

- 사이트 배포 후 24-48시간 소요
- 정기적인 콘텐츠 업데이트 권장
- 백링크 구축을 통한 SEO 강화
