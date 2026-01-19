'use server';

import nodemailer from 'nodemailer';

export async function sendFormEmail(formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  eventType?: string;
  eventDate?: string;
  numberOfAttendees?: string;
}) {
  try {
    // Create a transporter using Gmail (you'll need to set up environment variables)
    // For now, we'll use a mock implementation
    
    const emailContent = `
      <h2>New Form Submission from CECEVENTS Website</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      ${formData.eventType ? `<p><strong>Event Type:</strong> ${formData.eventType}</p>` : ''}
      ${formData.eventDate ? `<p><strong>Event Date:</strong> ${formData.eventDate}</p>` : ''}
      ${formData.numberOfAttendees ? `<p><strong>Number of Attendees:</strong> ${formData.numberOfAttendees}</p>` : ''}
      ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
      <hr/>
      <p>This email was sent from the CECEVENTS website contact form.</p>
    `;

    // Log the submission (in production, this would send an actual email)
    console.log('Form submission:', formData);
    
    // For production, uncomment and configure:
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@cecevents.in',
      subject: `New Inquiry from ${formData.name} - CECEVENTS`,
      html: emailContent,
      replyTo: formData.email,
    });
    */

    return {
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Error submitting form. Please try again.',
    };
  }
}
