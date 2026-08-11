# ✍️ Tegaki 손글씨 데모 (Live Demo)

**한글 · 영어 · 일본어 손글씨 애니메이션 라이브 데모** — [`gkurt/tegaki`](https://github.com/gkurt/tegaki) 기반

🌐 **라이브 데모**: https://tegaki-live-demo.vercel.app

---

## 🎬 라이브 데모 (Live Demo)

브라우저에서 바로 체험해보세요 — 어떤 텍스트를 입력해도 폰트가 손글씨 애니메이션으로 그려져요.

| 항목 | 값 |
|---|---|
| 🌐 라이브 URL | https://tegaki-live-demo.vercel.app |
| 📦 소스 코드 | https://github.com/sigco3111/tegaki-live-demo |
| 🎯 기반 라이브러리 | [gkurt/tegaki](https://github.com/gkurt/tegaki) (MIT) |
| 🚀 배포 | Vercel (free alias, anon 200) |

---

## ✨ 주요 특징 (Features)

- **한글 손글씨** — Nanum Pen Script 폰트로 한글 손글씨 애니메이션
- **일본어 손글씨** — Klee One 폰트로 히라가나 + 교육용 한자 손글씨
- **영어 손글씨 2종** — Caveat (캐주얼) + Tangerine (우아한 스크립트)
- **실시간 인터랙션** — 텍스트 입력 → 폰트 선택 → 크기 조절 즉시 반영
- **반응형 디자인** — 모바일/태블릿/데스크톱 모두 지원
- **다크 테마** — 어두운 배경에 손글씨가 또렷하게 빛남

---

## 🚀 빠른 시작 (Quick Start)

```bash
# 저장소 클론
git clone https://github.com/sigco3111/tegaki-live-demo.git
cd tegaki-live-demo

# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build
```

## 🌐 배포 (Deploy on Vercel)

이 저장소는 Vercel에 최적화되어 있어요. 버튼 한 번이면 됩니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsigco3111%2Ftegaki-live-demo)

또는 CLI로:
```bash
npm i -g vercel
vercel --prod
```

---

## 🛠️ 기술 스택 (Tech Stack)

| 영역 | 사용 기술 |
|---|---|
| 프레임워크 | React 19 + TypeScript |
| 빌드 도구 | Vite 7 |
| 손글씨 엔진 | [gkurt/tegaki](https://github.com/gkurt/tegaki) 0.8.0 (MIT) |
| 폰트 | Nanum Pen Script (한글) · Klee One (일본어) · Caveat/Tangerine (영어) |
| 배포 | Vercel (free alias) |
| 스타일 | 순수 CSS (외부 스타일시트 0개) |

---

## 📦 포함된 폰트 (Fonts)

이 데모는 **4개 폰트**를 지원해요. 각 폰트 path data는 직접 번들되어 있어 npm 설치만으로 동작합니다.

| 폰트 | 언어 | 출처 | 라이선스 |
|---|---|---|---|
| **Nanum Pen Script** | 한글 + 라틴 | https://hangeul.naver.com/font | OFL 1.1 |
| **Klee One** | 일본어 (히라가나 + 교과용 한자) + 라틴 | Google Fonts | OFL 1.1 |
| **Caveat** | 라틴 (캐주얼) | Google Fonts | OFL 1.1 |
| **Tangerine** | 라틴 (스크립트) | Google Fonts | OFL 1.1 |

### 한글/일본어 폰트 추가 방법

Tegaki 0.8.0 npm 패키지에는 라틴 폰트 4개만 번들되어 있어요. **한글/일본어 폰트 path data는 메인 저장소에서 직접 가져와야 합니다**:

```bash
# 한글 폰트 (Nanum Pen Script)
mkdir -p src/fonts/data/nanum-pen-script public/fonts/nanum-pen-script
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/nanum-pen-script/glyphData.json \
  -o src/fonts/data/nanum-pen-script/glyphData.json
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/nanum-pen-script/nanum-pen-script.ttf \
  -o public/fonts/nanum-pen-script/full.ttf
curl -fsSL https://raw.githubusercontent.com/gkurt/tegaki/main/packages/renderer/fonts/nanum-pen-script/nanum-pen-script-38efadb5.ttf \
  -o public/fonts/nanum-pen-script/subset.ttf

# 일본어 폰트 (Klee One)도 동일 패턴
# https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts/klee-one
```

그런 다음 번들 객체를 만들어요 (`src/fonts/nanum-pen-script.ts`):
```ts
import glyphData from './data/nanum-pen-script/glyphData.json';

const nanumPenScript = {
  version: 0,
  family: 'Nanum Pen Script Tegaki',
  fullFamily: 'Nanum Pen Script',
  lineCap: 'round',
  fontUrl: './fonts/nanum-pen-script/subset.ttf',
  fullFontUrl: './fonts/nanum-pen-script/full.ttf',
  fontFaceCSS: `@font-face { font-family: 'Nanum Pen Script Tegaki'; src: url(${fontUrl}); }`,
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  glyphData,
} as const;

export default nanumPenScript;
```

---

## 🎨 디자인 결정 (Design Choices)

1. **다크 테마 + 단일 페이지**: 산만한 요소 없이 손글씨 애니메이션에만 집중하도록
2. **폰트 카드 미리보기**: 메인 데모와 분리된 작은 카드들로 4개 폰트를 한눈에 비교
3. **공개 폰트만 사용**: 라이선스 걱정 없이 fork해서 사용 가능 (OFL 1.1)
4. **TypeScript + Vite**: 모던 스택으로 빠른 HMR + 타입 안전성
5. **외부 스타일시트 0개**: 순수 CSS만 사용 — 빌드 결과물 최소화

---

## 📁 프로젝트 구조 (Structure)

```
tegaki-live-demo/
├── public/
│   └── fonts/
│       ├── nanum-pen-script/   # 한글 폰트 ttf
│       └── klee-one/           # 일본어 폰트 ttf
├── src/
│   ├── fonts/
│   │   ├── data/               # path data JSON (vite 번들됨)
│   │   ├── nanum-pen-script.ts # 한글 폰트 bundle 객체
│   │   └── klee-one.ts         # 일본어 폰트 bundle 객체
│   ├── App.tsx                 # 메인 React 컴포넌트
│   ├── main.tsx                # React 진입점
│   └── styles.css              # 순수 CSS
├── index.html                  # Vite 진입 HTML
├── vercel.json                 # Vercel 배포 설정
└── package.json
```

---

## 🎮 조작법 (Controls)

| 조작 | 효과 |
|---|---|
| 텍스트 입력 | 실시간으로 손글씨 애니메이션 재생 |
| 폰트 선택 | 4개 폰트 (한글/일본어/Caveat/Tangerine) 즉시 전환 |
| 크기 슬라이더 | 24px ~ 140px 범위 조절 |
| 폰트 카드 클릭 | 해당 폰트를 메인 데모에 적용 |

---

## 🌏 다국어 (Multilingual)

| 언어 | 데모 텍스트 |
|---|---|
| 🇰🇷 한글 | 안녕하세요 반갑습니다 |
| 🇯🇵 일본어 | こんにちは世界 |
| 🇺🇸 영어 (Caveat) | Hello World! |
| 🇺🇸 영어 (Tangerine) | Beautiful Handwriting |

**한/영 혼합**도 자연스럽게 동작해요 — "Hello 안녕", "Tokyo 東京" 같은 텍스트도 손글씨로 그려져요.

---

## 📝 사용된 프롬프트 (Prompts)

이 프로젝트는 다음 시그널로부터 자동 생성되었습니다:

1. 사용자: `@url:https://github.com/gkurt/tegaki` — 라이브러리 분석
2. 사용자: `@url:https://codepen.io/t-kanjariya/pen/KwgEgPE` — 라이브 데모 영감
3. 사용자: "Vercel 배포 가능한가?"
4. 사용자: "한글 영문 섞어서 쓸 수 있나?"
5. 사용자: "외부 path data 추가 옵션으로" (15분 추가)

## 🤖 생성 정보 (Attribution)

이 데모는 **sigco3111**이 직접 디자인/구축한 한글 우선 손글씨 라이브 데모입니다.
- **기반 라이브러리**: [gkurt/tegaki](https://github.com/gkurt/tegaki) (MIT, 3k+ ⭐)
- **한/일 폰트 path data**: [gkurt/tegaki 메인 저장소](https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts) (MIT)
- **자동 생성**: Hermes AI 어시스턴트 (혜린) 2026-08-12

## 📜 라이선스 (License)

MIT License — 자유롭게 fork/modify/배포하세요.

---

⭐ 이 데모가 유용하다면 [sigco3111/tegaki-live-demo](https://github.com/sigco3111/tegaki-live-demo)에 별점을 눌러주세요!
