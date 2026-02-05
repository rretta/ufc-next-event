"use client";

import { useEffect, useState } from "react";

export default function FightCard() {
  const [fights, setFights] = useState<any[]>([]);
  const [eventMeta, setEventMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFights() {
      try {
        const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard');
        const data = await res.json();
        const event = data.events?.[0];
        if (event) {
          setEventMeta(event);
          // Map competitions to a consistent format
          const mappedFights = event.competitions.map((comp: any) => ({
            p1: comp.competitors[0]?.athlete?.displayName.toUpperCase() || "TBA",
            p2: comp.competitors[1]?.athlete?.displayName.toUpperCase() || "TBA",
            weight: comp.status?.type?.description || "MAIN CARD",
            ranking: comp.notes?.[0]?.headline || "UFC Event",
            odds: comp.odds?.[0]?.details || "Tale of the Tape"
          }));
          setFights(mappedFights);
        }
      } catch (error) {
        console.error("Error fetching fights:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFights();
  }, []);

  if (loading) return null; // Let Hero handle main loading state or add skeleton

  const dateStr = eventMeta?.date ? new Date(eventMeta.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Nov 16, 2024";
  const venue = eventMeta?.venue?.fullName || "Madison Square Garden, NY";

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="technical-label text-visceral-red block mb-2">Fight Card</span>
          <h2 className="text-6xl impact-title italic">Main Card</h2>
        </div>
        <div className="technical-label opacity-40 text-right">
          {dateStr} • {venue}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-oxide-steel border border-oxide-steel">
        {fights.map((fight, idx) => (
          <div key={idx} className="layered-surface p-8 interactive-strike group">
            <div className="flex justify-between items-start mb-8">
              <span className="technical-label text-visceral-red font-bold">{fight.weight}</span>
              <span className="technical-label opacity-40 text-[10px]">{fight.ranking}</span>
            </div>
            
            <div className="space-y-1">
              <div className="text-4xl impact-title italic group-hover:text-technical-white transition-colors">{fight.p1}</div>
              <div className="technical-label text-oxide-steel group-hover:text-visceral-red text-xl transition-colors">VS</div>
              <div className="text-4xl impact-title italic group-hover:text-technical-white transition-colors">{fight.p2}</div>
            </div>
            
            <div className="mt-12 flex justify-between items-center pt-4 border-t border-oxide-steel opacity-40 group-hover:opacity-100 transition-opacity">
              <span className="technical-label text-[10px]">{fight.odds}</span>
              <span className="technical-label text-visceral-red">Details &rarr;</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dynamic CTA */}
      <div className="mt-24 p-12 bg-canvas-surface border border-oxide-steel relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none text-8xl impact-title flex items-center justify-center whitespace-nowrap">
          TICKETS • TICKETS • TICKETS • TICKETS • TICKETS
        </div>
        <div className="relative z-10 max-w-md">
          <p className="impact-title text-4xl mb-6 italic">Secure your seat at the Octagon</p>
          <button className="px-12 py-4 bg-visceral-red text-white impact-title text-xl interactive-strike hover:bg-white hover:text-canvas-dark">
            Find Tickets
          </button>
        </div>
      </div>
    </section>
  );
}
