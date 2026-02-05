"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard');
        const data = await res.json();
        const mainEvent = data.events?.[0];
        if (mainEvent) {
          setEventData(mainEvent);
        }
      } catch (error) {
        console.error("Error fetching UFC data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, []);

  if (loading) return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-canvas-dark border-b border-oxide-steel">
      <div className="technical-label animate-pulse text-visceral-red">Analyzing Domain...</div>
    </section>
  );

  const competitions = eventData?.competitions || [];
  // The Main Event is typically the last competition in the array
  const mainFight = competitions[competitions.length - 1];
  
  const p1 = mainFight?.competitors?.[0]?.athlete?.lastName?.toUpperCase() || 
             mainFight?.competitors?.[0]?.athlete?.displayName?.split(' ').pop()?.toUpperCase() || "JONES";
  const p2 = mainFight?.competitors?.[1]?.athlete?.lastName?.toUpperCase() || 
             mainFight?.competitors?.[1]?.athlete?.displayName?.split(' ').pop()?.toUpperCase() || "STIPE";
             
  const venue = eventData?.venue?.fullName || "Meta APEX";
  const dateStr = eventData?.date ? new Date(eventData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : "Sat, Feb 7";
  const eventName = eventData?.name || "UFC Fight Night";
  const isTitleFight = mainFight?.notes?.[0]?.headline?.toLowerCase().includes("title") || mainFight?.format?.regulation?.periods === 5;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center p-8 overflow-hidden bg-canvas-dark border-b border-oxide-steel">
      {/* Background technical layout */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none fight-board-grid">
        <div className="col-start-2 col-span-10 border-x border-oxide-steel h-full flex flex-col justify-between py-12">
          <div className="text-[10rem] md:text-[12rem] impact-title text-outline truncate uppercase">
            {eventName.split(':')[0]}
          </div>
          <div className="text-[10rem] md:text-[12rem] impact-title text-outline self-end uppercase">
            MAIN EVENT
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-0 items-end">
        {/* Main Event Data */}
        <div className="flex-1 pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-visceral-red text-white technical-label mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            Live from {venue}
          </div>
          
          <div className="relative mb-12 flex flex-col">
            <h1 className="text-8xl z-30 md:text-[11rem] impact-title tracking-tighter italic leading-[0.8]">
              {p1}
              <span className="block text-4xl md:text-5xl text-championship-gold mt-4 non-italic technical-label">
                {isTitleFight ? "Championship Main Event" : "Main Event"}
              </span>
            </h1>
            
            <h1 className="text-8xl z-30 md:text-[11rem] impact-title tracking-tighter italic md:text-right leading-[0.8] mt-8 md:mt-4">
              {p2}
            </h1>

            {/* Overlapping VS Layer */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none ">
              <div className="text-[12rem] md:text-[10rem] impact-title text-visceral-red/80 italic transform -rotate-45 drop-shadow-[0_0_60px_rgba(215,0,0,0.5)] select-none">
                VS
              </div>
            </div>
          </div>
        </div>

        {/* Technical Sidebar / Tale of the Tape */}
        <div className="w-full md:w-80 layered-surface p-6 mb-12">
          <div className="technical-label text-visceral-red mb-4 border-b border-oxide-steel pb-2">
            Event Schedule
          </div>
          <div className="space-y-6">
            <div>
              <p className="impact-title text-3xl italic">{dateStr}</p>
              <p className="technical-label opacity-60">{eventData?.shortName || "UFC Event"}</p>
            </div>
            
            <div className="pt-4 border-t border-oxide-steel">
              <button className="w-full py-4 bg-technical-white text-canvas-dark impact-title text-xl interactive-strike">
                Details
              </button>
            </div>
            
            <div className="flex justify-between technical-label text-[10px] opacity-40">
              <span>Live-Data</span>
              <span>Technical Analysis</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ticker tape */}
      <div className="absolute bottom-0 left-0 w-full py-2 bg-canvas-surface border-t border-oxide-steel flex items-center overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee technical-label text-xs opacity-40">
          {[1,2,3,4,5,6,7,8].map(i => (
            <span key={i} className="mx-8">
              {p1} ({mainFight?.competitors?.[0]?.records?.[0]?.summary || "0-0-0"}) vs {p2} ({mainFight?.competitors?.[1]?.records?.[0]?.summary || "0-0-0"}) • {eventName} • {venue} • LIVE ON PPV
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[1,2,3,4,5,6,7,8].map(i => (
            <span key={i + 8} className="mx-8">
              {p1} ({mainFight?.competitors?.[0]?.records?.[0]?.summary || "0-0-0"}) vs {p2} ({mainFight?.competitors?.[1]?.records?.[0]?.summary || "0-0-0"}) • {eventName} • {venue} • LIVE ON PPV
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
