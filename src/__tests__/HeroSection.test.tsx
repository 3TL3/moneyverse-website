import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroSection from '../components/HeroSection'

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Erleben und entdecken')
  })

  it('renders a descriptive subtitle', () => {
    render(<HeroSection />)
    expect(screen.getByText(/universum des geldes/i)).toBeInTheDocument()
  })
})
