export default function Alerts() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Alerts & Notifications</h2>

      {/* Alert 1 */}
      <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-golden"></span>
            <span className="text-sm font-medium text-gray-800">Blood Pressure Elevated</span>
          </div>
          <p className="text-xs text-gray-500">BP reading 142/89 – Above normal range</p>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">2 min ago</span>
      </div>

      {/* Alert 2 */}
      <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-sage"></span>
            <span className="text-sm font-medium text-gray-800">Medication Taken</span>
          </div>
          <p className="text-xs text-gray-500">Prescribed time to take medication passed</p>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">15 min ago</span>
      </div>

      {/* Alert 3 */}
      <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-sage"></span>
            <span className="text-sm font-medium text-gray-800">Vitals Check Completed</span>
          </div>
          <p className="text-xs text-gray-500">All vital signs recorded and within acceptable ranges</p>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">1 hr ago</span>
      </div>
    </div>
  );
}
