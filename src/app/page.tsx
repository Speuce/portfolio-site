"use client"

import Projects from "./projects";
import AboutMe from "./aboutme";
import TopMenuBar from "./topMenu";
import ContactMe from "./contactMe";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-600 from-10% via-slate-950 via-75% to-black text-white">
      <TopMenuBar />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-16 md:px-24">
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </main>
  );
}
