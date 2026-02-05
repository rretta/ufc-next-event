export default function Navbar() {
  return (
    <nav className="border-b border-oxide-steel p-6 flex justify-between items-center bg-canvas-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="text-3xl impact-title italic text-technical-white px-3 py-1 border border-visceral-red">
          UFC
        </div>
        <div className="hidden lg:block h-8 w-px bg-oxide-steel" />
        <div className="hidden lg:flex gap-6 technical-label text-[10px] opacity-40">
          <span>Official Organization</span>
          <span>•</span>
          <span>Est. 1993</span>
        </div>
      </div>
      
      <div className="hidden md:flex gap-10 technical-label">
        <a href="#" className="hover:text-visceral-red transition-colors">Fight Card</a>
        <a href="#" className="hover:text-visceral-red transition-colors">Tickets</a>
        <a href="#" className="hover:text-visceral-red transition-colors">Vip</a>
        <a href="#" className="hover:text-visceral-red transition-colors">Shop</a>
      </div>
      
      <button className="px-6 py-2 border border-oxide-steel technical-label hover:border-technical-white hover:bg-oxide-steel transition-all">
        Buy PPV
      </button>
    </nav>
  );
}
