interface Props {
  label: string
}

export default function TechBadge({ label }: Props) {
  return (
    <span className="px-3 py-1 text-xs text-text-muted border border-border rounded-full">
      {label}
    </span>
  )
}
