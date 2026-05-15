import { Bolt, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex items-center gap-2">
        <Bolt className="text-primary w-6 h-6" />
        <span className="text-xl font-bold text-primary tracking-tight">FleetLive</span>
      </div>
      <div className="relative">
        <Bell className="text-on-surface-variant w-6 h-6" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse glow-emerald"></span>
      </div>
    </header>
  );
}
