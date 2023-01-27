import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, ProjectPage, ErrorPage, Skills, Experience } from "./pages";

import { Sidebar, ThemeTemplates } from "./components";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <ThemeTemplates />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
