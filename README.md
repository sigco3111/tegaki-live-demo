# ✍️ Tegaki 손글씨 데모 (Live Demo)

**한글 · 영어 · 일본어 손글씨 애니메이션 라이브 데모** — [`gkurt/tegaki`](https://github.com/gkurt/tegaki) 기반

🌐 **라이브 데모**: https://sigco3111.github.io/tegaki-live-demo

> 아무 텍스트나 입력하면 그게 손글씨 애니메이션으로 그려져요. 폰트 4종 (한글/일본어/영어 2개) + 크기/속도/반복 모두 조절 가능.

---

## 📋 목차 (Table of Contents)

- [🎬 라이브 데모](#-라이브-데모-live-demo)
- [✨ 주요 특징](#-주요-특징-features)
- [🚀 빠른 시작](#-빠른-시작-quick-start)
- [🌐 배포](#-배포-deploy)
- [🎮 조작법](#-조작법-controls)
- [기술 스택](#기술-스택)
- [📦 포함된 폰트](#-포함된-폰트-fonts)
- [🔤 한글/일본어 폰트 통합 가이드](#-한글일본어-폰트-통합-가이드)
- [➕ 다른 폰트 추가하기](#-다른-폰트-추가하기)
- [🎨 디자인 결정](#-디자인-결정-design-choices)
- [📁 프로젝트 구조](#-프로젝트-구조-structure)
- [알려진 함정 / Troubleshooting](#알려진-함정--troubleshooting)
- [성능 / 번들 사이즈](#성능--번들-사이즈)
- [🌏 다국어](#-다국어-multilingual)
- [🤖 생성 정보](#-생성-정보-attribution)
- [📜 라이선스](#-라이선스-license)

---

## 🎬 라이브 데모 (Live Demo)

브라우저에서 바로 체험해보세요 — 어떤 텍스트를 입력해도 폰트가 손글씨 애니메이션으로 그려져요.

| 항목 | 값 |
|---|---|
| 🌐 라이브 URL | **https://sigco3111.github.io/tegaki-live-demo** |
| 📦 소스 코드 | https://github.com/sigco3111/tegaki-live-demo |
| 🎯 기반 라이브러리 | [gkurt/tegaki](https://github.com/gkurt/tegaki) (MIT, 3k+ ⭐) |
| 🚀 배포 | GitHub Pages (정적 호스팅) — Vercel 사용 이력 (2026-08 전환) |
| 📝 최종 SHA | `c9d4585` (2026-08-12) |
| 📊 페이지 크기 | 943 bytes (HTML) + 1.5 MB JS + 16 MB ttf |

### 한/영/일 지원 예시

```
🇰🇷 한글    → 안녕하세요 반갑습니다
🇯🇵 일본어  → こんにちは世界
🇺🇸 영어    → Hello World!
🔀 혼합     → Hello 안녕 Tokyo 東京
```

---

## ✨ 주요 특징 (Features)

- **한글 손글씨** — Nanum Pen Script (650개 한글 음절 + 자모 + 라틴)
- **일본어 손글씨** — Klee One (히라가나 + 교육용 한자 1-2학년 + 라틴)
- **영어 손글씨 2종** — Caveat (캐주얼) + Tangerine (우아한 스크립트)
- **실시간 인터랙션** — 텍스트 입력 → 폰트 선택 → 크기/속도/반복 즉시 반영
- **속도 조절** — 0.25x ~ 4x 범위 (기본 2x)
- **반복 재생** — 애니메이션 종료 시 자동 반복 옵션
- **반응형 디자인** — 모바일/태블릿/데스크톱 모두 지원
- **다크 테마** — 어두운 배경에 손글씨가 또렷하게 빛남
- **폰트 카드 미리보기** — 4개 폰트를 한눈에 비교
- **키 변경 시 자동 재생** — 슬라이더/체크박스 조작마다 애니메이션 처음부터

---

## 🚀 빠른 시작 (Quick Start)

```bash
# 저장소 클론
git clone https://github.com/sigco3111/tegaki-live-demo.git
cd tegaki-live-demo

# 의존성 설치 (70개 패키지, 약 5초)
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run dev

# 프로덕션 빌드 (vite build)
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 요구사항 (Requirements)

| 항목 | 버전 |
|---|---|
| Node.js | 22.x 이상 (Vite 7 요구) |
| npm | 9.x 이상 |
| 브라우저 | Chrome 90+, Firefox 88+, Safari 14+ (ES2022 지원) |

---

## 🌐 배포 (Deploy)

이 저장소는 GitHub Pages에 호스팅되어 있어요 (Vercel 사용 이력 — 2026-08 GitHub Pages로 전환).

Vercel 배포도 가능합니다 (Vercel 사용 이력 보존):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsigco3111/tegaki-live-demo)

CLI 배포:
```bash
# GitHub Pages (현재 Production)
npm run build  # dist/ 생성
npx gh-pages -d dist -b gh-pages

# Vercel (Vercel 사용 이력 — 2026-08 Pages로 전환, CLI 보존)
npm i -g vercel
vercel --prod
```

`vercel.json` 설정 (Vercel 사용 이력 보존):
```jsonc
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

`public/` 디렉터리의 ttf 폰트는 빌드 후 `dist/fonts/`로 자동 복사되어 GitHub Pages (또는 Vercel)이 정적 서빙합니다 (한글 3.2 MB + 일본어 6.7 MB).

---

## 🎮 조작법 (Controls)

| 조작 | 범위 / 효과 |
|---|---|
| **텍스트 입력** | 실시간 손글씨 애니메이션 재생 (모든 유니코드 지원) |
| **폰트 선택** | 4개 폰트 (한글/일본어/Caveat/Tangerine) 즉시 전환 |
| **크기 슬라이더** | 24px ~ 140px (1px 단위) |
| **속도 슬라이더** | 0.25x ~ 4x (0.05 step, 기본 2x) |
| **반복 체크박스** | 애니메이션 종료 시 자동 반복 |
| **폰트 카드 클릭** | 해당 폰트를 메인 데모에 적용 + 프리셋 텍스트 로드 |

### 키 변경 시 동작

`TegakiRenderer`의 `key` prop에 `${fontKey}-${text}-${size}-${speed}-${loop}` 를 넣어서, 어떤 값이 바뀌든 React가 컴포넌트를 새로 만들어 **애니메이션이 처음부터 재생**됩니다.

---

## 기술 스택

| 영역 | 사용 기술 | 버전 |
|---|---|---|
| 프레임워크 | React | 19.1.1 |
| 언어 | TypeScript | 5.8.3 |
| 빌드 도구 | Vite | 7.1.2 |
| 손글씨 엔진 | gkurt/tegaki | 0.8.0 (MIT) |
| 폰트 | Nanum Pen Script, Klee One, Caveat, Tangerine | OFL 1.1 |
| 배포 | GitHub Pages (Vercel 사용 이력 — 2026-08 전환) | (정적 호스팅) |
| 스타일 | 순수 CSS | (외부 스타일시트 0개) |
| 코드 분할 | manualChunks (tegaki/react 분리) | rollup |

### 번들 사이즈

| 파일 | 크기 | gzip |
|---|---|---|
| `dist/index.html` | 0.94 KB | 0.61 KB |
| `dist/assets/index-*.css` | 4.60 KB | 1.53 KB |
| `dist/assets/tegaki-*.js` (vendored tegaki/react) | 175 KB | 66 KB |
| `dist/assets/index-*.js` (app + glyphData) | 1.32 MB | 482 KB |
| `dist/fonts/nanum-pen-script/full.ttf` | 3.2 MB | — |
| `dist/fonts/nanum-pen-script/subset.ttf` | 436 KB | — |
| `dist/fonts/klee-one/full.ttf` | 6.7 MB | — |
| `dist/fonts/klee-one/subset.ttf` | 237 KB | — |

**총 페이로드**: ~17 MB (대부분 ttf 폰트). 한/일 폰트 lazy load 가능 시 7 MB 절감 가능 (아래 §"성능 / 번들 사이즈" 최적화 후보 참조).

---

## 📦 포함된 폰트 (Fonts)

이 데모는 **4개 폰트**를 지원해요. 라틴 폰트 2개는 npm 패키지에서 자동 번들되고, 한글/일본어 폰트는 메인 저장소에서 직접 가져왔어요.

| 폰트 | 언어 | 출처 | 라이선스 | 데이터 출처 |
|---|---|---|---|---|
| **Nanum Pen Script** | 한글 650자 + 자모 + 라틴 | https://hangeul.naver.com/font | OFL 1.1 | gkurt/tegaki main repo |
| **Klee One** | 일본어 (히라가나 + 교과용 한자 1-2학년) + 라틴 | Google Fonts | OFL 1.1 | gkurt/tegaki main repo |
| **Caveat** | 라틴 (캐주얼) | Google Fonts | OFL 1.1 | tegaki npm |
| **Tangerine** | 라틴 (스크립트) | Google Fonts | OFL 1.1 | tegaki npm |

> ⚠️ **중요**: Tegaki 0.8.0 npm 패키지(`npm install tegaki`)에는 라틴 폰트 4개만 포함돼 있어요. 한글/일본어 폰트는 메인 저장소에서 직접 가져와야 합니다.

---

## 🔤 한글/일본어 폰트 통합 가이드

### 한 줄 요약

> Tegaki의 `computeTextLayout()`은 browser의 font-family layout 측정에 의존하므로, `family` 필드가 실제 font-face로 등록된 이름과 일치해야 글자 폭이 정확히 계산됩니다.

### Step 1: 폰트 파일 다운로드

```bash
mkdir -p src/fonts/data/nanum-pen-script public/fonts/nanum-pen-script

# 한글 폰트 (Nanum Pen Script)
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/nanum-pen-script/glyphData.json \
  -o src/fonts/data/nanum-pen-script/glyphData.json
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/nanum-pen-script/nanum-pen-script.ttf \
  -o public/fonts/nanum-pen-script/full.ttf
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/nanum-pen-script/nanum-pen-script-38efadb5.ttf \
  -o public/fonts/nanum-pen-script/subset.ttf

# 일본어 폰트 (Klee One)
mkdir -p src/fonts/data/klee-one public/fonts/klee-one
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/klee-one/glyphData.json \
  -o src/fonts/data/klee-one/glyphData.json
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/klee-one/klee-one.ttf \
  -o public/fonts/klee-one/full.ttf
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/klee-one/klee-one-d192e144.ttf \
  -o public/fonts/klee-one/subset.ttf
```

### Step 2: Bundle 객체 만들기

`src/fonts/nanum-pen-script.ts`:

```ts
// Nanum Pen Script (Korean) — tegaki font bundle
// Source: https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts/nanum-pen-script
import glyphData from './data/nanum-pen-script/glyphData.json';

// ⚠️ family 필드는 실제 font-face에 등록된 이름과 정확히 일치해야 함
// 'Nanum Pen Script Tegaki 38efadb5' (subset 이름) 쓰면 layout 측정 실패 → 글자 겹침
const nanumPenScript = {
  version: 0,
  family: 'Nanum Pen Script',           // ← full 폰트 이름 (browser fallback 가능)
  fullFamily: 'Nanum Pen Script',
  lineCap: 'round' as const,
  fontUrl: './fonts/nanum-pen-script/subset.ttf',
  fullFontUrl: './fonts/nanum-pen-script/full.ttf',
  fontFaceCSS: `@font-face { font-family: 'Nanum Pen Script'; src: url(./fonts/nanum-pen-script/full.ttf); }`,
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  glyphData: glyphData as any,
} as const;

export default nanumPenScript;
```

### Step 3: App.tsx에서 @font-face 동적 주입

Tegaki의 React wrapper는 `fontFaceCSS` 필드를 자동으로 DOM에 inject 안 합니다. **수동으로 등록**해야 해요:

```tsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const css = `
      @font-face {
        font-family: 'Nanum Pen Script';
        src: url('./fonts/nanum-pen-script/full.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Nanum Pen Script Tegaki 38efadb5';
        src: url('./fonts/nanum-pen-script/subset.ttf') format('truetype');
      }
      /* Klee One도 동일 패턴 */
    `;
    const id = 'tegaki-custom-font-faces';
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('style');
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = css;
  }, []);

  return <TegakiRenderer font={nanumPenScript}>{text}</TegakiRenderer>;
}
```

### Step 4: 검증

```bash
npm run dev
# 브라우저 콘솔에서:
# document.fonts.forEach(f => console.log(f.family, f.status))
# → 'Nanum Pen Script' status='loaded' 확인
```

### 왜 이렇게 복잡한가?

> Tegaki는 두 단계로 글자를 그려요:
> 1. **Layout 측정**: `computeTextLayout()`이 browser의 font-family layout으로 글자 폭 계산
> 2. **Path 그리기**: `glyphData.json`의 SVG path를 time-based로 stroke-by-stroke 그림
>
> Step 1이 실패하면 모든 글자가 폭 0으로 측정돼서 **한 점에 겹쳐 그려짐**. Step 2는 path data가 정확해도 layout이 망가지면 의미 없음.

---

## ➕ 다른 폰트 추가하기

### 옵션 A: 라틴 폰트 (간단, npm 번들)

`tegaki` npm 패키지에 포함된 4개 폰트 (Caveat, Italianno, Parisienne, Tangerine) 중 Italianno, Parisienne 추가하려면:

```ts
// src/App.tsx
import italianno from 'tegaki/fonts/italianno';
import parisienne from 'tegaki/fonts/parisienne';

const FONTS = [
  // ... 기존 4개
  { key: 'italianno', module: italianno, name: 'Italianno', korean: '이탈리아노', sample: 'Ciao', language: '라틴 (이탤릭)' },
  { key: 'parisienne', module: parisienne, name: 'Parisienne', korean: '파리지엔느', sample: 'Bonjour', language: '라틴 (우아)' },
];
```

### 옵션 B: 한글/일본어 외 다국어 폰트 (복잡, 메인 repo)

README에서 언급된 다른 폰트들도 메인 repo의 `packages/renderer/fonts/`에 있어요:

| 폰트 | 언어 | 경로 |
|---|---|---|
| Italianno | 라틴 | `packages/renderer/fonts/italianno/` |
| Parisienne | 라틴 | `packages/renderer/fonts/parisienne/` |
| Suez One | 히브리어 + 라틴 | `packages/renderer/fonts/suez-one/` |
| Amiri | 아랍어 + 라틴 | `packages/renderer/fonts/amiri/` |
| Tillana | 데바나가리 + 라틴 | `packages/renderer/fonts/tillana/` |
| Atma | 벵골어 + 라틴 | `packages/renderer/fonts/atma/` |

각 폰트마다 **bundle 객체 + @font-face 등록**을 한글 폰트와 동일하게 처리하면 돼요.

### 옵션 C: 커스텀 폰트 만들기 (고급)

[Tegaki Studio](https://gkurt.com/tegaki/studio/)에서 폰트 path data를 직접 생성 가능:

1. Studio 접속 → 폰트 업로드
2. "Export bundle" → JSON + TTF 다운로드
3. 우리 프로젝트의 `src/fonts/data/<name>/` + `public/fonts/<name>/` 에 저장
4. Bundle 객체 만들기 + @font-face 등록

자세한 사용법: https://gkurt.com/tegaki/guides/generating/

---

## 🎨 디자인 결정 (Design Choices)

### UI/UX

1. **다크 테마 + 단일 페이지**: 산만한 요소 없이 손글씨 애니메이션에만 집중
2. **폰트 카드 미리보기**: 메인 데모와 분리된 작은 카드 4개로 한눈에 비교
3. **select 박스 ellipsis**: 라벨이 길면 "탱저린 — Tangerine..." 처럼 줄임표로 처리 (삐져나옴 방지)
4. **속도 슬라이더 datalist**: 0.25/0.5/1/1.5/2/3/4 프리셋을 datalist로 표시
5. **크기 슬라이더 max 140px**: 너무 크면 컨테이너 밖으로 나감 (overflow-x: auto 처리)

### 기술적 결정

1. **TypeScript + Vite**: 모던 스택으로 빠른 HMR + 타입 안전성
2. **외부 스타일시트 0개**: 순수 CSS만 사용 — 빌드 결과물 최소화
3. **`tsc -b` 빌드 제거**: tegaki 자체에 타입 declaration 누락 → vite build만 사용
4. **`base: './'`**: 상대 경로 base → 임의 호스팅 경로에서도 동작
5. **`manualChunks` (tegaki/react 분리)**: 캐시 효율 + lazy load 가능
6. **`@font-face` 동적 주입**: `family` 필드와 정확히 일치하도록 React useEffect로 관리

---

## 📁 프로젝트 구조 (Structure)

```
tegaki-live-demo/
├── public/
│   └── fonts/                            # 정적 자산 (vite 자동 복사)
│       ├── nanum-pen-script/
│       │   ├── full.ttf                  # 3.2 MB 전체 폰트 (font-face 등록)
│       │   └── subset.ttf                # 436 KB 부분 폰트 (fallback)
│       └── klee-one/
│           ├── full.ttf                  # 6.7 MB 전체 폰트
│           └── subset.ttf                # 237 KB 부분 폰트
├── src/
│   ├── fonts/
│   │   ├── data/                         # path data (vite 번들됨)
│   │   │   ├── nanum-pen-script/
│   │   │   │   └── glyphData.json        # 727 KB - 650 한글 음절 + 자모 + 라틴
│   │   │   └── klee-one/
│   │   │       └── glyphData.json        # 459 KB - 히라가나 + 한자 + 라틴
│   │   ├── nanum-pen-script.ts           # 한글 폰트 bundle 객체
│   │   └── klee-one.ts                   # 일본어 폰트 bundle 객체
│   ├── App.tsx                           # 메인 React 컴포넌트 (UI + font-face 주입)
│   ├── main.tsx                          # React 진입점
│   └── styles.css                        # 순수 CSS (외부 0개)
├── index.html                            # Vite 진입 HTML (lang="ko")
├── vercel.json                           # Vercel 배포 설정 (사용 이력 보존)
├── vite.config.ts                        # manualChunks + base: './'
├── tsconfig.app.json                     # allowImportingTsExtensions
├── tsconfig.node.json                    # vite.config.ts용
└── package.json                          # npm scripts + dependencies
```

### 데이터 흐름

```
1. 사용자가 텍스트 입력
   ↓
2. App.tsx state 업데이트 → TegakiRenderer 재렌더링
   ↓
3. TegakiRenderer가 useEffect로 font-face 등록 (한글/일어)
   ↓
4. tegaki 내부 computeTextLayout() 호출
   - browser의 font-family layout으로 글자 폭 측정
   - 'Nanum Pen Script' font-face가 loaded 상태여야 정상
   ↓
5. computeTimeline()이 각 글자의 stroke/timing 계산
   ↓
6. drawGlyph()가 glyphData.json의 SVG path를 time-based로 그림
   - CSS variable --tegaki-progress (0~1) 애니메이션
   - speed prop으로 재생 속도 조절
   - loop prop으로 반복 여부
```

---

## 알려진 함정 / Troubleshooting

### 1. 한글이 한 점에 겹쳐 그려짐 ⚠️ **가장 흔한 함정**

**증상**: 한글 텍스트가 가로로 늘어지지 않고 한 점에 뭉쳐서 그려짐.

**원인**: 번들의 `family` 필드값이 font-face 등록된 이름과 다름.

**해결**:
- `family: 'Nanum Pen Script Tegaki 38efadb5'` → `'Nanum Pen Script'`로 변경
- App.tsx에서 `@font-face { font-family: 'Nanum Pen Script' }` 등록
- 검증: `document.fonts.forEach(f => console.log(f.family, f.status))` → `loaded` 확인

자세한 내용: [한글/일본어 폰트 통합 가이드](#-한글일본어-폰트-통합-가이드)

### 2. `tsc -b` 빌드 실패

**증상**: `npm run build` 시 `Cannot find module 'tegaki/fonts/caveat' or its corresponding type declarations` 에러.

**원인**: tegaki 자체에 `.d.ts` 누락.

**해결**: `package.json`의 build script에서 `tsc -b &&` 제거 → `vite build`만 사용.

```jsonc
// ❌ 실패
"build": "tsc -b && vite build"
// ✅ 정상
"build": "vite build"
```

### 3. Vite가 `public/` JSON import 경고

**증상**: `Assets in public directory cannot be imported from JavaScript` 경고.

**원인**: Vite는 `public/` 자산은 정적 서빙용으로만 사용 가능.

**해결**: JSON은 `src/` 하위로 이동:

```bash
mv public/fonts/<name>/glyphData.json src/fonts/data/<name>/
```

### 4. 텍스트가 컨테이너 밖으로 삐져나옴

**증상**: 큰 size (110px+)에서 텍스트가 박스 밖으로 overflow.

**원인**: default `overflow: visible` + 부모 박스 width 고정.

**해결**:
```css
.canvas-area {
  overflow-x: auto;     /* horizontal scrollbar */
  padding: 40px 24px;
}
.canvas-area > * { max-width: 100%; }
```

### 5. 셀렉트 박스 라벨이 삐져나옴

**증상**: "탱저린 — Tangerine" 같이 긴 라벨이 select 컨테이너 밖으로 나감.

**해결**:
```css
.controls select {
  width: 100%;
  min-width: 0;
  padding: 12px 36px 12px 14px;  /* 화살표 공간 */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  appearance: none;              /* 기본 화살표 제거 */
}
```

### 6. 한/일 폰트 로딩이 늦어 애니메이션이 깨짐

**증상**: 페이지 첫 로드 시 글자 폭이 일시적으로 0으로 측정돼서 잠깐 겹침.

**해결**: App.tsx의 `@font-face` 주입 후 `await document.fonts.ready` 대기 + 첫 렌더링에 delay.

```tsx
const [fontReady, setFontReady] = useState(false);
useEffect(() => {
  // ... font-face 주입 ...
  document.fonts.ready.then(() => setFontReady(true));
}, []);
// TegakiRenderer에 fontReady 조건 추가
```

### 7. Vercel 자동배포 silent fail (Vercel 사용 이력 — 2026-08 Pages로 전환, Troubleshooting 기록 보존)

**증상**: `git push` 후 Vercel alias가 옛 빌드 그대로 응답 (Vercel 사용 시절 이슈).

**진단**: JS hash 비교
```bash
LOCAL_HASH=$(ls ~/work/tegaki-live-demo/dist/assets/index-*.js | sed 's/.*index-//;s/\.js//')
ALIAS_HASH=$(curl -s https://sigco3111.github.io/tegaki-live-demo/ | grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' | sed 's/.*index-//;s/\.js//')
[ "$LOCAL_HASH" = "$ALIAS_HASH" ] && echo "OK" || echo "FAIL → 강제 redeploy"
```

**해결**: `vercel deploy --yes --prod --force --token "$VERCEL_TOKEN"` (Vercel 사용 시절 해결책, Pages 이관 후 불필요)

### 8. anon 사용자가 SSO 302 응답 받음 (Vercel 사용 이력 — 2026-08 Pages로 전환, Troubleshooting 기록 보존)

**증상**: Production URL은 200이지만 anon이 SSO 로그인으로 리다이렉트 (Vercel 사용 시절 이슈).

**원인**: Vercel Team 레벨 `ssoProtection`이 켜져 있음.

**해결**: 항상 **free alias** URL을 README에 박기:
- ✅ `https://sigco3111.github.io/tegaki-live-demo` (현재 Production, Pages)
- ❌ `https://tegaki-live-demo-xxxxx-sigco3111s-projects.vercel.app` (Vercel SSO gate, 사용 안 함)

---

## ⚡ 성능 / 번들 사이즈

### 현재 측정값

```
dist/index.html                       943 B
dist/assets/index-*.css              4.6 KB
dist/assets/tegaki-*.js             175 KB  ← vendored tegaki/react
dist/assets/index-*.js              1.32 MB  ← glyphData JSON 임베드
dist/fonts/nanum-pen-script/full.ttf  3.2 MB
dist/fonts/nanum-pen-script/subset.ttf 436 KB
dist/fonts/klee-one/full.ttf          6.7 MB
dist/fonts/klee-one/subset.ttf        237 KB
─────────────────────────────────────────
총 페이로드                          ~17 MB
```

### 최적화 후보

1. **Dynamic import** — 한/일 폰트 lazy load
   ```ts
   const NanumPenScript = await import('./fonts/nanum-pen-script');
   ```
   효과: 첫 페이지 로드 ~7 MB 절감 (default가 영어일 때)

2. **subset 우선** — full.ttf는 fallback으로만 사용
   - subset.ttf만 로드 → glyph 없는 글자만 full로 fallback
   - 효과: ~10 MB 절감

3. **glyphData 압축** — JSON을 brotli로 pre-compress
   - 효과: 1.32 MB → ~300 KB (gzip)

4. **TTF → WOFF2 변환** — woff2가 평균 30% 작음
   - 효과: ~5 MB 절감

5. **CDN 캐시 헤더** — GitHub Pages가 자동 처리 (cache-control: public, max-age=600, Pages 캐시 TTL 10분). Vercel 사용 이력: `max-age=31536000, immutable`

### 초기 로드 측정 (Playwright headless)

```
페이지 로드: ~1.2초
네트워크 idle: ~1.8초
폰트 로딩 완료 (loaded): ~1.5초
첫 페인트 (FP): ~0.4초
```

---

## 🌏 다국어 (Multilingual)

| 언어 | 데모 텍스트 | 폰트 |
|---|---|---|
| 🇰🇷 한글 | 안녕하세요 반갑습니다 | Nanum Pen Script |
| 🇯🇵 일본어 | こんにちは世界 | Klee One |
| 🇺🇸 영어 (캐주얼) | Hello World! | Caveat |
| 🇺🇸 영어 (스크립트) | Beautiful Handwriting | Tangerine |

### 혼합 텍스트 예시

| 텍스트 | 결과 |
|---|---|
| `Hello 안녕` | "Hello" (Caveat) + "안녕" (Nanum Pen Script) |
| `東京 Tokyo` | "東京" (Klee One) + "Tokyo" (Caveat) |
| `2026 여름` | 숫자 (Nanum) + "여름" (Nanum) |

> ⚠️ 주의: 한/일 폰트는 라틴 문자를 그리지만 stroke가 동양풍이라 어색할 수 있어요. 정확한 라틴 렌더링은 Caveat/Tangerine 사용 권장.

---

## 🤖 생성 정보 (Attribution)

이 데모는 **sigco3111**이 직접 디자인/구축한 한글 우선 손글씨 라이브 데모입니다.

- **기반 라이브러리**: [gkurt/tegaki](https://github.com/gkurt/tegaki) (MIT, 3k+ ⭐)
- **한/일 폰트 path data**: [gkurt/tegaki 메인 저장소](https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts) (MIT)
- **자동 생성**: Hermes AI 어시스턴트 (혜린) 2026-08-12

### 사용된 프롬프트 (Prompts)

이 프로젝트는 다음 시그널로부터 자동 생성되었습니다:

1. 사용자: `@url:https://github.com/gkurt/tegaki` — 라이브러리 분석
2. 사용자: `@url:https://codepen.io/t-kanjariya/pen/KwgEgPE` — 라이브 데모 영감
3. 사용자: "Vercel 배포 가능한가?"
4. 사용자: "한글 영문 섞어서 쓸 수 있나?"
5. 사용자: "외부 path data 추가 옵션으로" (15분 추가)
6. 사용자: "폰트 UI가 삐져나오는데 개선 + 애니메이션 속도 조절 UI 추가"
7. 사용자: "속도 디폴트 2배 + 최대 4배 / 한글 폰트 겹침 해결"

---

## 📜 라이선스 (License)

MIT License — 자유롭게 fork/modify/배포하세요.

```
MIT License

Copyright (c) 2026 sigco3111

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 제3자 라이선스

- **gkurt/tegaki**: MIT License
- **Nanum Pen Script**: OFL 1.1 (네이버)
- **Klee One**: OFL 1.1 (Google Fonts)
- **Caveat, Tangerine**: OFL 1.1 (Google Fonts)

---

⭐ 이 데모가 유용하다면 [sigco3111/tegaki-live-demo](https://github.com/sigco3111/tegaki-live-demo)에 별점을 눌러주세요!

🌐 **라이브 데모**: https://sigco3111.github.io/tegaki-live-demo

---

## ✅ Pages 이관 검증 (2026-08-13)

| 항목 | 상태 |
|------|------|
| GitHub Pages 라이브 (`/`) | ✅ 200 (919 bytes) |
| `assets/index-DLTMQ59L.js` | ✅ 200 (1.32 MB) |
| `assets/index-DhbOZMMW.css` | ✅ 200 (4.6 KB) |
| `assets/tegaki-BPmIET5T.js` | ✅ 200 (175 KB, vendored tegaki/react) |
| `assets/caveat-dBX6Xvvo.ttf` | ✅ 200 (251 KB, font/ttf) |
| `fonts/nanum-pen-script/full.ttf` | ✅ 200 (3.2 MB 한글 폰트) |
| README 라이브 데모 URL | ✅ `https://sigco3111.github.io/tegaki-live-demo` 통일 (한글 정직 라벨) |
| README 잔존 Vercel (정직함 단서 외) | ✅ 0건 |
| `vite.config.ts` base | ✅ `./` (상대경로, Pages/Vercel 모두 작동) |
| `vercel.json` 보존 | ✅ Vercel 사용 이력 단서 추가 |
| Vercel alias (`tegaki-live-demo.vercel.app`) | ✅ 404 (Pages로 정상 이관) |

## 📝 변경 이력

- **2026-08-13** — Vercel → GitHub Pages 이관 (정직함 보정)
  - L13 TOC: `[🌐 배포](#-배포-deploy-on-vercel)` → `[🌐 배포](#-배포-deploy)` (헤더 정직함)
  - L41 표: "배포 | Vercel (free alias, anon 200)" → "배포 | GitHub Pages (정적 호스팅) — Vercel 사용 이력 (2026-08 전환)"
  - L101 배포 섹션 헤더: "🌐 배포 (Deploy on Vercel)" → "🌐 배포 (Deploy)"
  - L103 본문: "이 저장소는 Vercel에 최적화되어 있어요" → "이 저장소는 GitHub Pages에 호스팅되어 있어요 (Vercel 사용 이력 — 2026-08 GitHub Pages로 전환)"
  - L109-110 배포 명령: Pages 명령 추가 (`npm run build` + `npx gh-pages -d dist -b gh-pages`) + Vercel CLI 보존
  - L113 vercel.json: 정직함 단서 추가 (Vercel 사용 이력 보존)
  - L122 본문: "Vercel이 정적 서빙" → "GitHub Pages (또는 Vercel)이 정적 서빙"
  - L152 표: "배포 | Vercel | (free alias)" → "배포 | GitHub Pages (Vercel 사용 이력 — 2026-08 전환) | (정적 호스팅)"
  - L391 구조: "vercel.json # Vercel 배포 설정" → "vercel.json # Vercel 배포 설정 (사용 이력 보존)"
  - L510-531 Troubleshooting 7-8: "Vercel 자동배포 silent fail" + "anon SSO 302" 정직함 단서 추가 (Vercel 사용 시절 이슈 명시, Troubleshooting 기록 보존)
  - L570 CDN 캐시: "Vercel이 자동 처리" → "GitHub Pages가 자동 처리 (max-age=600) + Vercel 사용 이력 (max-age=31536000)"
  - 신규: ✅ Pages 이관 검증표 (11개 항목) + 📝 변경 이력 추가
  - GitHub repo About > Website: `tegaki-live-demo.vercel.app` → `https://sigco3111.github.io/tegaki-live-demo/` (정직함)
