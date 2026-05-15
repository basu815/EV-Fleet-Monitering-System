import { ShieldCheck, Download, AlertTriangle, Gauge, Home, Navigation, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function SafetyView() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-on-surface">Safety & Compliance Center</h1>
          <p className="text-on-surface-variant">Real-time risk assessment and regulatory monitoring.</p>
        </div>
        <button className="bg-primary text-on-primary font-mono text-[10px] uppercase tracking-widest px-6 py-3 rounded-lg flex items-center gap-2 glow-emerald hover:opacity-90 transition-all">
          <Download className="w-4 h-4" />
          Generate Compliance Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Safety Score Gauge */}
        <div className="md:col-span-4 glass-card p-6 rounded-xl flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest self-start mb-4">FLEET SAFETY SCORE</span>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="82.93" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-6xl text-primary tracking-tighter">85</span>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">EXCELLENT</span>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full mt-8 gap-4 border-t border-outline-variant/30 pt-6">
            <div className="text-center">
              <div className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">LAST 7 DAYS</div>
              <div className="font-mono text-lg text-primary">+2.4%</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">INCIDENTS</div>
              <div className="font-mono text-lg text-on-surface">12</div>
            </div>
          </div>
        </div>

        {/* Critical Incidents */}
        <div className="md:col-span-5 glass-card rounded-xl flex flex-col h-full min-h-[340px]">
          <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-white/5">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <AlertTriangle className="text-tertiary w-5 h-5" />
              Critical Incidents
            </h3>
            <span className="font-mono text-[8px] text-tertiary px-2 py-1 bg-tertiary/10 rounded uppercase tracking-widest">Live Feed</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {[
              { type: 'Excessive Speeding', sub: 'TRUCK-882 • 14:22 PM', value: '84 MPH', icon: Gauge, color: 'error' },
              { type: 'Harsh Braking', sub: 'VAN-104 • 13:05 PM', value: '-12 G', icon: Home, color: 'tertiary' },
              { type: 'Harsh Cornering', sub: 'SEMI-029 • 11:48 AM', value: '0.8 G', icon: Navigation, color: 'tertiary' },
            ].map((incident, i) => (
              <div key={i} className={`p-4 bg-surface-variant/20 rounded-lg flex items-center justify-between border-l-4 border-${incident.color}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded bg-${incident.color === 'error' ? 'error-container/30' : 'tertiary/10'} flex items-center justify-center text-${incident.color}`}>
                    <incident.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-on-surface">{incident.type}</div>
                    <div className="font-mono text-[10px] text-on-surface-variant uppercase">{incident.sub}</div>
                  </div>
                </div>
                <div className={`font-mono text-${incident.color}`}>{incident.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="md:col-span-3 glass-card p-6 rounded-xl flex flex-col gap-6 text-left">
          <h3 className="text-lg font-bold">Compliance Status</h3>
          <div className="space-y-6">
            {[
              { label: 'Insurance Renewals', value: '100%', w: '100%', color: 'primary' },
              { label: 'ELD Logs Compliance', value: '98%', w: '98%', color: 'primary' },
              { label: 'Driver Licensing', value: '82%', w: '82%', color: 'tertiary' },
            ].map((check) => (
              <div key={check.label} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-on-surface-variant">{check.label}</span>
                  <span className={`font-mono text-[10px] text-${check.color}`}>{check.value}</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full w-[${check.w}] bg-${check.color} ${check.color === 'primary' ? 'glow-emerald' : 'glow-amber'}`} style={{ width: check.w }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-outline-variant/30">
            <div className="flex items-center gap-3 p-3 bg-tertiary/10 border border-tertiary/30 rounded-lg">
              <AlertTriangle className="text-tertiary w-5 h-5" />
              <div className="font-mono text-[10px] text-tertiary leading-tight uppercase tracking-wider">4 Licenses Expiring Within 30 Days</div>
            </div>
          </div>
        </div>

        {/* Training Modules */}
        <div className="md:col-span-12 glass-card rounded-xl overflow-hidden text-left">
          <div className="p-6 border-b border-outline-variant/30 flex items-center justify-between bg-white/5">
            <h3 className="text-2xl font-bold">Active Training Modules</h3>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded hover:bg-white/5"><ChevronLeft className="w-5 h-5" /></button>
              <button className="p-2 border border-outline-variant rounded hover:bg-white/5"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {[
              {
                title: 'Defensive Driving Essentials',
                desc: 'Advanced maneuvering for urban environments and high-traffic areas.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwUL0Qt50sszWqY08tcvoWw51SlNyG8i13w_qx0rtvBxfPkmab6mL0AFLRaSmpuv_1p52iuMw6Fas-i2gjjhkZvvuhyXbsPCZUASPisKFWa0IP4gV6A3pIkfHZSsL6RjGLsfUwbR-vRzwFZX6ORMCkZEZbQenzDnP4XfZawPJk7StngOrxyzOXPhZxW4uL1ksY5_gCk59B-V6PV3INz5Q4Q34pgAvorMR--f9pTxGg6p7eJ1Q7hBqv4mU_hn5WWiFIOnxCJ6sSCkrJ',
                badge: 'REQUIRED',
                time: '25 MIN',
                progress: '65% COMPLETED'
              },
              {
                title: 'Winter Road Tactics',
                desc: 'Specialized training for ice management and low-traction stability control.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1QxDnTLPZdPVB1GW3aBU4H5yk3YxtIPUqYDl4pHNCFJ67AGu-S8Kl1kdHd0JEt_ctJvriMRyg-4XpbsJggN-IhVHlrSZn3UcP9EmQEuMBRTWpVU0N-xSr8YUedDVPIw0S4zDd6sK-PvdrvdPnJB6rN3dQbuDVvrOPlmR6knQsz2FE7iXKoiTSskOvG1ILJqwmmo8-6Y9Qg2Pkpa2UKfBQQGl7IsMWru0Cq9_YCsKepfCdA5hYYM_6-fJ8WJAzDrCQa3OTHFvBXg3_',
                badge: 'RECOMMENDED',
                time: '40 MIN',
                progress: 'NEW COURSE'
              },
              {
                title: 'HAZMAT Compliance 2024',
                desc: 'Regulatory update on handling and documenting hazardous cargo shipments.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXmkJKlpK1AGgiHIIb4vQmG0RxDpso6XjjrFiCg2JAtFbc9SOWkSnJT08lNVuk1y8Bdaa0iuspqV7mn64L_w1f803bL0FhTX7Z7IyxH6UjW0XYeMVqlXp_9PUuBRh6PYjFOWRmZWRxJlpCaAiVJ46iGi7ejwLxFTBcO2UcJtZIhr8fOLLrkU5XShjD2jpD1Yvp_RavUSCHfN53gAikXYjTWo59FD1nlqYxAlq4gWmhNf3zhrZ20CBaHJw--BhF_Ic9uiVXxPQcg49M',
                badge: 'CERTIFICATION',
                time: '1.5 HR',
                progress: '12 DRIVERS ENROLLED'
              }
            ].map((course, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <img src={course.img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt={course.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-primary/20 backdrop-blur-md text-primary font-mono text-[8px] px-2 py-1 rounded tracking-widest font-bold">{course.badge}</span>
                    <span className="bg-black/40 backdrop-blur-md text-white font-mono text-[8px] px-2 py-1 rounded tracking-widest">{course.time}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/50 text-primary">
                      <Play className="w-6 h-6 fill-primary" />
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{course.title}</h4>
                <p className="text-xs text-on-surface-variant mb-4">{course.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-[8px] font-bold">JD</div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-[8px] font-bold">AS</div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary/20 text-primary flex items-center justify-center text-[8px] font-bold">+12</div>
                  </div>
                  <span className="font-mono text-[8px] text-on-surface-variant tracking-wider uppercase">{course.progress}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
