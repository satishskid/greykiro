interface InputProps {
  type?: "text" | "email";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  id?: string;
  name?: string;
  className?: string;
  required?: boolean;
}

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  id,
  name,
  className = "",
  required = false,
}: InputProps) {
  const baseStyles = "w-full px-4 py-3 rounded-lg border bg-white text-brand-charcoal placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent";
  const errorStyles = error ? "border-red-500 focus:ring-red-500" : "border-gray-300";
  
  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`${baseStyles} ${errorStyles} ${className}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
