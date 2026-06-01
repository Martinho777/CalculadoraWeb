import type { ButtonVariant } from '../components/Button'

export const calculatorKeys = [
  'C', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
]

export function getKeyVariant(key: string): ButtonVariant {
  if (key === '=') return 'equal'
  if ('+-*/%'.includes(key)) return 'operator'
  if (key === 'C' || key === '+/-') return 'utility'
  return 'number'
}