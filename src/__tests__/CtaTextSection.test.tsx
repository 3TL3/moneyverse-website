import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CtaTextSection from '../components/CtaTextSection'

describe('CtaTextSection', () => {
  it('renders the main CTA heading', () => {
    render(<CtaTextSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Tauch ein ins Universum des Geldes'
    )
  })

  it('renders the subtitle text', () => {
    render(<CtaTextSection />)
    expect(screen.getByText(/einzigartigen/i)).toBeInTheDocument()
  })
})
