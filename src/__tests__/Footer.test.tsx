import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FooterTop from '../components/FooterTop'
import FooterBottom from '../components/FooterBottom'

describe('FooterTop', () => {
  it('renders the address with Bern', () => {
    render(<FooterTop />)
    expect(screen.getByText(/3007, Bern/i)).toBeInTheDocument()
  })

  it('renders link columns', () => {
    render(<FooterTop />)
    expect(screen.getByText('Medien')).toBeInTheDocument()
    expect(screen.getByText(/Schulen und Gruppen/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<FooterTop />)
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})

describe('FooterBottom', () => {
  it('renders the MONEYVERSE logo', () => {
    render(<FooterBottom />)
    expect(screen.getByRole('img', { name: 'MONEYVERSE' })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<FooterBottom />)
    expect(screen.getByRole('link', { name: /datenschutz/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /impressum/i })).toBeInTheDocument()
  })

  it('renders copyright notice', () => {
    render(<FooterBottom />)
    expect(screen.getByText(/©Moneyverse/i)).toBeInTheDocument()
  })
})
