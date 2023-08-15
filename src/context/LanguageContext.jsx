import { createContext, useState } from "react";
import enLanguageJSON from "../helpers/en.json";

export const LanguageContext = createContext();

export function LanguageArea({ children }) {
  const [languageData, setLanguageData] = useState(enLanguageJSON);
  const [homeTypeItInstance, setHomeTypeItInstance] = useState(null);
  const [aboutTypeItInstance, setAboutTypeItInstance] = useState(null);

  return (
    <LanguageContext.Provider
      value={{
        languageData,
        setLanguageData,
        homeTypeItInstance,
        setHomeTypeItInstance,
        aboutTypeItInstance,
        setAboutTypeItInstance,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
