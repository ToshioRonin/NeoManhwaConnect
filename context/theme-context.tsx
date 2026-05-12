"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeMode = "dark" | "light";

interface Theme {
  mode: ThemeMode;
  name: string;
  description: string;
  colors: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    chart1: string;
    chart2: string;
    chart3: string;
    chart4: string;
    chart5: string;
  };
}

export const themes: Record<string, Theme> = {
  "neo-manhwa": {
    mode: "dark",
    name: "Neo Manhwa",
    description: "Morado vibrante",
    colors: {
      background: "0 0% 5%",
      foreground: "0 0% 90%",
      card: "0 0% 10%",
      cardForeground: "0 0% 90%",
      primary: "255 100% 65%",
      primaryForeground: "0 0% 90%",
      secondary: "263 15% 20%",
      secondaryForeground: "0 0% 90%",
      muted: "229 22% 29%",
      mutedForeground: "0 0% 66%",
      accent: "261 100% 74%",
      accentForeground: "0 0% 90%",
      border: "263 15% 20%",
      input: "0 0% 10%",
      ring: "255 100% 65%",
      chart1: "255 100% 65%",
      chart2: "261 100% 74%",
      chart3: "259 56% 50%",
      chart4: "229 22% 29%",
      chart5: "263 15% 20%",
    },
  },
  "midnight-purple": {
    mode: "dark",
    name: "Midnight Purple",
    description: "Púrpura profundo",
    colors: {
      background: "280 40% 4%",
      foreground: "0 0% 95%",
      card: "280 35% 8%",
      cardForeground: "0 0% 95%",
      primary: "290 85% 65%",
      primaryForeground: "0 0% 100%",
      secondary: "280 30% 14%",
      secondaryForeground: "0 0% 95%",
      muted: "280 25% 20%",
      mutedForeground: "280 20% 55%",
      accent: "310 75% 55%",
      accentForeground: "0 0% 100%",
      border: "280 30% 18%",
      input: "280 30% 12%",
      ring: "290 85% 65%",
      chart1: "290 85% 65%",
      chart2: "310 75% 55%",
      chart3: "270 80% 60%",
      chart4: "280 25% 22%",
      chart5: "280 30% 16%",
    },
  },
  "ocean-dark": {
    mode: "dark",
    name: "Ocean Deep",
    description: "Azul oceánico",
    colors: {
      background: "215 50% 4%",
      foreground: "0 0% 95%",
      card: "215 45% 8%",
      cardForeground: "0 0% 95%",
      primary: "200 100% 60%",
      primaryForeground: "215 50% 5%",
      secondary: "210 40% 12%",
      secondaryForeground: "0 0% 95%",
      muted: "205 35% 18%",
      mutedForeground: "200 30% 55%",
      accent: "180 90% 50%",
      accentForeground: "215 50% 5%",
      border: "210 40% 15%",
      input: "210 40% 12%",
      ring: "200 100% 60%",
      chart1: "200 100% 60%",
      chart2: "180 90% 50%",
      chart3: "220 85% 55%",
      chart4: "205 35% 20%",
      chart5: "215 40% 15%",
    },
  },
  "forest-dark": {
    mode: "dark",
    name: "Forest Night",
    description: "Verde naturaleza",
    colors: {
      background: "125 40% 4%",
      foreground: "0 0% 95%",
      card: "125 35% 8%",
      cardForeground: "0 0% 95%",
      primary: "145 75% 55%",
      primaryForeground: "125 40% 5%",
      secondary: "130 30% 12%",
      secondaryForeground: "0 0% 95%",
      muted: "125 25% 18%",
      mutedForeground: "120 25% 55%",
      accent: "165 70% 50%",
      accentForeground: "125 40% 5%",
      border: "130 30% 15%",
      input: "130 30% 12%",
      ring: "145 75% 55%",
      chart1: "145 75% 55%",
      chart2: "165 70% 50%",
      chart3: "100 65% 45%",
      chart4: "125 25% 20%",
      chart5: "130 30% 15%",
    },
  },
  "crimson-dark": {
    mode: "dark",
    name: "Crimson Night",
    description: "Rojo pasión",
    colors: {
      background: "0 40% 4%",
      foreground: "0 0% 95%",
      card: "0 35% 8%",
      cardForeground: "0 0% 95%",
      primary: "0 90% 55%",
      primaryForeground: "0 0% 100%",
      secondary: "5 30% 12%",
      secondaryForeground: "0 0% 95%",
      muted: "0 25% 18%",
      mutedForeground: "0 15% 55%",
      accent: "25 85% 50%",
      accentForeground: "0 0% 100%",
      border: "5 30% 15%",
      input: "5 30% 12%",
      ring: "0 90% 55%",
      chart1: "0 90% 55%",
      chart2: "25 85% 50%",
      chart3: "40 80% 45%",
      chart4: "0 25% 20%",
      chart5: "5 30% 15%",
    },
  },
  "nebula-light": {
    mode: "light",
    name: "Nebula Light",
    description: "Rosa pastel",
    colors: {
      background: "340 100% 97%",
      foreground: "330 40% 20%",
      card: "0 0% 100%",
      cardForeground: "330 40% 20%",
      primary: "330 80% 55%",
      primaryForeground: "0 0% 100%",
      secondary: "340 30% 92%",
      secondaryForeground: "330 40% 20%",
      muted: "340 25% 90%",
      mutedForeground: "330 30% 40%",
      accent: "290 70% 50%",
      accentForeground: "0 0% 100%",
      border: "340 20% 85%",
      input: "340 15% 94%",
      ring: "330 80% 55%",
      chart1: "330 80% 55%",
      chart2: "290 70% 50%",
      chart3: "320 75% 55%",
      chart4: "340 30% 88%",
      chart5: "340 25% 82%",
    },
  },
  "silver-light": {
    mode: "light",
    name: "Steel Blue",
    description: "Azul acero",
    colors: {
      background: "210 30% 96%",
      foreground: "220 25% 15%",
      card: "0 0% 100%",
      cardForeground: "220 25% 15%",
      primary: "215 60% 45%",
      primaryForeground: "0 0% 100%",
      secondary: "210 20% 92%",
      secondaryForeground: "220 25% 15%",
      muted: "210 15% 88%",
      mutedForeground: "220 20% 40%",
      accent: "195 55% 40%",
      accentForeground: "0 0% 100%",
      border: "210 15% 85%",
      input: "210 10% 94%",
      ring: "215 60% 45%",
      chart1: "215 60% 45%",
      chart2: "195 55% 40%",
      chart3: "230 50% 50%",
      chart4: "210 20% 88%",
      chart5: "210 15% 80%",
    },
  },
};

