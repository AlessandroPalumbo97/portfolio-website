import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import data from '../assets/data.json';

export interface Palette {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
}

export interface Palettes {
  [key: string]: Palette;
}

interface PaletteContextType {
  palettes: Palettes;
  currentPalette: string;
  currentColors: Palette;
  switchPalette: (paletteKey: string) => void;
  switchToRandomPalette: () => void;
  getAvailablePalettes: () => Array<{ key: string; name: string }>;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

interface PaletteProviderProps {
  children: ReactNode;
}

export const PaletteProvider: React.FC<PaletteProviderProps> = ({
  children,
}) => {
  const [palettes] = useState<Palettes>(data.palettes);

  // Get random initial palette
  const getRandomPaletteKey = () => {
    const paletteKeys = Object.keys(data.palettes);
    return paletteKeys[Math.floor(Math.random() * paletteKeys.length)];
  };

  // Initialize with the same random palette for both states
  const initialPaletteKey = getRandomPaletteKey();
  const [currentPalette, setCurrentPalette] =
    useState<string>(initialPaletteKey);
  const [currentColors, setCurrentColors] = useState<Palette>(() => {
    return data.palettes[initialPaletteKey as keyof typeof data.palettes];
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

  const value: PaletteContextType = {
    palettes,
    currentPalette,
    currentColors,
    switchPalette,
    switchToRandomPalette,
    getAvailablePalettes,
  };

  return (
    <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>
  );
};

export const usePalettes = (): PaletteContextType => {
  const context = useContext(PaletteContext);
  if (context === undefined) {
    throw new Error('usePalettes must be used within a PaletteProvider');
  }
  return context;
};
