import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import WhatIsFemprish from "./WhatIsFemprish";
import Mission from "./Mission";
import Vision from "./Vision";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhatIsFemprish />
      <Mission />
      <Vision />
      <Footer />
    </div>
  );
}