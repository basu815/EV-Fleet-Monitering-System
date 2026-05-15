import { User, Shield, Key, Copy, Trash2, Settings, Camera, Edit, Bell, Cloud, BarChart, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function SettingsView() {
  return (
    <div className="space-y-8 text-left">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* User Profile Section */}
        <section className="md:col-span-4 space-y-6">
          <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 group cursor-pointer">
                <img 
                  className="w-32 h-32 rounded-full border-2 border-primary object-cover glow-emerald" 
                  alt="Avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdH6JdHGVttu43N5jLQDz7NnGarkTq2NlHOkbZUqyLFothSLqZ4N4hi721eNqdGSP5O6IoPuz8j5U5a-as82JOqrEz9f9rAmMIJ1sMJiXqiwv97ZtmRKRf2mHngYggkqgxz6pYIAVdVxHWMAJKzP2N-dqINO6x_AiVNL2z2iwJhEevpp4vTjaNeP5Jw5_vhdDA6qnRGifyIaz_zx7UMjMDJp8bvDiBunugwQHpnejB0h_iGAwhljyHhNsXR4qoYHN_K6J8q9fUacmM" 
                />
                <div className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Alex Chen</h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mt-1">Chief Operations Officer</p>
              <div className="mt-4 flex gap-2">
                <span className="bg-surface-variant/40 px-3 py-1 rounded-full font-mono text-[8px] text-secondary uppercase tracking-wider">Admin Access</span>
                <span className="bg-surface-variant/40 px-3 py-1 rounded-full font-mono text-[8px] text-on-surface-variant uppercase tracking-wider">ID: FL-9921</span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {[
                { label: 'Account Information', icon: User },
                { label: 'Security & Privacy', icon: Shield },
                { label: 'Integrations', icon: Settings },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <Edit className="w-3 h-3 text-on-surface-variant opacity-30" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 border-l-4 border-secondary shadow-lg">
            <h3 className="font-mono text-[10px] text-secondary mb-4 flex items-center gap-2 uppercase tracking-widest font-bold">
              SYSTEM UPTIME
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-5xl text-on-surface tracking-tighter">99.98</span>
              <span className="font-mono text-xs text-on-surface-variant">%</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-2">All cloud connectors operating within nominal parameters.</p>
          </div>
        </section>

        {/* Main Content / Settings */}
        <section className="md:col-span-8 space-y-6">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-on-surface">Notification Preferences</h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded font-mono text-[8px] uppercase tracking-widest font-bold">6 Active Rules</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Critical Battery Alert', sub: 'Notify when charge < 15%', progress: 15, color: 'error', active: true },
                { title: 'Maintenance Proximity', sub: 'Alert within 500 miles', active: true, extra: 'PUSH & EMAIL' },
                { title: 'Geo-fence Violation', sub: 'Immediate alert for zones A-D', active: false },
                { title: 'Daily Fleet Digest', sub: 'Summary sent at 08:00 AM', active: true },
              ].map((pref, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-variant/20 border border-outline-variant/30 flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-on-surface">{pref.title}</p>
                    <p className="text-xs text-on-surface-variant">{pref.sub}</p>
                    {pref.progress && (
                      <div className="mt-3 flex items-center gap-4">
                        <div className="h-1 w-24 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full bg-${pref.color} w-1/4`} />
                        </div>
                        <span className={`font-mono text-[10px] text-${pref.color}`}>{pref.progress}%</span>
                      </div>
                    )}
                    {pref.extra && (
                      <div className="mt-3 flex items-center gap-2 text-secondary">
                        <Bell className="w-3 h-3" />
                        <span className="font-mono text-[8px] uppercase tracking-widest font-bold">{pref.extra}</span>
                      </div>
                    )}
                  </div>
                  <div className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors ${pref.active ? 'bg-primary' : 'bg-outline-variant'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform ${pref.active ? 'translate-x-5' : 'translate-x-0'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 border-l-4 border-tertiary">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-on-surface">Integrations & API</h3>
                <p className="text-xs text-on-surface-variant">Manage external fleet data synchronization</p>
              </div>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-widest font-bold glow-emerald">
                Generate Key
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-variant rounded-lg flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-on-surface" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">ChargePoint Enterprise</p>
                    <p className="font-mono text-[8px] text-primary uppercase tracking-widest font-bold">Connected • Syncing Live</p>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-variant rounded-lg flex items-center justify-center">
                    <BarChart className="w-5 h-5 text-on-surface" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Geotab Telemetry</p>
                    <p className="font-mono text-[8px] text-tertiary uppercase tracking-widest font-bold">Pending Configuration</p>
                  </div>
                </div>
                <button className="bg-outline-variant/20 border border-outline-variant text-on-surface px-3 py-1 rounded font-mono text-[10px] uppercase font-bold hover:bg-outline-variant/40 transition-colors">
                  Finish Setup
                </button>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-surface-container-low border border-dashed border-outline-variant/50">
                <p className="font-mono text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">PRODUCTION API KEY</p>
                <div className="flex items-center gap-3">
                  <code className="flex-grow bg-black/40 p-2 rounded-lg font-mono text-xs text-secondary truncate">
                    fl_live_9k2m_7s1v_88z0_p0x4...
                  </code>
                  <button className="bg-surface-variant hover:bg-surface-bright p-2 rounded-lg transition-colors text-primary">
                    <Key className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
