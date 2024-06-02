import React from 'react'
import ContactForm from '../SiteComponents/ContactForm'

function ContactSection() {
  return (
    <div className='bg-gray-100 py-[80px] px-[20px]'>
        <h2 className='text-darkText text-2xl font-semibold tracking-tighter'>Contact us for <span className='font-bold'> free personalised advice</span></h2>
        <ContactForm />
    </div>
  )
}

export default ContactSection