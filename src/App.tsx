import { useEffect, useState, useRef } from 'react';
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

export default function App() {
  const [fontKey, setFontKey] = useState<FontKey>('nanum-pen-script');
  const [text, setText] = useState(PRESETS['nanum-pen-script']);
  const [size, setSize] = useState(72);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
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
            >
              {FONTS.map((f) => (
                <option key={f.key} value={f.key}>
                  {f.korean} ({f.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="size">크기 (Size): {size}px</label>
            <input
              id="size"
              type="range"
              min={24}
              max={140}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </section>

      <section className="canvas-area" ref={renderRef}>
        {!loaded && <span className="empty">폰트 로딩 중…</span>}
        {loaded && error && <span className="empty" style={{ color: '#ff6b6b' }}>{error}</span>}
        {loaded && !error && text && (
          <TegakiRenderer
            font={currentFont.module}
            style={{ fontSize: `${size}px`, color: '#f0f0f5' }}
          >
            {text}
          </TegakiRenderer>
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
              <TegakiRenderer font={f.module} style={{ fontSize: '36px' }}>
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
