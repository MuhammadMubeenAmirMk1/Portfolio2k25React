import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TitleProvider } from "./context/TitleContext";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const Home = lazy(() => import("./pages/Home"));
const Education = lazy(() => import("./pages/Education"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <TitleProvider>
      <Router>
        <Header />
        <SideNav />
        <Box sx={{ ml: { sm: "200px" }, p: 3 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Router>
    </TitleProvider>
  );
}

export default App;
