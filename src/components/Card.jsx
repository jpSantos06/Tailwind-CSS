export default function Card({ title, description, children, className = '' }) {
  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md ${className}`}>
      {title && <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>}
      {description && <p className="mb-4 text-sm leading-6 text-slate-600">{description}</p>}
      {children}
    </section>
  )
}