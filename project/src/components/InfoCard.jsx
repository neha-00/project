import Card from './Card';

export default function InfoCard({ title, items, isList }) {
  return (
    <Card className="space-y-2">
      {title && <h3 className="text-sm font-semibold text-gray-700">{title}</h3>}
      <ul className="text-sm text-gray-600 space-y-1">
        {items.map((item, i) => (
          <li key={i}>
            <span className="font-medium text-gray-800">{item.label}: </span>
            {item.value}
          </li>
        ))}
      </ul>
    </Card>
  );
}
