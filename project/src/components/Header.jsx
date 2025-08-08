export default function Header({ onAddPatient, onShowPatients, selectedPatient }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#FFFCF8] shadow-md">
      <div className="text-2xl font-bold text-green-800">knouri</div>

      <div className="flex space-x-6 items-center text-sm">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShowPatients}
            className="hover:underline cursor-pointer"
            aria-label="Show all patients"
          >
            All Patients
          </button>

          <button
            type="button"
            onClick={onAddPatient}
            aria-label="Add patient"
            className="w-7 h-7 rounded-full grid place-items-center bg-[#9cb984] text-white hover:opacity-90 shadow-sm transition"
            title="Add patient"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>

        <span className="text-red-500 font-medium">● Alerts</span>
        
        {/* Dynamic patient name */}
        <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full">
          Welcome, {selectedPatient?.name || "Firstname"}!
        </div>
      </div>
    </header>
  );
}
