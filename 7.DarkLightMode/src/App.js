import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext, themes } from "./Context/Theme-context";
import Blog from "./Components/Blog";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const themeChangeHandler = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  useEffect(() => {
    let docBody = document.body;

    switch (theme) {
      case themes.light:
        docBody.classList.remove("dark");
        docBody.classList.add("light");
        break;
      case themes.dark:
        docBody.classList.remove("light");
        docBody.classList.add("dark");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeChangeHandler }}>
      <Blog />
    </ThemeContext.Provider>
  );
}

export default App;
