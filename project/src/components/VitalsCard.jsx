import Card from './Card';
//import { Progress, Thermometer } from 'lucide-react'; // ✅ This is fine

export default function VitalsCard({ item }) {
  return (
    <Card className="text-gray-800 text-center">
      <h4 className="text-sm font-medium flex justify-center items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
        {item.title}
      </h4>
      <div className="text-2xl font-bold">{item.value}</div>
      {item.unit && <p className="text-sm text-gray-500">{item.unit}</p>}
    </Card>
  );
}
