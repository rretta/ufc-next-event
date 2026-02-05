import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FightCard from "@/components/FightCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-ufc-red selection:text-white">
      <Navbar />
      <Hero />
      <FightCard />
      
      <footer className="border-t border-oxide-steel p-16 bg-canvas-surface mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-5xl impact-title italic text-technical-white border-l-4 border-visceral-red pl-6 mb-8">
              UFC
            </div>
            <p className="max-w-md technical-label opacity-40 leading-relaxed normal-case">
              The world&apos;s premier mixed martial arts organization. Dedicated to showcasing the highest level of athletic competition in the Octagon. Watch every fight, every week, live from arenas across the globe.
            </p>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 technical-label">
            <div className="flex flex-col gap-6">
              <span className="text-visceral-red">Organization</span>
              <a href="#" className="hover:text-technical-white transition-colors">About UFC</a>
              <a href="#" className="hover:text-technical-white transition-colors">Rankings</a>
              <a href="#" className="hover:text-technical-white transition-colors">Press</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-visceral-red">Digital</span>
              <a href="#" className="hover:text-technical-white transition-colors">UFC Fight Pass</a>
              <a href="#" className="hover:text-technical-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-technical-white transition-colors">Streaming</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-visceral-red">Connect</span>
              <a href="#" className="hover:text-technical-white transition-colors">Help Center</a>
              <a href="#" className="hover:text-technical-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-oxide-steel flex flex-col md:flex-row justify-between items-center gap-4 technical-label text-[10px] opacity-20">
          <span>© 2026 UFC NON OFFICIAL WEBSITE - ALL RIGHTS RESERVED</span>
          <span>CREATED BY RRETTA - TESTING MCP + ANTIGRAVITY</span>
        </div>
      </footer>
    </main>
  );
}
