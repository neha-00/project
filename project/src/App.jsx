// src/App.jsx
import { useEffect, useMemo, useState } from 'react';

import Sidebar from './components/Sidebar';
import VitalsCard from './components/VitalsCard';
import AlertsList from './components/AlertsList';
import Header from './components/Header';
import PatientFormModal from './components/PatientFormModal';
import PatientsListModal from './components/PatientsListModal';

const STORAGE_KEY = 'knouri-patients';
const SELECTED_KEY = 'knouri-selected-id';

// Optional fallback patient when nothing is selected/empty storage
const DEFAULT_PATIENT = {
  patientId: 'P-2024-0156',
  name: 'Jane Doe',
  generalInfo: { age: 34, sex: 'Female', bloodType: 'A+', heightCm: 165, weightKg: 68 },
  primaryDiagnosis: { diagnosis: 'Congestive Heart Failure', admittedDate: '2025-06-29' },
  medicalHistory: ['Hypertension (2019)', 'High Cholesterol (2021)', 'Arrhythmias (2022)'],
  medications: ['Losartan 50mg', 'Atorvastatin 10mg', 'Metoprolol 25mg'],
  careTeam: [
    { name: 'Dr. John Smith', role: 'Cardiologist' },
    { name: 'Nurse Emily Chen', role: 'Primary Nurse' },
  ],
};

export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [editing, setEditing] = useState(null); // patient being edited

  // -------- Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPatients(JSON.parse(raw));
    } catch {}
    const sel = localStorage.getItem(SELECTED_KEY);
    if (sel) setSelectedPatientId(sel);
  }, []);

  // -------- Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
  }, [patients]);

  useEffect(() => {
    if (selectedPatientId) {
      localStorage.setItem(SELECTED_KEY, selectedPatientId);
    }
  }, [selectedPatientId]);

  // -------- Compute currently selected patient (with safe fallback)
  const selectedPatient = useMemo(() => {
    return (
      patients.find((p) => p.patientId === selectedPatientId) ||
      patients[0] ||
      DEFAULT_PATIENT
    );
  }, [patients, selectedPatientId]);

  // -------- CRUD handlers
  const handleCreatePatient = (payload) => {
    // prevent dup IDs
    if (patients.some((p) => p.patientId === payload.patientId)) {
      alert('A patient with that ID already exists.');
      return;
    }
    setPatients((prev) => [...prev, payload]);
    setSelectedPatientId(payload.patientId); // select the new patient
    setShowForm(false);
  };

  const handleUpdatePatient = (payload) => {
    setPatients((prev) =>
      prev.map((p) => (p.patientId === payload.patientId ? payload : p))
    );
    setEditing(null);
    setShowForm(false);
  };

  const handleDeletePatient = (patientId) => {
    if (!confirm('Delete this patient?')) return;
    setPatients((prev) => {
      const next = prev.filter((p) => p.patientId !== patientId);
      // if we deleted the selected one, pick first (or none)
      if (selectedPatientId === patientId) {
        const newSel = next[0]?.patientId ?? null;
        setSelectedPatientId(newSel);
        if (!newSel) localStorage.removeItem(SELECTED_KEY);
      }
      return next;
    });
  };

  // -------- Modal openers
  const openCreate = () => {
    setEditing(null);
    setShowForm(true);
  };

  const openEdit = (patient) => {
    setEditing(patient);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#014421] via-[#1e7035] to-[#b6fcb6] text-gray-800">
      {/* Header now gets the selected patient so it can show their name */}
      <Header
        onAddPatient={openCreate}
        onShowPatients={() => setShowList(true)}
        selectedPatient={selectedPatient}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {/* Sidebar shows selected patient details */}
        <Sidebar patient={selectedPatient} />

        <div className="lg:col-span-2 space-y-4">
          <VitalsCard />
          <AlertsList />
        </div>
      </div>

      {/* Add/Edit Patient Form */}
      <PatientFormModal
        open={showForm}
        onClose={() => {
          setShowForm(false);
          setEditing(null);
        }}
        onSubmit={editing ? handleUpdatePatient : handleCreatePatient}
        mode={editing ? 'edit' : 'create'}
        initialData={editing}
      />

      {/* All Patients List */}
      <PatientsListModal
        open={showList}
        onClose={() => setShowList(false)}
        patients={patients}
        onEdit={(p) => {
          setShowList(false);
          openEdit(p);
        }}
        onDelete={handleDeletePatient}
        onSelect={(p) => {
          setSelectedPatientId(p.patientId);
          setShowList(false);
        }}
      />
    </div>
  );
}
