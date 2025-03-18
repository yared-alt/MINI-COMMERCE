"use client"
import React,{ createContext, useContext, ReactNode, useEffect, useState } from "react"

type Theme = "light" | "dark";
type ThemeContextType = {
    theme: Theme,
    toglethem: () => void;
}

const themeContext = createContext<ThemeContextType>({
    theme: "light",
    toglethem: () => {}
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    const toglethem = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [])

    return (
        <themeContext.Provider value={{ theme, toglethem }}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
      }
    return context;
}

