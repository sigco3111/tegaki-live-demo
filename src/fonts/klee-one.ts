// Klee One (Japanese) — tegaki font bundle
// Source: https://github.com/gkurt/tegaki/tree/main/packages/renderer/fonts/klee-one
import glyphData from './data/klee-one/glyphData.json';

const fontUrl = './fonts/klee-one/subset.ttf';
const fullFontUrl = './fonts/klee-one/full.ttf';

const kleeOne = {
  version: 0,
  family: 'Klee One',
  fullFamily: 'Klee One',
  lineCap: 'round' as const,
  fontUrl: './fonts/klee-one/subset.ttf',
  fullFontUrl: './fonts/klee-one/full.ttf',
  fontFaceCSS: `@font-face { font-family: 'Klee One'; src: url(./fonts/klee-one/full.ttf); }`,
  unitsPerEm: 1000,
  ascender: 800,
  descender: -200,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  glyphData: glyphData as any,
} as const;

export default kleeOne;
