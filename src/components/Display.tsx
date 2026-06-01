type Props = {
  value: string
}

export function Display({ value }: Props) {
  return (
    <output className="display" aria-live="polite" aria-label="Pantalla de la calculadora">
      {value}
    </output>
  )
}