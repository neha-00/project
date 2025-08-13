import { useEffect, useState } from 'react';
import ThermometerIcon from '../assets/thermometer.png';

export default function VitalsCard() {
  const [heartRate, setHeartRate] = useState(75);
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);
  const [respiratoryRate, setRespiratoryRate] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(Math.floor(Math.random() * 201)); // 0–200
      setSystolic(Math.floor(Math.random() * (180 - 90 + 1)) + 90); // 90–180
      setDiastolic(Math.floor(Math.random() * (120 - 60 + 1)) + 60); // 60–120
      setRespiratoryRate(Math.floor(Math.random() * (24 - 12 + 1)) + 12); // 12–24 typical
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-6 w-full">
        {/* Heart Rate */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[150px] flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-golden"></span>
            Heart Rate
          </div>
          <div className="text-red text-lg font-medium">
            {heartRate} <span className="text-sm">BPM</span>
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[150px] flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-golden"></span>
            Blood Pressure
          </div>
          <div className="text-lg font-medium text-gray-800">
            {systolic} <span className="text-sm text-gray-500">systolic</span>
          </div>
          <div className="text-lg font-medium text-gray-800">
            {diastolic} <span className="text-sm text-gray-500">diastolic</span>
          </div>
        </div>

        {/* Respiratory Rate */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[150px] flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-sage"></span>
            Respiratory Rate
          </div>

          {/* ✅ Animated squiggle line */}
          <div className="w-full h-6 overflow-hidden relative my-2">
            <div
              className="absolute top-0 left-0 w-[200%] h-full"
              style={{
                animation: 'squiggleScroll 4s linear infinite',
              }}
            >
              <svg
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                className="w-full h-full text-sage fill-none stroke-current stroke-2"
              >
                <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10" />
              </svg>
            </div>
          </div>

          <div className="text-sage text-lg font-medium">
            {respiratoryRate} <span className="text-sm">breaths/min</span>
          </div>
        </div>

        {/* Body Temperature */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[200px] flex flex-col justify-between relative">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-sage"></span>
            Body Temperature
          </div>

          <div className="flex justify-center">
            <img
              src={ThermometerIcon}
              alt="Thermometer Icon"
              className="h-[150px] ml-20"
            />
          </div>

          <div className="absolute bottom-4 left-6 text-[28px] text-[#9cb984] font-semibold">
            98.6<span className="text-med align-top ml-1">°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
