import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/myProjects/Projects";
import Footer from "./components/footer/Footer";
import { Global } from "@emotion/react";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
        >
        <CssBaseline />

        {/* Global Styles for Scrollbar */}
        <Global
          styles={{
            "::-webkit-scrollbar": {
              width: "12px",
            },
            "::-webkit-scrollbar-track": {
              // @ts-ignore
              background: theme.palette.bgColor.secondary,
              borderRadius: "10px",
            },
            "::-webkit-scrollbar-thumb": {
              // @ts-ignore
              background: theme.palette.mainColor.main,
              borderRadius: "10px",
              // @ts-ignore
              border: `3px solid ${theme.palette.shadowColor.secondary}`,
            },
          }}
        />

        {/* Content Components */}
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
