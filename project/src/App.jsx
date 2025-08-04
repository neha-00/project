import Dashboard from "./components/dashboard"; // Make sure dashboard.jsx exports Dashboard properly
import {
  patient,
  generalInfo,
  medicalHistory,
  medications,
  careTeam,
  vitals,
  alerts,
} from "./data/dashboard";
import "./App.css";

function App() {
  return (
    <Dashboard
      patient={patient}
      generalInfo={generalInfo}
      medicalHistory={medicalHistory}
      medications={medications}
      careTeam={careTeam}
      vitals={vitals}
      alerts={alerts}
    />
  );
}

export default App;
