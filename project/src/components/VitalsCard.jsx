import ThermometerIcon from '../assets/thermometer.png';

export default function VitalsCard() {
  return (
    <div className="max-w-6xl mx-auto px-4"> {/* 💡 NEW wrapper */}
      <div className="grid grid-cols-2 gap-6 w-full">
        {/* Heart Rate */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[150px] flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-golden"></span>
            Heart Rate
          </div>
          <div className="text-red text-lg font-medium">
            75 <span className="text-sm">BPM</span>
          </div>
        </div>

        {/* Blood Pressure */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[150px] flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-golden"></span>
            Blood Pressure
          </div>
          <div className="text-lg font-medium text-gray-800">
            120 <span className="text-sm text-gray-500">systolic</span>
          </div>
          <div className="text-lg font-medium text-gray-800">
            80 <span className="text-sm text-gray-500">diastolic</span>
          </div>
        </div>

        {/* Respiratory Rate */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[150px] flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-sage"></span>
            Respiratory Rate
          </div>
          <div className="text-sage text-lg font-medium">
            18 <span className="text-sm">breaths/min</span>
          </div>
        </div>

        {/* Body Temperature */}
        <div className="bj-offwhite rounded-2xl shadow-lg p-6 min-h-[200px] flex flex-col justify-between relative">
          {/* Label */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-2">
            <span className="w-4 h-4 rounded-full inline-block mr-2 bj-sage"></span>
            Body Temperature
          </div>

          {/* Thermometer */}
          <div className="flex justify-center">
            <img
              src={ThermometerIcon}
              alt="Thermometer Icon"
              className="h-[150px] ml-20" // Adjusted positioning
            />
          </div>

          {/* Temperature bottom-left */}
          <div className="absolute bottom-4 left-6 text-[28px] text-[#9cb984] font-semibold">
            98.6<span className="text-med align-top ml-1">°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
