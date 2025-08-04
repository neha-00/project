export default function VitalsCard() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Heart Rate */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="text-sm text-gray-500 font-semibold mb-2">🟡 Heart Rate</div>
        <div className="text-red-600 text-lg font-medium">75 <span className="text-sm">BPM</span></div>
      </div>

      {/* Blood Pressure */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="text-sm text-gray-500 font-semibold mb-2">🟡 Blood Pressure</div>
        <div className="text-lg font-medium text-gray-800">120 <span className="text-sm text-gray-500">systolic</span></div>
        <div className="text-lg font-medium text-gray-800">80 <span className="text-sm text-gray-500">diastolic</span></div>
      </div>

      {/* Respiratory Rate */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="text-sm text-gray-500 font-semibold mb-2">🟢 Respiratory Rate</div>
        <div className="text-green-600 text-lg font-medium">18 <span className="text-sm">breaths/min</span></div>
      </div>

      {/* Body Temperature */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="text-sm text-gray-500 font-semibold mb-2">🟢 Body Temperature</div>
        <div className="text-green-700 text-lg font-medium">98.6 <span className="text-sm">°F</span></div>
      </div>
    </div>
  );
}
