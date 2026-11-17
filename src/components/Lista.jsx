export default function Lista({ items = [] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={item.id ?? index} className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          {item.label ?? item}
        </li>
      ))}
    </ul>
  )
}