'use client'

// context/SearchContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type SlugContextType = {
    newSlug: string;
    setNewSlug: (value: string) => void;
};

const SlugContext = createContext<SlugContextType | undefined>(undefined);

export const SlugProvider = ({ children }: { children: ReactNode }) => {
    const [newSlug, setNewSlug] = useState("");

    return (
        <SlugContext.Provider value={{ newSlug, setNewSlug }}>
            {children}
        </SlugContext.Provider>

    );
};

// custom hook
export const useSlug = () => {
    const context = useContext(SlugContext);
    if (!context) throw new Error("useSearch must be used within SearchProvider");
    return context;
};