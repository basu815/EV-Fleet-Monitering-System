import { Search, Settings2, Battery, Gauge, MapPin, Navigation, PersonStanding, TriangleAlert, MessageSquare, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapView() {
  return (
    <div className="relative h-[calc(100vh-120px)] md:h-[calc(100vh-48px)] w-full overflow-hidden rounded-2xl bg-surface-container-lowest">
      {/* Map Canvas Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Fleet Map" 
          className="w-full h-full object-cover grayscale brightness-50 opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDme0UCZVA2PSs_Ql18Xgfvz1StvN53J4Amt6drSNI5o_tcwN5EVMjbW8F1ZS3US6vRCkA9wxmCnOO0cmNyivVirar5uyjyjgKrXgUOdpklx4j8YIvx6II7dcaAnuG5VnMvkIp3bz9iqba94TP2-pyWwBkDdtl7XmoY7HJ1I87DI8bkbsGjClu4UC2u15ATB1y2UCmN6JGvEQf5lreHOQr0hzp20YlrANNcvGdDkgo5Q_DzgaqDr_QmrgipUh3whUuNpnq7x3HAx-Yf" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none"></div>

        {/* Markers */}
        <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative">
            <div className="w-12 h-12 bg-secondary/20 rounded-full animate-ping absolute inset-0"></div>
            <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center border-secondary border-2 z-10">
              <Navigation className="text-secondary w-6 h-6 rotate-45" />
            </div>
          </div>
          <div className="mt-2 glass-card px-2 py-1 rounded text-[10px] font-bold text-secondary uppercase tracking-tighter">#88 CRUISING</div>
        </div>

        <div className="absolute top-[30%] left-[40%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-80">
          <div className="w-8 h-8 glass-card rounded-full flex items-center justify-center border-tertiary border-2">
            <Navigation className="text-tertiary w-4 h-4 rotate-[120deg]" />
          </div>
        </div>
      </div>

      {/* Floating UI Overlays */}
      <div className="relative z-10 w-full h-full p-4 pointer-events-none">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto w-full pointer-events-auto">
          <div className="glass-card flex items-center px-4 h-12 rounded-xl focus-within:ring-2 focus-within:ring-secondary/50">
            <Search className="text-on-surface-variant w-5 h-5 mr-3" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 w-full text-sm" 
              placeholder="Search vehicle or station..." 
              type="text" 
            />
            <Settings2 className="text-on-surface-variant w-5 h-5 ml-3 cursor-pointer hover:text-primary" />
          </div>
        </div>

        {/* Floating Filters */}
        <div className="absolute top-20 left-4 space-y-3 pointer-events-auto">
          {[
            { label: 'Battery', icon: Battery, color: 'primary' },
            { label: 'Speed', icon: Gauge, color: 'secondary' },
            { label: 'Route', icon: MapPin, color: 'tertiary' },
          ].map((filter) => (
            <button key={filter.label} className="glass-card flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-surface-variant transition-colors group">
              <filter.icon className={`text-${filter.color} w-4 h-4 group-hover:scale-110 transition-transform`} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Vehicle Drawer */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 pointer-events-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border-b-4 border-secondary/30">
            <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-high/50">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 px-3 py-1 rounded text-secondary font-bold font-mono text-sm">#88</div>
                <div>
                  <h2 className="text-xl font-bold text-on-surface leading-tight">Rivian R1T · San Francisco</h2>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-widest">Cruising</span>
                  </div>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="glass-card p-4 rounded-xl bg-surface-container/30">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold mb-1 tracking-wider">Speed</p>
                <p className="font-mono text-lg text-on-surface">65 <span className="text-xs text-on-surface-variant">km/h</span></p>
              </div>
              <div className="glass-card p-4 rounded-xl bg-surface-container/30">
                <p className="text-[10px] text-on-surface-variant uppercase font-bold mb-1 tracking-wider">Est. Range</p>
                <p className="font-mono text-lg text-secondary">180 <span className="text-xs text-on-surface-variant">km</span></p>
              </div>
              <div className="glass-card p-4 rounded-xl bg-surface-container/30 relative overflow-hidden col-span-2">
                <div className="flex justify-between items-end mb-2">
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">State of Charge</p>
                  <p className="font-mono text-lg text-primary">42%</p>
                </div>
                <div className="h-1.5 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '42%' }}
                    className="h-full bg-primary glow-emerald" 
                  />
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4 w-full">
                <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-lg bg-surface-container/20 border-l-4 border-primary">
                  <PersonStanding className="text-primary w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase">Driver: Normal</span>
                </div>
                <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-lg bg-error-container/20 border-l-4 border-error">
                  <TriangleAlert className="text-tertiary w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase text-tertiary">Braking Alert</span>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-on-primary font-bold px-8 py-3 rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 font-mono text-xs uppercase">
                <MessageSquare className="w-4 h-4" />
                Contact Driver
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
