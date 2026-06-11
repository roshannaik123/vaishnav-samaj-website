import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PatternBorder from "./components/PatternBorder";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Board from "./pages/Board";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Repeating Saffron-Gold border pattern at top */}
      <ScrollToTop />

      <PatternBorder uid="top" />

      {/* Main navigation menu */}
      <Navbar />

      {/* Primary content area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Peacock Teal footer */}
      <Footer />

      {/* Repeating Saffron-Gold border pattern at bottom */}
      <PatternBorder uid="bottom" />
    </div>
  );
};

export default App;
