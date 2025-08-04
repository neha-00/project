import Sidebar from '../components/Sidebar';
import VitalsCard from '../components/VitalsCard';
import AlertsList from '../components/AlertsList';
import {
  generalInfo, medicalHistory, medications,
  careTeam, vitals, alerts
} from '../data/dashboard';

export default function Dashboard() {
  const liveTime = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-700 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* … keep your existing header code … */}

        <div className="text-right py-2">
          <span className="text-white/70 text-sm">
            Live monitoring • {liveTime}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6 p-6">
          <Sidebar
            patient={{ name: 'Patient Name', id: '#P-2024-0156' }}
            generalInfo={generalInfo}
            medicalHistory={medicalHistory}
            medications={medications}
            careTeam={careTeam}
          />

          <main className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vitals.map(v => <VitalsCard key={v.id} item={v} />)}
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-6 pb-0">
                <h3 className="text-lg font-semibold text-gray-700">
                  Recent Alerts & Notifications
                </h3>
              </div>
              <div className="p-6 pt-0">
                <AlertsList alerts={alerts} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
