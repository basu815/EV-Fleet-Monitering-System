import { Plus, Filter, Download as DownloadIcon, Wrench, Zap, Sliders, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function MaintenanceView() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-on-surface">Preventive Maintenance</h1>
          <p className="text-on-surface-variant mt-1">Real-time wear analysis and service orchestration.</p>
        </div>
        <button className="bg-primary text-on-primary font-mono text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl flex items-center gap-2 glow-emerald hover:scale-105 active:scale-95 transition-all">
          <Plus className="w-4 h-4" />
          Request Service
        </button>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 rounded-xl border-l-4 border-primary text-left"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-mono text-[8px] text-primary tracking-[0.3em] block mb-1 uppercase font-bold">Active Unit</span>
                <h2 className="text-2xl font-bold">Tesla Semi - Unit #042</h2>
              </div>
              <div className="text-right">
                <span className="font-mono text-xl text-primary font-bold">94%</span>
                <span className="font-mono text-[8px] text-on-surface-variant block uppercase tracking-widest">Overall Health</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'BRAKE WEAR', value: '12', unit: 'mm', progress: 80, color: 'primary' },
                { label: 'TIRE TREAD', value: '4.2', unit: 'mm', progress: 33, color: 'tertiary' },
                { label: 'COOLANT LVL', value: '88', unit: '%', progress: 88, color: 'primary' },
                { label: 'HV BATT DEGR', value: '2.1', unit: '%', progress: 95, color: 'primary' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface-variant/20 p-4 rounded-lg border border-outline-variant/30">
                  <span className="font-mono text-[8px] text-on-surface-variant block mb-2 tracking-widest font-bold uppercase">{stat.label}</span>
                  <div className="flex items-end gap-1">
                    <span className={`font-mono text-lg font-bold text-${stat.color === 'tertiary' ? 'tertiary' : 'on-surface'}`}>{stat.value}</span>
                    <span className="font-mono text-[10px] text-on-surface-variant pb-1">{stat.unit}</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1 mt-3 rounded-full overflow-hidden">
                    <div className={`bg-${stat.color} h-full`} style={{ width: `${stat.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="glass-card p-6 rounded-xl text-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Service Analytics</h3>
              <div className="flex gap-2">
                <button className="bg-surface-variant/30 p-2 rounded-lg hover:bg-surface-variant/50 transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="bg-surface-variant/30 p-2 rounded-lg hover:bg-surface-variant/50 transition-colors">
                  <DownloadIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Tire Rotation & Alignment', sub: 'Scheduled for Oct 24 • Service Center Alpha', cost: '$450 Est.', status: 'PENDING', color: 'tertiary', icon: Wrench },
                { label: 'Thermal Management Fluid Flush', sub: 'Completed Sep 12 • Maintenance Mobile Unit 3', cost: '$1,280', status: 'COMPLETED', color: 'primary', icon: Sliders },
                { label: 'High-Voltage Interlock Loop Test', sub: 'Completed Aug 05 • Giga-Service Nevada', cost: '$220', status: 'COMPLETED', color: 'primary', icon: Zap },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-lg bg-${item.color === 'tertiary' ? 'tertiary/5' : 'surface-variant/20'} border border-${item.color === 'tertiary' ? 'tertiary/20' : 'outline-variant/30'} group hover:bg-${item.color === 'tertiary' ? 'tertiary/10' : 'surface-variant/30'} transition-colors`}>
                  <div className={`w-12 h-12 rounded-lg bg-${item.color}/10 flex items-center justify-center text-${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-on-surface">{item.label}</h4>
                    <p className="text-xs text-on-surface-variant">{item.sub}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-mono text-[8px] text-${item.color} bg-${item.color}/10 px-2 py-1 rounded tracking-widest font-bold`}>{item.status}</span>
                    <span className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-wider uppercase">{item.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">October 2023</h3>
              <div className="flex gap-1">
                <ChevronLeft className="w-4 h-4 text-on-surface-variant cursor-pointer" />
                <ChevronRight className="w-4 h-4 text-on-surface-variant cursor-pointer" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={`${d}-${i}`} className="font-mono text-[8px] text-on-surface-variant/50 font-bold">{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className={`p-2 text-xs rounded-full ${i === 23 ? 'bg-tertiary text-on-tertiary font-bold glow-amber ring-4 ring-tertiary/20' : 'text-on-surface/70'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-xl border-l-4 border-secondary text-left">
            <div className="p-5">
              <h3 className="font-mono text-[10px] text-secondary mb-4 tracking-widest font-bold uppercase">Drivetrain Telemetry</h3>
              <div className="relative h-48 bg-surface-container-lowest rounded-lg border border-outline-variant/20 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
                </div>
                <Zap className="text-secondary w-12 h-12 mb-2" />
                <span className="font-mono text-2xl font-bold">8,200 <span className="text-xs uppercase tracking-widest">RPM</span></span>
                <span className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest font-bold">Peak Load Performance</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">Vibration Delta</span>
                  <span className="font-mono text-xs text-primary">+0.02mm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">Oil Viscosity</span>
                  <span className="font-mono text-xs text-on-surface">Optimal</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl overflow-hidden h-40 group cursor-pointer text-left"
          >
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8feEYv1svZZ0fxF6W74ygzsDhiyr53VaD_PmMZlGBfTUb5e4kW3wpAvyZy5-qeXq-MLJkHzwFYxANzX1SYKRrXTt5Ezn5NIDuXpMhcISuvYTAb1tSXV3jLB84hNlsL4DVLlxKifW6qcObdIlBr2YNd9B9rT6I5wXFstC1nKc2k7nUaodG-_f1nFLSjqHgG2EGgDFVaKFfqGQb3WIC_YBVJCDEhGT8LYEukc2P-S5SWpcxre7rDRUP_CfAQhGWrmHJKY2cd8kB-4Dm" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all" alt="Maintenance" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent p-5 flex flex-col justify-end">
              <h4 className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">Mobile On-Site Service</h4>
              <p className="text-xs text-on-surface">Get technicians sent directly to your docking bay.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
