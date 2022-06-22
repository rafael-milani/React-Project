import React, { useState, createContext } from "react";

export const Exemple6 = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const App6 = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme == "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  return <Exemple6 value={{ theme, toggleTheme }}>{children}</Exemple6>;
};

export default App6;
