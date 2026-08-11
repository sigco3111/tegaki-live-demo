// Nanum Pen Script (Korean) — tegaki font bundle
// Source: https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts/nanum-pen-script
import glyphData from './data/nanum-pen-script/glyphData.json';

const fontUrl = './fonts/nanum-pen-script/subset.ttf';
const fullFontUrl = './fonts/nanum-pen-script/full.ttf';

// Use full font name as family for browser layout fallback.
// Tegaki renders glyphs from glyphData directly, but computeTextLayout()
// measures character widths via browser-side measurement using this
// family string — so it MUST point to a font-face that the browser
// has actually loaded. We register both subset + full in App.tsx
// via @font-face injection.
const nanumPenScript = {
  version: 0,
  family: 'Nanum Pen Script',
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
