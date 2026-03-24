import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders the MoneyVerse logo image', () => {
    render(<Navbar />)
    expect(screen.getByAltText('MoneyVerse')).toBeInTheDocument()
  })

  it('renders opening hours text', () => {
    render(<Navbar />)
    expect(screen.getByText(/Heute offen/i)).toBeInTheDocument()
  })

  it('renders Barrierefreiheit link', () => {
    render(<Navbar />)
    expect(screen.getByText('Barrierefreiheit')).toBeInTheDocument()
  })

  it('renders Tickets navigation link', () => {
    render(<Navbar />)
    expect(screen.getByText('Tickets')).toBeInTheDocument()
  })

  it('renders menu button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Menü öffnen/i })).toBeInTheDocument()
  })
})

  it('menu button has aria-expanded attribute', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Menü öffnen/i })).toHaveAttribute('aria-expanded')
  })
