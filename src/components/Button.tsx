export type ButtonVariant = 'number' | 'operator' | 'equal' | 'utility'

type Props = {
  label: string
  onPress: (label: string) => void
  variant?: ButtonVariant
}

export function Button({ label, onPress, variant = 'number' }: Props) {
  return (
    <button className={`btn ${variant}`} onClick={() => onPress(label)} aria-label={`Botón ${label}`}>
      {label}
    </button>
  )
}