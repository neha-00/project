//function App() {
  //return (
    //<div className="bg-yellow-300 p-8">
      //<div className="text-red-500 text-xl font-bold">TAILWIND TEST</div>
    //</div>
  //);
//}

//export default App;

import Sidebar from './components/Sidebar';
import VitalsCard from './components/VitalsCard';
import AlertsList from './components/AlertsList';
import Header from './components/Header'; // you'll create this next

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-400 text-gray-800">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <Sidebar />
        <div className="lg:col-span-2 space-y-4">
          <VitalsCard />
          <AlertsList />
        </div>
      </div>
    </div>
  );
}
