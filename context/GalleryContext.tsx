"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type GalleryContextType = {
  active: string;
  setActive: (val: string) => void;
  isAll: boolean;
  setIsAll: (val: boolean) => void;
};

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState("ALL");
  const [isAll, setIsAll] = useState(true);

  return (
    <GalleryContext.Provider value={{ active, setActive, isAll, setIsAll }}>
      {children}
    </GalleryContext.Provider>
  );
};

// custom hook
export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) throw new Error("useGallery must be used within GalleryProvider");
  return context;
};
