import { useState } from 'react'
import { calculate, formatResult, isOperator, type Operator } from '../utils/calculator'

export function useCalculator() {
  const state = useCalcState()

  const press = (key: string) => {
    if (key === 'C') return state.reset()
    if (key === '.') return state.addDecimal()
    if (key === '+/-') return state.toggleSign()
    if (key === '=') return state.solve()
    if (isOperator(key)) return state.chooseOperator(key)
    state.addDigit(key)
  }

  return { display: state.display, press }
}

function useCalcState() {
  const [display, setDisplay] = useState('0')
  const [stored, setStored] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [waiting, setWaiting] = useState(false)

  const reset = () => {
    setDisplay('0')
    setStored(null)
    setOperator(null)
    setWaiting(false)
  }

  const addDigit = (digit: string) => {
    if (display === 'ERROR') return setDisplay(digit)
    if (waiting) {
      setDisplay(digit)
      return setWaiting(false)
    }

    if (display.length >= 9) return
    setDisplay(display === '0' ? digit : display + digit)
  }

  const addDecimal = () => {
    if (display.includes('.') || display.length >= 9) return
    setDisplay(waiting ? '0.' : display + '.')
    setWaiting(false)
  }

  const toggleSign = () => {
    if (display === '0' || display === 'ERROR') return
    const next = display.startsWith('-') ? display.slice(1) : `-${display}`
    if (next.length <= 9) setDisplay(next)
  }

  const chooseOperator = (nextOperator: Operator) => {
    if (operator && stored !== null && !waiting) {
      const result = formatResult(calculate(stored, Number(display), operator))
      setDisplay(result)
      setStored(result === 'ERROR' ? null : Number(result))
    } else {
      setStored(Number(display))
    }

    setOperator(nextOperator)
    setWaiting(true)
  }

  const solve = () => {
    if (!operator || stored === null) return
    const result = formatResult(calculate(stored, Number(display), operator))
    setDisplay(result)
    setStored(null)
    setOperator(null)
    setWaiting(true)
  }

  return { display, reset, addDigit, addDecimal, toggleSign, chooseOperator, solve }
}