type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: themes["neo-manhwa"],
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes["neo-manhwa"]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(themes[savedTheme]);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const c = currentTheme.colors;

    root.style.setProperty("--background", c.background);
    root.style.setProperty("--foreground", c.foreground);
    root.style.setProperty("--card", c.card);
    root.style.setProperty("--card-foreground", c.cardForeground);
    root.style.setProperty("--primary", c.primary);
    root.style.setProperty("--primary-foreground", c.primaryForeground);
    root.style.setProperty("--secondary", c.secondary);
    root.style.setProperty("--secondary-foreground", c.secondaryForeground);
    root.style.setProperty("--muted", c.muted);
    root.style.setProperty("--muted-foreground", c.mutedForeground);
    root.style.setProperty("--accent", c.accent);
    root.style.setProperty("--accent-foreground", c.accentForeground);
    root.style.setProperty("--border", c.border);
    root.style.setProperty("--input", c.input);
    root.style.setProperty("--ring", c.ring);
    root.style.setProperty("--chart-1", c.chart1);
    root.style.setProperty("--chart-2", c.chart2);
    root.style.setProperty("--chart-3", c.chart3);
    root.style.setProperty("--chart-4", c.chart4);
    root.style.setProperty("--chart-5", c.chart5);

    if (currentTheme.mode === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [currentTheme]);

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      setCurrentTheme(themes[themeId]);
      localStorage.setItem("theme", themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}