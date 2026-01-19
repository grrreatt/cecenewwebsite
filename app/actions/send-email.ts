'use server'

export interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message?: string
}

export async function sendFormEmail(data: FormData) {
  try {
    // Send email via email service
    const response = await fetch('https://formspree.io/f/xyzdefgh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: data.message || 'No additional message',
        _replyto: data.email,
        _to: 'info@cecevents.in',
      }),
    })

    if (response.ok) {
      return { success: true, message: 'Form submitted successfully!' }
    } else {
      return { success: false, message: 'Failed to submit form' }
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, message: 'An error occurred while submitting the form' }
  }
}
