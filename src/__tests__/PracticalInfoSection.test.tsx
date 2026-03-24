import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PracticalInfoSection from '../components/PracticalInfoSection'

describe('PracticalInfoSection', () => {
  it('renders the section heading', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByRole('heading', { name: /praktische infos/i })).toBeInTheDocument()
  })

  it('renders Eintritt row', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByText('Eintritt')).toBeInTheDocument()
    expect(screen.getByText('Kostenlos')).toBeInTheDocument()
  })

  it('renders Standort row', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByText('Standort')).toBeInTheDocument()
    expect(screen.getAllByText(/Kaiserhaus/i).length).toBeGreaterThan(0)
  })

  it('renders info link', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByRole('link', { name: /zu den infos/i })).toBeInTheDocument()
  })
})
