import {createContext, useEffect, useState} from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const getDefultTheme = () => {
        return localStorage.getItem("theme") || "light"
    }

    const [ theme , setTheme ] = useState(getDefultTheme);
    const toggleTheme = () => {
        const switchTheme = theme === "dark" ? "light" : "dark";
        setTheme(switchTheme)
        localStorage.setItem("theme" , switchTheme)
    }

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme , toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext