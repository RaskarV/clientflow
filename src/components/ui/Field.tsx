import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  error?: string;
  hint?: string;
}

const control =
  "w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600";

function borderClass(error?: string) {
  return error ? "border-red-500" : "border-slate-300";
}

function Wrapper({
  id,
  label,
  error,
  hint,
  children,
}: FieldProps & { id?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({
  label,
  error,
  hint,
  className,
  ...props
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = props.id ?? props.name;
  return (
    <Wrapper id={id} label={label} error={error} hint={hint}>
      <input id={id} className={cn(control, borderClass(error), className)} {...props} />
    </Wrapper>
  );
}

export function Textarea({
  label,
  error,
  hint,
  className,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = props.id ?? props.name;
  return (
    <Wrapper id={id} label={label} error={error} hint={hint}>
      <textarea
        id={id}
        rows={5}
        className={cn(control, borderClass(error), className)}
        {...props}
      />
    </Wrapper>
  );
}

export function Select({
  label,
  error,
  hint,
  className,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const id = props.id ?? props.name;
  return (
    <Wrapper id={id} label={label} error={error} hint={hint}>
      <select id={id} className={cn(control, borderClass(error), className)} {...props}>
        {children}
      </select>
    </Wrapper>
  );
}
