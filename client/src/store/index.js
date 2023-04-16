import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#add8e6',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;