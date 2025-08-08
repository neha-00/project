import { useEffect, useState } from "react";

export default function PatientFormModal({ open, onClose, onSubmit, mode = "create", initialData = null }) {
  if (!open) return null;

  const [form, setForm] = useState({
    patientId: "",
    name: "",
    age: "",
    sex: "Female",
    bloodType: "A+",
    heightCm: "",
    weightKg: "",
    diagnosis: "",
    admittedDate: "",
    history: "",
    meds: "",
    doctorName: "",
    doctorRole: "Cardiologist",
    nurseName: "",
    nurseRole: "Primary Nurse",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        patientId: initialData.patientId || "",
        name: initialData.name || "",
        age: initialData.generalInfo?.age ?? "",
        sex: initialData.generalInfo?.sex || "Female",
        bloodType: initialData.generalInfo?.bloodType || "A+",
        heightCm: initialData.generalInfo?.heightCm ?? "",
        weightKg: initialData.generalInfo?.weightKg ?? "",
        diagnosis: initialData.primaryDiagnosis?.diagnosis || "",
        admittedDate: initialData.primaryDiagnosis?.admittedDate || "",
        history: (initialData.medicalHistory || []).join("; "),
        meds: (initialData.medications || []).join("; "),
        doctorName: initialData.careTeam?.[0]?.name || "",
        doctorRole: initialData.careTeam?.[0]?.role || "Cardiologist",
        nurseName: initialData.careTeam?.[1]?.name || "",
        nurseRole: initialData.careTeam?.[1]?.role || "Primary Nurse",
      });
    }
  }, [initialData]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.patientId.trim() || !form.name.trim()) {
      alert("Please enter at least Patient ID and Name.");
      return;
    }
    const payload = {
      patientId: form.patientId.trim(),
      name: form.name.trim(),
      generalInfo: {
        age: form.age ? Number(form.age) : null,
        sex: form.sex,
        bloodType: form.bloodType,
        heightCm: form.heightCm ? Number(form.heightCm) : null,
        weightKg: form.weightKg ? Number(form.weightKg) : null,
      },
      primaryDiagnosis: {
        diagnosis: form.diagnosis,
        admittedDate: form.admittedDate,
      },
      medicalHistory: form.history.split(";").map((s) => s.trim()).filter(Boolean),
      medications: form.meds.split(";").map((s) => s.trim()).filter(Boolean),
      careTeam: [
        { name: form.doctorName, role: form.doctorRole },
        { name: form.nurseName, role: form.nurseRole },
      ],
    };
    onSubmit(payload);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-start justify-center mt-16 px-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">{mode === "edit" ? "Edit Patient" : "Add Patient"}</h3>
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Patient ID</label>
                <input className="w-full border rounded-lg px-3 py-2"
                  value={form.patientId}
                  onChange={update("patientId")}
                  disabled={mode === "edit"}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input className="w-full border rounded-lg px-3 py-2"
                  value={form.name} onChange={update("name")} />
              </div>
            </div>

            <fieldset className="border rounded-lg p-4">
              <legend className="text-sm font-semibold px-2">General Information</legend>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <input className="border rounded-lg px-3 py-2" placeholder="Age" value={form.age} onChange={update("age")} />
                <select className="border rounded-lg px-3 py-2" value={form.sex} onChange={update("sex")}>
                  <option>Female</option><option>Male</option><option>Other</option>
                </select>
                <select className="border rounded-lg px-3 py-2" value={form.bloodType} onChange={update("bloodType")}>
                  {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(bt => <option key={bt}>{bt}</option>)}
                </select>
                <input className="border rounded-lg px-3 py-2" placeholder="Height (cm)" value={form.heightCm} onChange={update("heightCm")} />
                <input className="border rounded-lg px-3 py-2" placeholder="Weight (kg)" value={form.weightKg} onChange={update("weightKg")} />
              </div>
            </fieldset>

            <fieldset className="border rounded-lg p-4">
              <legend className="text-sm font-semibold px-2">Primary Diagnosis</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input className="border rounded-lg px-3 py-2" placeholder="Diagnosis" value={form.diagnosis} onChange={update("diagnosis")} />
                <input type="date" className="border rounded-lg px-3 py-2" value={form.admittedDate} onChange={update("admittedDate")} />
              </div>
            </fieldset>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Medical History (semicolon separated)</label>
                <textarea className="w-full border rounded-lg px-3 py-2" rows={3} value={form.history} onChange={update("history")} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Current Medications (semicolon separated)</label>
                <textarea className="w-full border rounded-lg px-3 py-2" rows={3} value={form.meds} onChange={update("meds")} />
              </div>
            </div>

            <fieldset className="border rounded-lg p-4">
              <legend className="text-sm font-semibold px-2">Care Team</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input className="border rounded-lg px-3 py-2" placeholder="Doctor Name" value={form.doctorName} onChange={update("doctorName")} />
                <input className="border rounded-lg px-3 py-2" placeholder="Doctor Role" value={form.doctorRole} onChange={update("doctorRole")} />
                <input className="border rounded-lg px-3 py-2" placeholder="Nurse Name" value={form.nurseName} onChange={update("nurseName")} />
                <input className="border rounded-lg px-3 py-2" placeholder="Nurse Role" value={form.nurseRole} onChange={update("nurseRole")} />
              </div>
            </fieldset>

            <div className="flex justify-end gap-3">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-[#9cb984] text-white hover:opacity-90">
                {mode === "edit" ? "Update Patient" : "Save Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
