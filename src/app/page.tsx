"use client"

import TopMenuBar from "./topMenu";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-600 from-10% via-slate-950 via-75% to-black text-white">
      <TopMenuBar />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 mt-96">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          My <span className="text-[hsl(280,100%,70%)]">T3</span> Applications
        </h1>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] mt-96 mb-96">
          Some Text
        </h1>
      </div>
    </main>
  );
}
