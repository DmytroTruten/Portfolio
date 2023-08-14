import { createContext, useState } from "react";
import enLanguageJSON from "../helpers/en.json";

export const LanguageContext = createContext();

export function LanguageArea({ children }) {
  const [languageData, setLanguageData] = useState(enLanguageJSON);
  return (
    <LanguageContext.Provider value={{ languageData, setLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
}
