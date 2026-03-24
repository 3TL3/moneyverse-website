import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroSection from '../components/HeroSection'

describe('HeroSection', () => {
  it('renders the main heading with correct text', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toMatch(/Erleben und/i)
    expect(heading.textContent).toMatch(/entdecken/i)
  })

  it('renders descriptive subtitle about Bern', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Kaiserhaus in Bern/i)).toBeInTheDocument()
  })
})
