export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-extrabold tracking-tight">UI<span className="text-blue-400">Kit</span></a>
        <span className="rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-slate-300">React + Tailwind CSS</span>
      </div>
    </header>
  )
}