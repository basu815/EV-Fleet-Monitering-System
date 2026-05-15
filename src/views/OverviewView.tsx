import { Truck, Bolt, Power, BatteryWarning, RefreshCw, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export default function OverviewView() {
  return (
    <div className="space-y-8">
      <header className="hidden md:flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-on-surface tracking-tight">Executive Dashboard</h1>
          <p className="text-on-surface-variant text-lg">Real-time operational overview for Hub Alpha Operations.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-xl border border-outline-variant hover:bg-surface-variant/20 transition-colors font-mono text-xs tracking-wider">EXPORT REPORT</button>
          <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-xl flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all font-mono text-xs">
            NEW DISPATCH
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Metrics Grid */}
        <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { label: 'Total Fleet', value: '142', icon: Truck, color: 'primary' },
            { label: 'Active/Driving', value: '86', icon: Bolt, color: 'secondary', pulse: true },
            { label: 'Charging', value: '12', icon: Power, color: 'primary' },
            { label: 'Low Battery', value: '4', icon: BatteryWarning, color: 'error' },
          ].map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={stat.label}
              className={`glass-card p-5 rounded-2xl border-l-4 border-${stat.color}`}
            >
              <p className="text-on-surface-variant font-mono text-[10px] mb-2 uppercase tracking-widest">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h2 className={`text-4xl font-mono text-${stat.color === 'secondary' ? 'secondary' : stat.color === 'error' ? 'error' : 'on-surface'}`}>{stat.value}</h2>
                <stat.icon className={`text-${stat.color}/40 w-8 h-8 ${stat.pulse ? 'animate-pulse' : ''}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Efficiency Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-4 glass-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div>
            <div className="flex justify-between items-start mb-4">
              <p className="text-on-surface-variant font-mono text-xs uppercase">AVG EFFICIENCY</p>
              <span className="text-primary text-sm font-semibold">+4.2%</span>
            </div>
            <h3 className="text-3xl font-mono text-on-surface">0.18 <span className="text-sm font-sans text-on-surface-variant">kWh/km</span></h3>
          </div>
          <div className="mt-4 h-16 w-full flex items-end gap-1">
            {[8, 12, 10, 14, 16].map((h, i) => (
              <div 
                key={i} 
                style={{ height: `${h * 4}px` }} 
                className={`flex-1 rounded-t-sm ${i === 4 ? 'bg-secondary glow-cyan' : 'bg-secondary/20'}`} 
              />
            ))}
          </div>
        </motion.div>

        {/* Live Activity Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-on-surface">Live Activity</h3>
            <RefreshCw className="text-on-surface-variant w-5 h-5 cursor-pointer hover:rotate-180 transition-transform duration-500" />
          </div>
          <div className="space-y-4">
            {[
              { title: 'Vehicle #104: Battery < 20%', desc: 'Hub Alpha Gateway • 2m ago', icon: BatteryWarning, color: 'error' },
              { title: 'Hub Alpha: Slot 4 fault', desc: 'Hardware Diagnostics • 15m ago', icon: BatteryWarning, color: 'tertiary' },
              { title: 'Vehicle #12: Charging Started', desc: 'Supercharger A4 • 24m ago', icon: Power, color: 'primary' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-surface-variant/20 border border-outline-variant/10">
                <div className={`p-2 rounded-lg bg-${activity.color}/10 text-${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{activity.title}</p>
                  <p className="text-xs text-on-surface-variant">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-primary font-semibold text-sm border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">VIEW ALL ALERTS</button>
        </motion.div>

        {/* Breakdown & Carbon Saved */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-on-surface mb-6">Fleet Status</h3>
            <div className="flex items-center justify-around py-4">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="transparent" r="16" stroke="#2d3449" strokeWidth="4"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="16" stroke="#acedff" strokeDasharray="60 100" strokeWidth="4"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="16" stroke="#4edea3" strokeDasharray="20 100" strokeDashoffset="-60" strokeWidth="4"></circle>
                  <circle cx="18" cy="18" fill="transparent" r="16" stroke="#fbbf24" strokeDasharray="20 100" strokeDashoffset="-80" strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-mono">142</span>
                  <span className="text-[10px] text-on-surface-variant font-mono uppercase">Vehicles</span>
                </div>
              </div>
              <div className="space-y-3">
                {['En Route (60%)', 'Charging (20%)', 'Idle (20%)'].map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-secondary' : i === 1 ? 'bg-primary' : 'bg-tertiary'}`}></div>
                    <span className="text-xs text-on-surface-variant">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-surface-container to-primary/5 border border-primary/20 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Leaf className="text-primary w-12 h-12" />
            </div>
            <h3 className="text-sm font-mono text-on-surface-variant mb-1 uppercase tracking-widest">CARBON SAVED</h3>
            <p className="text-5xl font-mono text-primary mb-2">12.4 <span className="text-2xl font-sans">TONS</span></p>
            <p className="text-xs text-on-surface-variant max-w-[200px]">Cumulative CO2 reduction across entire fleet lifetime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
