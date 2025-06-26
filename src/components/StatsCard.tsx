interface StatsCardProps{
  title:string;
  count:number | string;
}
export default function StatsCard({ title, count }:StatsCardProps) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl text-blue-600">{count}</p>
    </div>
  );
}
