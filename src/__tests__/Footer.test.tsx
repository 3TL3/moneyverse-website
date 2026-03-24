import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FooterTop from '../components/FooterTop'
import FooterBottom from '../components/FooterBottom'

describe('FooterTop', () => {
  it('renders the address', () => {
    render(<FooterTop />)
    expect(screen.getByText(/3011 Bern/i)).toBeInTheDocument()
  })

  it('renders navigation columns', () => {
    render(<FooterTop />)
    expect(screen.getByText('Besuch')).toBeInTheDocument()
    expect(screen.getByText(/Schule/i)).toBeInTheDocument()
  })
})

describe('FooterBottom', () => {
  it('renders the MONEYVERSE logo text', () => {
    render(<FooterBottom />)
    expect(screen.getByText('MONEYVERSE')).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<FooterBottom />)
    expect(screen.getByRole('link', { name: /datenschutz/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /impressum/i })).toBeInTheDocument()
  })
})
