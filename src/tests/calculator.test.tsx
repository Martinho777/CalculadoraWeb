import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Calculator } from '../components/Calculator'

const press = (label: string) => {
  fireEvent.click(screen.getByRole('button', { name: `Botón ${label}` }))
}

const display = () => screen.getByLabelText('Pantalla de la calculadora')

describe('Calculator', () => {
  it('concatena números en el display', () => {
    render(<Calculator />)
    press('1')
    press('2')
    press('3')

    expect(display()).toHaveTextContent('123')
  })

  it('ignora números después de 9 caracteres', () => {
    render(<Calculator />)
    '1234567895'.split('').forEach(press)

    expect(display()).toHaveTextContent('123456789')
  })

  it('suma correctamente dos números', () => {
    render(<Calculator />)
    press('9')
    press('+')
    press('6')
    press('=')

    expect(display()).toHaveTextContent('15')
  })

  it('muestra ERROR si una resta da resultado negativo', () => {
    render(<Calculator />)
    press('5')
    press('-')
    press('8')
    press('=')

    expect(display()).toHaveTextContent('ERROR')
  })

  it('muestra ERROR si el resultado supera 999999999', () => {
    render(<Calculator />)
    '999999999'.split('').forEach(press)
    press('*')
    press('9')
    press('=')

    expect(display()).toHaveTextContent('ERROR')
  })

  it('respeta el límite de 9 caracteres en divisiones con decimales largos', () => {
    render(<Calculator />)
    press('2')
    press('2')
    press('/')
    press('7')
    press('=')

    expect(display().textContent?.length).toBeLessThanOrEqual(9)
  })

  it('no permite escribir dos puntos decimales en el mismo número', () => {
    render(<Calculator />)
    press('1')
    press('.')
    press('5')
    press('.')
    press('7')

    expect(display()).toHaveTextContent('1.57')
  })

  it('permite cambiar el signo con el botón +/- respetando los 9 caracteres', () => {
    render(<Calculator />)
    '12345678'.split('').forEach(press)
    press('+/-')
    press('9')

    expect(display()).toHaveTextContent('-12345678')
  })
})