export default function AlertsList() {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Alerts & Notifications</h2>

      <div className="space-y-3">
        {/* Alert 1 */}
        <div className="flex justify-between items-start border-b pb-2">
          <div>
            <p className="text-yellow-500 font-medium flex items-center">
              ● <span className="ml-1">Blood Pressure Elevated</span>
            </p>
            <p className="text-xs text-gray-500">BP reading 142/89 – Above normal range</p>
          </div>
          <span className="text-xs text-gray-400">2 min ago</span>
        </div>

        {/* Alert 2 */}
        <div className="flex justify-between items-start border-b pb-2">
          <div>
            <p className="text-green-500 font-medium flex items-center">
              ● <span className="ml-1">Medication Taken</span>
            </p>
            <p className="text-xs text-gray-500">Prescribed time to take medication passed</p>
          </div>
          <span className="text-xs text-gray-400">15 min ago</span>
        </div>

        {/* Alert 3 */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-green-500 font-medium flex items-center">
              ● <span className="ml-1">Vitals Check Completed</span>
            </p>
            <p className="text-xs text-gray-500">All vital signs recorded and within acceptable ranges</p>
          </div>
          <span className="text-xs text-gray-400">1 hr ago</span>
        </div>
      </div>
    </div>
  );
}
