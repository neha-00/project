// src/components/PatientsListModal.jsx
export default function PatientsListModal({
  open,
  onClose,
  patients,
  onEdit,
  onDelete,
  onSelect, // NEW: called when user clicks a patient row
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="absolute inset-0 flex items-start justify-center mt-16 px-4">
        <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">All Patients</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="p-4 max-h-[70vh] overflow-auto">
            {patients.length === 0 ? (
              <div className="text-gray-500 text-center py-16">
                No patients yet. Add one with the + button.
              </div>
            ) : (
              <ul className="divide-y">
                {patients.map((p) => (
                  <li
                    key={p.patientId}
                    className="py-3 flex items-start justify-between gap-4"
                  >
                    {/* Clickable area selects the patient */}
                    <button
                      type="button"
                      className="text-left flex-1 hover:bg-gray-50 rounded-md p-2 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                      title="Load this patient"
                      onClick={() => onSelect?.(p)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelect?.(p);
                        }
                      }}
                    >
                      <div className="font-semibold text-gray-900">
                        {p.name}{' '}
                        <span className="text-gray-400">• {p.patientId}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Dx: {p.primaryDiagnosis?.diagnosis || '—'} • Age:{' '}
                        {p.generalInfo?.age ?? '—'} • {p.generalInfo?.sex || '—'}
                      </div>
                    </button>

                    {/* Actions */}
                    <div className="flex gap-2 shrink-0">
                      <button
                        className="px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-50"
                        onClick={() => onEdit(p)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
                        onClick={() => onDelete(p.patientId)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
