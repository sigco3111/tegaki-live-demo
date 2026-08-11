import { useEffect, useState } from 'react';
import { TegakiRenderer } from 'tegaki/react';
import caveat from 'tegaki/fonts/caveat';
import tangerine from 'tegaki/fonts/tangerine';
import nanumPenScript from './fonts/nanum-pen-script';
import kleeOne from './fonts/klee-one';

type FontKey = 'nanum-pen-script' | 'caveat' | 'klee-one' | 'tangerine';

interface FontInfo {
  key: FontKey;
  module: any;
  name: string;
  korean: string;
  sample: string;
  language: string;
}

const FONTS: FontInfo[] = [
  {
    key: 'nanum-pen-script',
    module: nanumPenScript,
    name: 'Nanum Pen Script',
    korean: '나눔펜글씨',
    sample: '안녕하세요',
    language: '한글 (Hangul)',
  },
  {
    key: 'klee-one',
    module: kleeOne,
    name: 'Klee One',
    korean: '클레어원',
    sample: 'こんにちは',
    language: '일본어 (Japanese)',
  },
  {
    key: 'caveat',
    module: caveat,
    name: 'Caveat',
    korean: '캐비엇',
    sample: 'Hello World',
    language: '영어 (English)',
  },
  {
    key: 'tangerine',
    module: tangerine,
    name: 'Tangerine',
    korean: '탱저린',
    sample: 'Beautiful',
    language: '영어 (English)',
  },
];

const PRESETS: Record<FontKey, string> = {
  'nanum-pen-script': '안녕하세요 반갑습니다',
  'klee-one': 'こんにちは世界',
  caveat: 'Hello World!',
  tangerine: 'Beautiful Handwriting',
};

const SPEED_PRESETS = [
  { value: 0.25, label: '0.25x (느리게)' },
  { value: 0.5, label: '0.5x' },
  { value: 1, label: '1x' },
  { value: 1.5, label: '1.5x' },
  { value: 2, label: '2x (기본)' },
  { value: 3, label: '3x' },
  { value: 4, label: '4x (빠르게)' },
];

export default function App() {
  const [fontKey, setFontKey] = useState<FontKey>('nanum-pen-script');
  const [text, setText] = useState(PRESETS['nanum-pen-script']);
  const [size, setSize] = useState(72);
  const [speed, setSpeed] = useState(2);
  const [loop, setLoop] = useState(false);

  // Inject @font-face for non-Latin fonts (Nanum Pen Script + Klee One)
  // Required because tegaki computes layout using the font-family string;
  // if the browser can't find the font, all glyph widths collapse to ~0
  // and characters overlap at the same x-coordinate.
  useEffect(() => {
    const css = `
      @font-face {
        font-family: 'Nanum Pen Script Tegaki 38efadb5';
        src: url('./fonts/nanum-pen-script/subset.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Nanum Pen Script';
        src: url('./fonts/nanum-pen-script/full.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Klee One Tegaki d192e144';
        src: url('./fonts/klee-one/subset.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Klee One';
        src: url('./fonts/klee-one/full.ttf') format('truetype');
      }
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

  const currentFont = FONTS.find((f) => f.key === fontKey)!;

  const onFontChange = (k: FontKey) => {
    setFontKey(k);
    setText(PRESETS[k]);
  };

  return (
    <div className="app">
      <header className="hero">
        <h1>✍️ Tegaki 손글씨 데모</h1>
        <p className="subtitle">
          한글 · 영어 · 일본어 — 어떤 폰트든 손글씨 애니메이션으로 (Handwriting animation for any font)
        </p>
        <div className="badges">
          <a className="badge" href="https://github.com/gkurt/tegaki" target="_blank" rel="noreferrer">
            ⭐ gkurt/tegaki
          </a>
          <a className="badge" href="https://github.com/sigco3111/tegaki-live-demo" target="_blank" rel="noreferrer">
            📦 sigco3111/tegaki-live-demo
          </a>
          <a className="badge" href="https://gkurt.com/tegaki" target="_blank" rel="noreferrer">
            📖 공식 문서
          </a>
        </div>
      </header>

      <section className="controls">
        <div className="row">
          <div>
            <label htmlFor="text">텍스트 입력 (Enter text)</label>
            <input
              id="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="아무 글이나 입력해보세요…"
            />
          </div>
          <div>
            <label htmlFor="font-select">폰트 (Font)</label>
            <select
              id="font-select"
              value={fontKey}
              onChange={(e) => onFontChange(e.target.value as FontKey)}
              title="폰트 선택 (Select font)"
            >
              {FONTS.map((f) => (
                <option key={f.key} value={f.key}>
                  {f.korean} — {f.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row row-3">
          <div>
            <label htmlFor="size">
              크기 (Size): <strong>{size}px</strong>
            </label>
            <input
              id="size"
              type="range"
              min={24}
              max={140}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="range-slider"
            />
          </div>
          <div>
            <label htmlFor="speed">
              속도 (Speed): <strong>{speed}x</strong>
            </label>
            <input
              id="speed"
              type="range"
              min={0.25}
              max={4}
              step={0.05}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="range-slider"
              list="speed-presets"
            />
            <datalist id="speed-presets">
              {SPEED_PRESETS.map((p) => (
                <option key={p.value} value={p.value} label={p.label} />
              ))}
            </datalist>
          </div>
          <div className="loop-cell">
            <label className="loop-label">
              <input
                type="checkbox"
                checked={loop}
                onChange={(e) => setLoop(e.target.checked)}
              />
              <span>반복 (Loop)</span>
            </label>
          </div>
        </div>
      </section>

      <section className="canvas-area">
        {text ? (
          <TegakiRenderer
            key={`${fontKey}-${text}-${size}-${speed}-${loop}`}
            font={currentFont.module}
            style={{ fontSize: `${size}px`, color: '#f0f0f5', maxWidth: '100%' }}
            time={{ mode: 'uncontrolled', speed, loop }}
          >
            {text}
          </TegakiRenderer>
        ) : (
          <span className="empty">텍스트를 입력해주세요 (Enter some text)</span>
        )}
      </section>

      <section className="cards">
        {FONTS.map((f) => (
          <div
            key={f.key}
            className={`font-card ${f.key === fontKey ? 'active' : ''}`}
            onClick={() => onFontChange(f.key)}
          >
            <h3>{f.korean}</h3>
            <div className="meta">
              {f.name} · {f.language}
            </div>
            <div className="preview">
              <TegakiRenderer
                font={f.module}
                style={{ fontSize: '32px', maxWidth: '100%' }}
                time={{ mode: 'uncontrolled', speed: 1.5 }}
              >
                {f.sample}
              </TegakiRenderer>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>
          Built with <a href="https://github.com/gkurt/tegaki" target="_blank" rel="noreferrer">gkurt/tegaki</a>
          {' · '}
          Deployed on <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>
          {' · '}
          <a href="https://github.com/sigco3111/tegaki-live-demo" target="_blank" rel="noreferrer">소스 코드</a>
        </p>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>
          MIT License · 2026 sigco3111
        </p>
      </footer>
    </div>
  );
}
