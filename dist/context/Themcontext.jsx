"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
const themeContext = createContext({
    theme: "light",
    toglethem: () => { }
});
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toglethem = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    return (<themeContext.Provider value={{ theme, toglethem }}>
            {children}
        </themeContext.Provider>);
}
export function useTheme() {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
