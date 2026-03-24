import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NewsletterSection from '../components/NewsletterSection'

describe('NewsletterSection', () => {
  it('renders the newsletter heading', () => {
    render(<NewsletterSection />)
    expect(screen.getByRole('heading', { name: /newsletter abonnieren/i })).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<NewsletterSection />)
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<NewsletterSection />)
    expect(screen.getByRole('button', { name: /abonnieren/i })).toBeInTheDocument()
  })
})
