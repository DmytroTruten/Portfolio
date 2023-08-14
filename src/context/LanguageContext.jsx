import { createContext, useState } from "react";
import enLanguageJSON from "../helpers/en.json";

export const LanguageContext = createContext();

export function LanguageArea({ children }) {
  const [languageData, setLanguageData] = useState(enLanguageJSON);
  const [typeItInstance, setTypeItInstance] = useState(null);
  return (
    <LanguageContext.Provider
      value={{ languageData, setLanguageData, typeItInstance, setTypeItInstance }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
