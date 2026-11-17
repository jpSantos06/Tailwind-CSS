export default function Input({ label, id, type = 'text', placeholder, value, onChange, helperText, error, disabled = false, name }) {
  const inputId = id ?? name ?? 'ui-input'
  return (
    <div className="w-full">
      {label && <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100 ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'}`}
      />
      {(error || helperText) && <p className={`mt-1.5 text-xs ${error ? 'text-red-600' : 'text-slate-500'}`}>{error || helperText}</p>}
    </div>
  )
}