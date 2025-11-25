import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";            // your updated Home from earlier
import Projects from "./pages/Projects";
import AboutCard from "./pages/AboutCard";
import Contact from "./pages/Contact";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Skills />
              <Experience />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
