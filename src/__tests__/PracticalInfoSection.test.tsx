import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PracticalInfoSection from '../components/PracticalInfoSection'

describe('PracticalInfoSection', () => {
  it('renders the section heading', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByRole('heading', { name: /praktische infos/i })).toBeInTheDocument()
  })

  it('renders opening hours label', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByText(/öffnungszeiten/i)).toBeInTheDocument()
  })

  it('renders directions label', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByText(/anfahrt/i)).toBeInTheDocument()
  })

  it('renders more info link', () => {
    render(<PracticalInfoSection />)
    expect(screen.getByRole('link', { name: /zu den infos/i })).toBeInTheDocument()
  })
})
