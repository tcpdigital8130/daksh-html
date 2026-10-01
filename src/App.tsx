import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GallerySection } from "./components/GallerySection";
import { MobileAppSection } from "./components/MobileAppSection";
import { NationalPartners } from "./components/NationalPartners";
import { SuccessStories } from "./components/SuccessStories";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

import StudentValidationForm from "./components/StudentValidationForm";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">

      <Navbar />

      <main className="flex-1">
        <Hero />

        <GallerySection />

        <MobileAppSection />

        <NationalPartners />

        {/* <SuccessStories /> */}

        <FAQSection />
      </main>

      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Existing Website */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Student Validation Form */}
        <Route
          path="/form"
          element={<StudentValidationForm />}
        />

      </Routes>
    </BrowserRouter>
  );
}