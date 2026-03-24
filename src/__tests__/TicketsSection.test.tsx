import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TicketsSection from '../components/TicketsSection'

describe('TicketsSection', () => {
  it('renders the Tickets heading', () => {
    render(<TicketsSection />)
    expect(screen.getByRole('heading', { name: /tickets/i })).toBeInTheDocument()
  })

  it('renders the ticket purchase link', () => {
    render(<TicketsSection />)
    expect(screen.getByRole('link', { name: /jetzt tickets kaufen/i })).toBeInTheDocument()
  })

  it('renders ticket category images', () => {
    render(<TicketsSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
