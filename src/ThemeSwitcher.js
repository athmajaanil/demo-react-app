import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light"); // Light theme by default

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Styles for the themes
  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#000000",
      padding: "20px",
      textAlign: "center",
      minHeight: "100vh",
    },
    dark: {
      backgroundColor: "#333333",
      color: "#ffffff",
      padding: "20px",
      textAlign: "center",
      minHeight: "100vh",
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
