const variants = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  error: 'border-red-200 bg-red-50 text-red-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
}

export default function Alert({ variant = 'success', title, children }) {
  return (
    <div role="alert" className={`rounded-xl border p-4 ${variants[variant] ?? variants.success}`}>
      {title && <h4 className="mb-1 font-bold">{title}</h4>}
      <div className="text-sm leading-6">{children}</div>
    </div>
  )
}