export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#FFFCF8] shadow-md">
      <div className="text-2xl font-bold text-green-800">knouri</div>
      <div className="flex space-x-6 items-center text-sm">
        <span className="hover:underline cursor-pointer">All Patients</span>
        <span className="text-red-500 font-medium">● Alerts</span>
        <div className="bg-green-100 text-green-900 px-3 py-1 rounded-full">Welcome, Firstname!</div>
      </div>
    </header>
  );
}
