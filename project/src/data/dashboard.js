// src/data/dashboard.js
export const generalInfo = [
  { label: 'Age', value: '34 years' },
  { label: 'Sex', value: 'Female' },
  { label: 'Blood Type', value: 'A+' },
  { label: 'Weight', value: '68 kg' },
  { label: 'Height', value: '165 cm' },
];

export const medicalHistory = [
  'Hypertension (2019)',
  'High Cholesterol (2021)',
  'Arrhythmias (2022)',
];

export const medications = [
  { name: 'Lisinopril', dosage: '10mg daily' },
  { name: 'Metoprolol succinate', dosage: '50mg daily' },
  { name: 'Furosemide', dosage: '40mg daily' },
];

export const careTeam = [
  { name: 'Dr. First Last', role: 'Attending Cardiologist' },
  { name: 'Nurse First Last', role: 'Primary Nurse' },
];

export const vitals = [
  {
    id: 'heart',
    label: 'Heart Rate',
    color: 'bg-green-400',
    value: 75,
    unit: 'BPM',
    chartPath: 'M0,30 Q25,20 50,30 T100,30 T150,30 T200,30',
  },
  {
    id: 'bp-sys',
    label: 'Systolic',
    color: 'bg-yellow-400',
    value: 120,
    unit: 'mmHg',
    progress: 75,
  },
  {
    id: 'bp-dia',
    label: 'Diastolic',
    color: 'bg-yellow-400',
    value: 80,
    unit: 'mmHg',
    progress: 50,
  },
  {
    id: 'resp',
    label: 'Respiratory Rate',
    color: 'bg-green-400',
    value: 18,
    unit: 'breaths/min',
    chartPath: 'M0,30 Q25,15 50,30 T100,30 T150,30 T200,30',
  },
  {
    id: 'temp',
    label: 'Body Temperature',
    color: 'bg-green-400',
    value: 98.6,
    unit: '°F',
    icon: 'Thermometer',
  },
];

export const alerts = [
  { type: 'warning', title: 'Blood Pressure Elevated', details: 'BP reading 142/89', time: '2 min ago' },
  { type: 'success', title: 'Medication Taken', details: 'Prescribed time passed', time: '15 min ago' },
  { type: 'info',    title: 'Vitals Check Completed', details: 'All vitals within range', time: '1 hr ago' },
];
