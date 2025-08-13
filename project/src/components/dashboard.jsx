import Sidebar from '../components/Sidebar';
import VitalsCard from '../components/VitalsCard';
import AlertsList from '../components/AlertsList';

export default function Dashboard({
  patient,
  generalInfo,
  medicalHistory,
  medications,
  careTeam,
  vitals,
  alerts,
}) {
  const liveTime = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-700 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold">knouri</h1>
          <div className="bg-white text-green-800 rounded-full px-4 py-1 text-sm font-semibold">
            Welcome, {patient.name}
          </div>
        </header>

        {/* Live monitoring time */}
        <div className="text-right text-sm text-white/70 pb-2">
          Live monitoring • {liveTime}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 p-6">
          {/* Sidebar */}
          <Sidebar
            patient={patient}
            generalInfo={generalInfo}
            medicalHistory={medicalHistory}
            medications={medications}
            careTeam={careTeam}
          />

          {/* Main Content */}
          <main className="space-y-6">
            {/* Vitals Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {vitals.map((v) => (
                <VitalsCard key={v.id} item={v} />
              ))}
            </div>

            {/* Alerts Section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm text-gray-800">
              <div className="p-6 pb-0">
                <h3 className="text-lg font-semibold">Recent Alerts & Notifications</h3>
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
