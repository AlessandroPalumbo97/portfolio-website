import { useState } from 'react';
import palettesData from '../assets/palettes.json';

export interface Palette {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export interface Palettes {
  [key: string]: Palette;
}

export const usePalettes = () => {
  const [palettes] = useState<Palettes>(palettesData);

  // Get random initial palette
  const getRandomPaletteKey = () => {
    const paletteKeys = Object.keys(palettesData);
    return paletteKeys[Math.floor(Math.random() * paletteKeys.length)];
  };

  const [currentPalette, setCurrentPalette] = useState<string>(
    getRandomPaletteKey()
  );
  const [currentColors, setCurrentColors] = useState<Palette>(() => {
    const randomKey = getRandomPaletteKey();
    return palettesData[randomKey as keyof typeof palettesData];
  });

  const switchPalette = (paletteKey: string) => {
    if (palettes[paletteKey]) {
      setCurrentPalette(paletteKey);
      setCurrentColors(palettes[paletteKey]);
    }
  };

  const switchToRandomPalette = () => {
    const paletteKeys = Object.keys(palettes);
    const availableKeys = paletteKeys.filter((key) => key !== currentPalette);
    const randomKey =
      availableKeys[Math.floor(Math.random() * availableKeys.length)];
    switchPalette(randomKey);
  };

  const getAvailablePalettes = () => {
    return Object.keys(palettes).map((key) => ({
      key,
      name: palettes[key].name,
    }));
  };

  return {
    palettes,
    currentPalette,
    currentColors,
    switchPalette,
    switchToRandomPalette,
    getAvailablePalettes,
  };
};
