export default function Sidebar() {
  return (
    <div className="space-y-4 p-4 text-sm text-white">
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Jane Doe</h2>
        <p className="text-gray-300">Patient ID: #P-2024-0156</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">General Information</h3>
        <p>Age: 34</p>
        <p>Sex: Female</p>
        <p>Blood Type: A+</p>
        <p>Height: 165 cm</p>
        <p>Weight: 68 kg</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Primary Diagnosis</h3>
        <p>Congestive Heart Failure</p>
        <p className="text-xs text-gray-300">Admitted: June 29, 2025</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Medical History</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Hypertension (2019)</li>
          <li>High Cholesterol (2021)</li>
          <li>Arrhythmias (2022)</li>
        </ul>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Current Medications</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Losartan 50mg</li>
          <li>Atorvastatin 10mg</li>
          <li>Metoprolol 25mg</li>
        </ul>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Care Team</h3>
        <div className="mb-3 text-sm">
          <p className="font-medium text-white">Dr. John Smith</p>
          <p className="text-white-300">Cardiologist</p>
        </div>
        <div className="text-sm">
          <p className="font-medium text-white">Nurse Emily Chen</p>
          <p className="text-brightwhite-300">Primary Nurse</p>
        </div>
      </div>
    </div>
  );
}
