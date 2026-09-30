"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type QuoteContextType = {
  active: string;
  setActive: (val: string) => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState("ALL");

  return (
    <QuoteContext.Provider value={{ active, setActive }}>
      {children}
    </QuoteContext.Provider>
  );
};

// custom hook
export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useGallery must be used within GalleryProvider");
  return context;
};
