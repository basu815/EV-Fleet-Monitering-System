import { LayoutDashboard, Map as MapIcon, Bolt, Activity, Settings } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface BottomNavProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'map', label: 'Map', icon: MapIcon },
  { id: 'charging', label: 'Charging', icon: Bolt },
  { id: 'analytics', label: 'Analytics', icon: Activity },
];

export default function BottomNav({ currentView, onViewChange }: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-surface-container/90 backdrop-blur-2xl border-t border-outline-variant/20 shadow-lg rounded-t-xl">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id)}
          className={cn(
            "flex flex-col items-center justify-center transition-all duration-300 relative",
            currentView === item.id 
              ? "text-primary scale-110 font-bold after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-primary after:rounded-full after:glow-emerald" 
              : "text-on-surface-variant/70 opacity-80"
          )}
        >
          <item.icon className="w-6 h-6" />
          <span className="font-mono text-[10px] mt-1">{item.label}</span>
        </button>
      ))}
      <button
        onClick={() => onViewChange('settings')}
        className={cn(
          "flex flex-col items-center justify-center transition-all duration-300",
          currentView === 'settings' ? "text-primary scale-110 font-bold" : "text-on-surface-variant/70 opacity-80"
        )}
      >
        <Settings className="w-6 h-6" />
        <span className="font-mono text-[10px] mt-1">Config</span>
      </button>
    </nav>
  );
}
