// Nanum Pen Script (Korean) — tegaki font bundle
// Source: https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts/nanum-pen-script
import glyphData from './data/nanum-pen-script/glyphData.json';

const fontUrl = './fonts/nanum-pen-script/subset.ttf';
const fullFontUrl = './fonts/nanum-pen-script/full.ttf';

const nanumPenScript = {
  version: 0,
  family: 'Nanum Pen Script Tegaki 38efadb5',
  fullFamily: 'Nanum Pen Script',
  lineCap: 'round' as const,
  fontUrl,
  fullFontUrl,
  fontFaceCSS: `@font-face { font-family: 'Nanum Pen Script Tegaki 38efadb5'; src: url(${fontUrl}); } @font-face { font-family: 'Nanum Pen Script'; src: url(${fullFontUrl}); }`,
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  glyphData: glyphData as any,
} as const;

export default nanumPenScript;
