import { Sparkles, MapPin, CarFront, Power, Cloud, Leaf, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function ChargingView() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-on-surface mb-2">Charging Station Management</h1>
          <p className="text-on-surface-variant">Real-time telemetry and control for EV charging infrastructure.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-bold hover:opacity-90 active:scale-95 transition-all text-xs uppercase font-mono tracking-widest glow-emerald">
          <Sparkles className="w-4 h-4" />
          Optimize Charging
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl overflow-hidden p-6 relative group">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold text-on-surface">Hub Alpha</h2>
                <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Active</span>
              </div>
              <p className="text-sm text-on-surface-variant flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                North Logistics Terminal
              </p>
            </div>
            <div className="bg-surface-container-highest px-4 py-2 rounded-xl flex flex-col items-end">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Dynamic Pricing</span>
              <span className="font-mono text-xl text-primary">$0.22<span className="text-xs text-on-surface-variant">/kWh</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Grid Load Intensity</span>
                <span className="font-mono text-xl text-secondary">65%</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  className="h-full bg-secondary shadow-[0_0_10px_#4cd7f6]" 
                />
              </div>
              <p className="text-[11px] text-on-surface-variant/60 mt-2 italic">Optimal load for battery longevity maintained.</p>
            </div>
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase">Available Slots</span>
                <span className="font-mono text-xl text-on-surface">8/12</span>
              </div>
              <div className="flex gap-1.5">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 8 ? 'bg-primary' : 'bg-surface-container-highest'}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <CarFront className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-on-surface">4x DC Supercharger</p>
                  <p className="text-xs text-on-surface-variant">Output: 150kW Peak</p>
                </div>
              </div>
              <span className="font-mono text-xs text-secondary font-bold">2 Available</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Power className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-on-surface">8x AC Fast</p>
                  <p className="text-xs text-on-surface-variant">Output: 22kW Continuous</p>
                </div>
              </div>
              <span className="font-mono text-xs text-primary font-bold">6 Available</span>
            </div>
          </div>
          <button className="w-full py-4 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-all active:scale-[0.98] font-mono text-xs uppercase tracking-widest">
            Reserve Slot
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-on-surface">Hub Beta</h3>
                <p className="text-xs text-on-surface-variant">Central Park Sector</p>
              </div>
              <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-on-surface-variant">
                <Cloud className="w-6 h-6" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Capacity</span>
                <span className="text-on-surface font-semibold">16 Slots</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Status</span>
                <span className="text-tertiary font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span> High Demand
                </span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[92%]" />
              </div>
              <button className="w-full mt-2 py-2.5 rounded-lg bg-surface-container-highest text-on-surface text-xs font-bold hover:bg-surface-bright transition-colors uppercase font-mono tracking-wider">
                View Details
              </button>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-on-surface">Station Gamma</h3>
                <p className="text-xs text-on-surface-variant">Industrial District</p>
              </div>
              <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary">
                <Leaf className="w-6 h-6 fill-primary/20" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Renewable Usage</span>
                <span className="text-primary font-semibold">88%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Pricing</span>
                <span className="text-on-surface font-semibold font-mono">$0.18/kWh</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[30%]" />
              </div>
              <button className="w-full mt-2 py-2.5 rounded-lg bg-surface-container-highest text-on-surface text-xs font-bold hover:bg-surface-bright transition-colors uppercase font-mono tracking-wider">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 h-80 glass-card rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:opacity-60 transition-opacity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARo7Es8_JAUdeE2FhsYy8ERzQx4yQaz73al5LOldf1xpquL4y6q3p3KzbBUkJoA6f9vw5-hhNnYQJ0ITzxllFUmzqjO9rV6Sypp6C584W_McIjYClCkxMdOjmuVpaR8eauHZ1UUvAkrvaRP6pHGm66bCIRNHJCoVaUJNEBKvxEl9ecW9Kka12hSXKjkv_7zXicCm9YxBnCFZXQZvDZDdbezt1Ia-342TuoSeM6w_2ghibqXG0WgnRA9WTdJy-3DEINFkfUdq4jnhVz')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6 z-10 text-left">
            <h3 className="text-xl font-bold text-on-surface">Regional Overview</h3>
            <p className="text-xs text-on-surface-variant">3 hubs online • 1 under maintenance</p>
          </div>
          <div className="absolute bottom-6 right-6 z-10">
            <button className="px-4 py-2 bg-surface-container-highest/80 backdrop-blur-md rounded-lg text-xs font-bold border border-outline-variant/20 uppercase font-mono">
              Expand Map
            </button>
          </div>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#4edea3]"></div>
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface-container p-2 rounded border border-primary/30 whitespace-nowrap">
                <p className="text-[10px] font-bold text-primary font-mono lowercase">HUB ALPHA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
