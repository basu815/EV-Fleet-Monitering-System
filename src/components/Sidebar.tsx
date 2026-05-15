import { Bolt, Calendar, LayoutDashboard, Map as MapIcon, Settings, Shield, Wrench, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Fleet Management', icon: LayoutDashboard },
  { id: 'map', label: 'Map View', icon: MapIcon },
  { id: 'charging', label: 'Charging Schedules', icon: Bolt },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'safety', label: 'Safety Reports', icon: Shield },
  { id: 'analytics', label: 'Analytics', icon: Activity },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-full py-6 fixed left-0 w-sidebar z-50 bg-surface-container-low border-r border-outline-variant/30 shadow-2xl">
      <div className="px-6 mb-10 flex items-center gap-3">
        <Bolt className="text-primary w-8 h-8" />
        <span className="text-primary font-black text-2xl tracking-tight">FleetLive</span>
      </div>

      <div className="px-4 mb-8">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-variant/30">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20 border border-primary/30">
            <img 
              alt="Avatar" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-NtYnhz7PjceN_uX9pn0DSDqa0s3QnQqnjU7WvOxxsuv-RPFMq3VxN1vNtWtRh0t4XqhqGEGg_zOR71Iqvq43HNKIEPfxE6XLevEHi1PjcBxuTpASf9JgWu8su2mlNfhK6eXXZOVWtvE9X-xAbRVzL5bkXH8OVN2q-zobrkmyCmuQ9rOoh5KYg57l9yDa_3GNLwFAKQPgeUIv0AOsKN5kxzbjf_Pn14b8uDHYA-59R7zbs1UVh1m4mnnagEcFVsktS32umW1wQC8s"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-on-surface font-semibold text-sm">Alex Rivian</p>
            <p className="text-on-surface-variant/70 text-[10px] font-mono uppercase tracking-wider">Fleet Administrator</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "flex items-center w-full gap-3 px-4 py-3 transition-all rounded-lg text-left",
              currentView === item.id 
                ? "bg-primary/10 text-primary border-l-4 border-primary font-semibold" 
                : "text-on-surface-variant hover:bg-surface-variant/50"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
