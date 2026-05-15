import { Sliders, Bolt, MapPin, Activity, ListChecks, Search, ArrowRightLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function DispatchView() {
  return (
    <div className="space-y-8 text-left">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] text-secondary mb-1 block uppercase tracking-widest font-bold">OPERATIONS CENTER</span>
          <h2 className="text-4xl font-bold text-on-surface">Route Optimization</h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-outline-variant bg-transparent text-on-surface font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-white/5 active:scale-95 transition-all">
            <Sliders className="w-4 h-4" />
            Configure Logic
          </button>
          <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-on-primary font-mono text-[10px] uppercase tracking-widest font-bold glow-emerald hover:brightness-110 active:scale-95 transition-all">
            <Bolt className="w-4 h-4" />
            Dispatch Fleet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden min-h-[500px] relative">
          <img 
            className="w-full h-full object-cover opacity-60 grayscale brightness-75" 
            alt="Optimized Routes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoQF1nS-NhTFc28T9WTFtRAGsvRQrIuQ28Z0N9s6FuSxJshPaC5YmHnRL4uzDSPqnqrBkHgR-Fn350G9Y9_yjOMj3Poq_ryKlbYb3DWH10bMFhTNfWOuO2hzC_wzyOg0MLp_nzR5YQwkKXO8GOnUjptaIkkULtE09hYo4OTWA8htcLVkUJVjc81INnwOecdv59OnDvcNtN1gV3IHHW8B3Lc0Y3BCl14P8WOLREu8Je6BLQzEp_w1fhXzSFkb6BBxqv7-6_nnEkQvNM" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute top-6 left-6 flex flex-col gap-3">
            <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#4edea3]" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-on-surface">LIVE: 142 ACTIVE UNITS</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 glass-card p-4 rounded-xl border border-primary/20 backdrop-blur-3xl">
            <div className="flex flex-col gap-2 min-w-[200px]">
              <div className="flex items-center justify-between gap-8">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">OPTIMIZATION SCORE</span>
                <span className="font-mono text-xl text-primary font-bold">94.2%</span>
              </div>
              <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '94.2%' }} className="bg-primary h-full glow-emerald" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card p-6 rounded-xl border-l-4 border-secondary h-full flex flex-col">
            <h3 className="font-mono text-[10px] text-secondary mb-6 flex items-center gap-2 uppercase tracking-widest font-bold">
              <Activity className="w-4 h-4" />
              Efficiency Projections
            </h3>
            <div className="space-y-8 flex-grow">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-on-surface-variant">Estimated Grid Load</span>
                  <span className="font-mono text-lg text-on-surface font-bold">1.2 MW</span>
                </div>
                <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-secondary rounded-full glow-cyan" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="font-mono text-[8px] text-on-surface-variant block mb-1 uppercase font-bold tracking-wider">CO2 SAVED</span>
                  <span className="font-mono text-xl text-primary font-bold">420kg</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="font-mono text-[8px] text-on-surface-variant block mb-1 uppercase font-bold tracking-wider">COST/MILE</span>
                  <span className="font-mono text-xl text-tertiary font-bold">$0.14</span>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-tertiary/20 bg-tertiary/5">
                <div className="flex items-center gap-3 mb-2 text-tertiary">
                  <Bolt className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Peak Pricing Alert</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Grid rates increasing in 45 mins. Suggested: Accelerate dispatch for Route 7B & 9C.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 glass-card rounded-xl overflow-hidden shadow-xl">
          <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between bg-white/5">
            <h3 className="font-mono text-[10px] text-primary flex items-center gap-2 uppercase tracking-widest font-bold">
              <ListChecks className="w-4 h-4" />
              Vehicle Assignment Queue
            </h3>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-highest">
              <Search className="w-4 h-4 text-on-surface-variant" />
              <input className="bg-transparent border-none text-[10px] uppercase font-mono focus:ring-0 p-0 w-32 placeholder:text-on-surface-variant/50 font-bold" placeholder="Filter fleet..." type="text" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="font-mono text-[10px] text-on-surface-variant border-b border-outline-variant/10 uppercase tracking-widest font-bold">
                  <th className="px-6 py-4">Unit ID</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Range (Est)</th>
                  <th className="px-6 py-4">Assigned Route</th>
                  <th className="px-6 py-4">Battery</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 text-sm">
                {[
                  { id: 'EV-9024', status: 'READY', range: '312 mi', route: 'METRO-NORTH-EXPRESS', bat: 88, color: 'primary' },
                  { id: 'EV-1158', status: 'READY', range: '245 mi', route: 'DOWNTOWN-HUB-A', bat: 72, color: 'primary' },
                  { id: 'EV-4402', status: 'CHARGING', range: '98 mi', route: 'PENDING...', bat: 28, color: 'tertiary' },
                ].map((row) => (
                  <tr key={row.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4 font-mono font-bold text-on-surface">{row.id}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded bg-${row.color}/10 text-${row.color} text-[8px] font-bold tracking-widest uppercase`}>{row.status}</span>
                    </td>
                    <td className="px-6 py-4 text-on-surface font-mono">{row.range}</td>
                    <td className={`px-6 py-4 font-mono text-xs font-bold ${row.route.includes('PENDING') ? 'text-on-surface-variant/30' : 'text-secondary'}`}>{row.route}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 bg-surface-container h-1 rounded-full overflow-hidden">
                          <div className={`h-full bg-${row.color}`} style={{ width: `${row.bat}%` }} />
                        </div>
                        <span className={`font-mono text-xs font-bold text-${row.color}`}>{row.bat}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-primary/20 rounded-lg text-primary transition-all active:scale-90">
                        <ArrowRightLeft className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
