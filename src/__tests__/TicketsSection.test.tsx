import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TicketsSection from '../components/TicketsSection'

describe('TicketsSection', () => {
  it('renders the Tickets heading', () => {
    render(<TicketsSection />)
    expect(screen.getByRole('heading', { name: /tickets/i })).toBeInTheDocument()
  })

  it('renders the ticket reservation link', () => {
    render(<TicketsSection />)
    expect(screen.getByRole('link', { name: /jetzt tickets reservieren/i })).toBeInTheDocument()
  })

  it('renders description about free entry', () => {
    render(<TicketsSection />)
    expect(screen.getByText(/kostenlos/i)).toBeInTheDocument()
  })
})
