import InfoCard from './InfoCard';
// import Avatar from './ui/Avatar';
// import AvatarImage from './ui/AvatarImage';
// import AvatarFallback from './ui/AvatarFallback';
export default function Sidebar({ patient, generalInfo, medicalHistory, medications, careTeam }) {
  return (
    <aside className="space-y-4">
      {/* Patient Info */}
      <InfoCard
        items={[{ label: patient.name, value: patient.id }]}
        isList={false}
      />
      <InfoCard title="General Information" items={generalInfo} />
      <InfoCard title="Medical History" items={medicalHistory} isList />
      <InfoCard title="Current Medications" items={medications.map(m => ({ label: m.name, value: m.dosage }))} />
      <InfoCard title="Care Team" items={careTeam.map(c => ({ label: c.name, value: c.role }))} />
    </aside>
  );
}
