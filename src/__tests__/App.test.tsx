import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the navigation logo', () => {
    render(<App />)
    expect(screen.getByAltText('MoneyVerse')).toBeInTheDocument()
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders all three teaser sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Ausstellung' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Thementouren' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Schulklassen' })).toBeInTheDocument()
  })

  it('renders footer with MONEYVERSE logo text', () => {
    render(<App />)
    expect(screen.getByText('MONEYVERSE')).toBeInTheDocument()
  })
})
