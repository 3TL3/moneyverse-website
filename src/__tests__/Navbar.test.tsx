import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders the MoneyVerse logo link', () => {
    render(<Navbar />)
    expect(screen.getByText('MoneyVerse')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Besuch')).toBeInTheDocument()
    expect(screen.getByText('Ausstellung')).toBeInTheDocument()
    expect(screen.getByText('Entdecken')).toBeInTheDocument()
  })

  it('renders tickets button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /tickets/i })).toBeInTheDocument()
  })
})
