//import InfoCard from './InfoCard';
// import Avatar from './ui/Avatar'; dont
// import AvatarImage from './ui/AvatarImage';dont
// import AvatarFallback from './ui/AvatarFallback';dont
//export default function Sidebar({ patient, generalInfo, medicalHistory, medications, careTeam }) {
  //return (
    //<aside className="space-y-4">
      //{/* Patient Info */}
      //<InfoCard
        //items={[{ label: patient.name, value: patient.id }]}
        //isList={false}
      ///>
      //<InfoCard title="General Information" items={generalInfo} />
      //<InfoCard title="Medical History" items={medicalHistory} isList />
      //<InfoCard title="Current Medications" items={medications.map(m => ({ label: m.name, value: m.dosage }))} />
      //<InfoCard title="Care Team" items={careTeam.map(c => ({ label: c.name, value: c.role }))} />
    //</aside>
  //);
//}
export default function Sidebar() {
  return (
    <div className="space-y-4 p-4 text-sm text-white">
      <div className="bg-green-900 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">Jane Doe</h2>
        <p className="text-gray-300">Patient ID: #P-2024-0156</p>
      </div>
      <div className="bg-green-900 p-4 rounded-lg shadow-md">
        <h3 className="font-bold">General Information</h3>
        <p>Age: 34 • Sex: Female</p>
        <p>Blood Type: A+ • Height: 165 cm • Weight: 68 kg</p>
      </div>
      <div className="bg-green-900 p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Primary Diagnosis</h3>
        <p>Congestive Heart Failure</p>
        <p className="text-xs text-gray-300">Admitted: June 29, 2025</p>
      </div>
      <div className="bg-green-900 p-4 rounded-lg shadow-md">
        <h3 className="font-bold">Medical History</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Hypertension (2019)</li>
          <li>High Cholesterol (2021)</li>
          <li>Arrhythmias (2022)</li>
        </ul>
      </div>
    </div>
  );
}

