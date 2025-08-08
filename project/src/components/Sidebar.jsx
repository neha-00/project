// src/components/Sidebar.jsx
export default function Sidebar({ patient }) {
  const gi = patient?.generalInfo || {};
  const pd = patient?.primaryDiagnosis || {};
  const history = patient?.medicalHistory || [];
  const meds = patient?.medications || [];
  const care = patient?.careTeam || [];

  return (
    <div className="space-y-4 p-4 text-sm text-white">
      {/* Patient header */}
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{patient?.name ?? '—'}</h2>
        <p className="text-gray-300">Patient ID: #{patient?.patientId ?? '—'}</p>
      </div>

      {/* General Information */}
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">General Information</h3>
        <p>Age: {gi?.age ?? '—'}</p>
        <p>Sex: {gi?.sex ?? '—'}</p>
        <p>Blood Type: {gi?.bloodType ?? '—'}</p>
        <p>Height: {gi?.heightCm != null ? `${gi.heightCm} cm` : '—'}</p>
        <p>Weight: {gi?.weightKg != null ? `${gi.weightKg} kg` : '—'}</p>
      </div>

      {/* Primary Diagnosis */}
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Primary Diagnosis</h3>
        <p>{pd?.diagnosis ?? '—'}</p>
        <p className="text-xs text-gray-300">Admitted: {pd?.admittedDate ?? '—'}</p>
      </div>

      {/* Medical History */}
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Medical History</h3>
        <ul className="list-disc list-inside text-sm">
          {history.length
            ? history.map((item, i) => <li key={i}>{item}</li>)
            : <li>—</li>}
        </ul>
      </div>

      {/* Current Medications */}
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Current Medications</h3>
        <ul className="list-disc list-inside text-sm">
          {meds.length
            ? meds.map((m, i) => <li key={i}>{m}</li>)
            : <li>—</li>}
        </ul>
      </div>

      {/* Care Team */}
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Care Team</h3>
        {care.length ? (
          care.map((c, i) => (
            <div className="mb-3 text-sm" key={`${c.name}-${i}`}>
              <p className="font-medium text-white">{c?.name ?? '—'}</p>
              <p className="text-gray-300">{c?.role ?? '—'}</p>
            </div>
          ))
        ) : (
          <p>—</p>
        )}
      </div>
    </div>
  );
}
