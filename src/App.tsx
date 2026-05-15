/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';
import OverviewView from './views/OverviewView';
import MapView from './views/MapView';
import ChargingView from './views/ChargingView';
import AnalyticsView from './views/AnalyticsView';
import SafetyView from './views/SafetyView';
import MaintenanceView from './views/MaintenanceView';
import SettingsView from './views/SettingsView';
import DispatchView from './views/DispatchView';

export default function App() {
  const [currentView, setCurrentView] = useState('overview');

  const renderView = () => {
    switch (currentView) {
      case 'overview': return <OverviewView />;
      case 'map': return <MapView />;
      case 'charging': return <ChargingView />;
      case 'analytics': return <AnalyticsView />;
      case 'safety': return <SafetyView />;
      case 'maintenance': return <MaintenanceView />;
      case 'settings': return <SettingsView />;
      case 'dispatch': return <DispatchView />;
      default: return <OverviewView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-on-surface font-sans selection:bg-primary/30">
      {/* Sidebar for Desktop */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:pl-sidebar pb-24 md:pb-0">
        <TopBar />
        
        <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Bottom Nav for Mobile */}
      <BottomNav currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
}
