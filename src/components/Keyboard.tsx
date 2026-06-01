import { Button } from './Button'
import { calculatorKeys, getKeyVariant } from '../utils/keys'

type Props = {
  onPress: (label: string) => void
}

export function Keyboard({ onPress }: Props) {
  return (
    <section className="keyboard" aria-label="Teclado numérico">
      {calculatorKeys.map((key) => (
        <Button key={key} label={key} onPress={onPress} variant={getKeyVariant(key)} />
      ))}
    </section>
  )
}