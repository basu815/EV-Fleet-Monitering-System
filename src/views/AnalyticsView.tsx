import { DollarSign, Trophy, BatteryCharging, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const chartData = [
  { name: "Sep '23", actual: 98, predicted: 98 },
  { name: 'Oct', actual: 97.5, predicted: 97 },
  { name: 'Nov', actual: 96, predicted: 96.5 },
  { name: 'Dec', actual: 95.8, predicted: 95.5 },
  { name: 'Jan \'24', actual: 95.2, predicted: 94.5 },
  { name: 'Feb', actual: 95, predicted: 94 },
  { name: 'Mar', actual: 94.8, predicted: 93.5 },
  { name: 'Apr', actual: 94.6, predicted: 93 },
  { name: 'May', actual: 94.5, predicted: 92.5 },
  { name: 'Jun', actual: 94.4, predicted: 92 },
  { name: 'Jul', actual: 94.3, predicted: 91.5 },
  { name: 'Aug \'24', actual: 94.2, predicted: 91 },
];

export default function AnalyticsView() {
  return (
    <div className="space-y-8">
      <section className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold text-on-surface">Analytics & Predictive Reports</h1>
          <p className="text-on-surface-variant">Fleet efficiency and battery health projections for Q3 2024.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface">System Live</span>
          </div>
          <button className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/20 transition-all text-xs font-mono uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12">
        <section className="md:col-span-12 lg:col-span-7 glass-card rounded-xl p-8 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10 text-left">
            <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <DollarSign className="text-secondary w-6 h-6" />
              Operational Cost-Benefit Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-2">
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">EV FLEET COST</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold text-primary">$1.2k</span>
                  <span className="text-sm text-on-surface-variant">/mo avg</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">TRADITIONAL ICE COST</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold text-on-surface-variant/50">$3.8k</span>
                  <span className="text-sm text-on-surface-variant/40">/mo avg</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-on-surface-variant/30 w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-primary-container/20 border border-primary/20 p-6 rounded-xl flex items-center justify-between z-10">
            <div>
              <p className="text-xl font-bold text-primary">Total Savings Highlight</p>
              <p className="text-sm text-on-surface">Saving $31,200 annually per 10 active units</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">+68%</span>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Efficiency Gain</p>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        </section>

        <section className="md:col-span-12 lg:col-span-5 glass-card rounded-xl p-6 flex flex-col text-left">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
              <Trophy className="text-tertiary w-6 h-6" />
              Driver Leaderboard
            </h3>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Q2 Rankings</span>
          </div>
          <div className="space-y-4 flex-grow flex flex-col justify-around">
            {[
              { name: 'Marco Verratti', route: 'Sector 7G', score: 98, rank: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBieLmio4UTq_8VMSIT3phAKTQSIijSvw8W17m20eaqDiadBVBT4CL5dVDf17Qan0z61QR_IMYVBFFJzhxVwJp1dK2JnSfldmu6u1qWv8MLaWJdLntzklh73I_n7QCjxvpvoAuQAPIn-vz1TvSWlRkBvj7H4Z5oj39D4gcwOs87zAHkIau2r7iAq-J4hZfdbYNWU9V_Zl8QxumDN6su-Gf8HVxBNtWWhE-aos7SDS4aZY4rZOLYFzRiBnYpgIYYPOITwuPU0a9-b5Sc' },
              { name: 'Elena Rodriguez', route: 'North Express', score: 94, rank: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlcekUkzk3KKCU9FvX1PSb_VYLsOsCu3pHaTBdnQhYhy5ciUAcEGuW-ILrNGK0o9BED8kpLcNVObnzhpVJAsEYnSKu7L8Cic4SwuIpgUHCjhPTdHmC467EeSoWoXj4XioVP-d2CrFNaOZriTKUgGYxtPmZ64K-13v1tTKa8l2PId7x_8e6GkXDyrRKx5U7GnA98296sC-0mHekALyXy1XKnhXtYHHM_oFriHHnLKaZAdpw-vXIEayf5dxnz3kQdahnLxgaTy0QO4j8' },
              { name: 'James Chen', route: 'Central Hub', score: 91, rank: 3, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJfIlPbTOXRsLLJ5xq6ULX6tBpjO7C_4w2tmETQtveLw8q2-hL-fRXWFEVudthhxpVPrBo0BtnJdtI6dQOeGBCQzV0njkLdoAA4LihPFZFoAcqadqKtZOIsE_0usX-4fsJ5P6Rhno0DrdbUOxSbwD1FxR_LTnHvba1-NDN4pC00DfHgvyz4_UjQOq19qBHQ9jr7VFAhWu336FCitBZbsb5NnKogbsRroBEKXnP5_YJKD47ZqPYDYJgrbG2n1fPLC0GZL865FJCOQUL' },
            ].map((driver) => (
              <div key={driver.name} className={`flex items-center gap-4 p-4 rounded-xl ${driver.rank === 1 ? 'bg-surface-container-high border border-primary/10' : 'hover:bg-white/5'} transition-all`}>
                <div className="relative">
                  <img src={driver.img} className={`w-12 h-12 rounded-full border-2 ${driver.rank === 1 ? 'border-primary' : 'border-outline-variant'}`} alt={driver.name} />
                  <span className={`absolute -bottom-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${driver.rank === 1 ? 'bg-primary text-on-primary' : 'bg-outline-variant text-on-surface'}`}>{driver.rank}</span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-on-surface">{driver.name}</p>
                  <p className="text-xs text-on-surface-variant">Route: {driver.route}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xl text-primary">{driver.score}</p>
                  <p className="font-mono text-[8px] text-primary/70 uppercase tracking-widest">ECO-SCORE</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-12 glass-card rounded-xl p-8 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
                <BatteryCharging className="text-primary w-6 h-6" />
                Battery Health: Degradation Over 12mo
              </h3>
              <p className="text-sm text-on-surface-variant">Predicted vs. Actual capacity retention based on fast-charge cycles.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_#4edea3]" />
                <span className="font-mono text-[10px] text-on-surface uppercase tracking-widest">Actual Health</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-dashed border-outline" />
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Predicted</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3449" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#86948a" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  interval="preserveStartEnd"
                />
                <YAxis hide domain={[90, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171f33', border: '1px solid #3c4a42', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '12px', fontFamily: 'JetBrains Mono' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#86948a" 
                  strokeDasharray="5 5" 
                  strokeWidth={2} 
                  dot={false} 
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#4edea3" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#4edea3', strokeWidth: 0 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-outline-variant/20 pt-8">
            {[
              { label: 'CYCLE COUNT', value: '1,422', sub: 'avg' },
              { label: 'DC FAST CHARGE %', value: '38%', sub: 'total', color: 'secondary' },
              { label: 'REMAINING LIFE', value: '8.4', sub: 'years', color: 'primary' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                <p className={`font-mono text-3xl text-${stat.color || 'on-surface'}`}>{stat.value} <span className="text-xs font-sans text-on-surface-variant">{stat.sub}</span></p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
