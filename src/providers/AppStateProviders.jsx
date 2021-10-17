import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({children}) => {
  const [fonts, ] = useState([
    {
      name: 'Black Han Sans',
      font: "'Black Han Sans', sans-serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Black Han Sans', sans-serif;"
    }, 
    {
      name: 'Do Hyeon',
      font: "'Do Hyeon', sans-serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Do Hyeon', sans-serif;"
    }, 
    {
      name: 'Gothic A1',
      font: "'Gothic A1', sans-serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Gothic A1', sans-serif;"
    },
    {
      name: 'Hi Melody',
      font: "'Hi Melody', cursive",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Hi+Melody&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Hi Melody', cursive;"
    },
    {
      name: 'Jua',
      font: "'Jua', sans-serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Jua', sans-serif;"
    },
    {
      name: 'Nanum Brush Script',
      font: "'Nanum Brush Script', cursive",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Nanum Brush Script', cursive;"
    },
    {
      name: 'Nanum Gothic',
      font: "'Nanum Gothic', sans-serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Nanum Gothic', sans-serif;"
    },
    {
      name: 'Nanum Gothic Coding',
      font: "'Nanum Gothic Coding', monospace",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Nanum Gothic Coding', monospace;"
    },
    {
      name: 'Nanum Myeongjo',
      font: "'Nanum Myeongjo', serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet">',
      useCss: "font-family: 'font-family: 'Nanum Myeongjo', serif;"
    },
    {
      name: 'Nanum Pen Script',
      font: "'Nanum Pen Script', cursive",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">',
      useCss: "font-family: 'font-family: 'Nanum Pen Script', cursive;"
    },
    {
      name: 'Noto Sans KR',
      font: "'Noto Sans KR', sans-serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Noto Sans KR', sans-serif;"
    },
    {
      name: 'Noto Serif KR',
      font: "'Noto Serif KR', serif",
      useLink: '<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap" rel="stylesheet">',
      useCss: "font-family: 'Noto Serif KR', serif;"
    },
  ]);

  const [select, setSelect] = useState([]);

  const addFont = useCallback((name, font, useLink, useCss) => {
    setSelect(select => {
      return [{name, font, useLink, useCss}];
    })
  }, []);

  return (
    <AppStateContext.Provider 
      value={{
        fonts,
        select,
        addFont,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;