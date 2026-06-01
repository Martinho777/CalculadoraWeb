import { Display } from './Display'
import { Keyboard } from './Keyboard'
import { useCalculator } from '../hooks/useCalculator'

export function Calculator() {
  const { display, press } = useCalculator()

  return (
    <main className="calculator" aria-label="Calculadora React">
      <header className="brand">Martin&apos;s Calculations</header>
      <Display value={display} />
      <Keyboard onPress={press} />
    </main>
  )
}