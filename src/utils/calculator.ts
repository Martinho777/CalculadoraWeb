export type Operator = '+' | '-' | '*' | '/' | '%'

export const isOperator = (value: string): value is Operator => ['+', '-', '*', '/', '%'].includes(value)

export function calculate(first: number, second: number, operator: Operator) {
  if (operator === '+') return first + second
  if (operator === '-') return first - second
  if (operator === '*') return first * second
  if (operator === '/') return second === 0 ? NaN : first / second
  return second === 0 ? NaN : first % second
}

export function formatResult(value: number) {
  if (!Number.isFinite(value) || value < 0 || value > 999999999) return 'ERROR'

  const result = Number.isInteger(value) ? String(value) : String(Number(value.toFixed(8)))
  return result.length > 9 ? result.slice(0, 9) : result
}