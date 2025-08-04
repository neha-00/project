export default function AlertsList({ alerts }) {
  return (
    <div className="space-y-4">
      {alerts.map((a,i) => (
        <div key={i} className="flex items-start gap-3 p-3 bg-gray-100 rounded-lg">
          <div className={`w-3 h-3 rounded-full mt-1 ${
            a.type === 'warning' ? 'bg-yellow-400' : a.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
          }`} />
          <div className="flex-1">
            <p className="font-medium text-gray-700">{a.title}</p>
            <p className="text-sm text-gray-500">{a.details}</p>
          </div>
          <span className="text-sm text-gray-500">{a.time}</span>
        </div>
      ))}
    </div>
  );
}
