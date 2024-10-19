import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/myProjects/Projects";
import Footer from "./components/footer/Footer";

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
