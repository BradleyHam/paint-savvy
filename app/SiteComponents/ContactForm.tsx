'use client'
import React, { useState } from 'react';



export default function ContactForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [buttonText, setButtonText] = useState<string>('Submit');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [captchaToken, setCaptchaToken] = useState<string>('');

    type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    const handleInputChange = (event: InputChangeEvent) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFeedbackMessage(''); // Clear any previous feedback message

        if (!name || !email) {
            setFeedbackMessage('Name and Email are required fields.');
            return;
        }

        if (!validateEmail(email)) {
            setFeedbackMessage('Please enter a valid email address.');
            return;
        }

        if (!captchaToken) {
            setFeedbackMessage('Please complete the CAPTCHA.');
            return;
        }

        setIsSubmitting(true);
        setButtonText('Sending...');

        const templateParams = {
            from_name: name,
            from_email: email,
            phone,
            message,
            reply_to: email,
        };

        // console.log(templateParams);

        // emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID_GENERAL as string, templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string)
        //     .then((response) => {
        //         console.log('SUCCESS!', response.status, response.text);
        //         setButtonText('Sent!');
        //         setIsSubmitting(false);
        //         setName('');
        //         setEmail('');
        //         setPhone('');
        //         setMessage('');
        //         setCaptchaToken(''); // Reset the reCAPTCHA
        //     }, (error) => {
        //         console.log('FAILED...', error);
        //         setButtonText('Send');
        //         setIsSubmitting(false);
        //         setFeedbackMessage('Failed to send your message. Please try again later.');
        //     });
    };

 

    return (
        <div className=' py-[40px] bg-gray-100'>
           
            <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                    />
         
       
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                    />
  
       
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="mb-4 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        rows={4}
                    />
                <div className="mb-4">
                 
                </div>
                <div className='mt-8 mb-8'>
                    <button className='text-darkText text-lg font-semibold'>Send</button>
                </div>
            </form>
            {feedbackMessage && (
                <p className={`mt-0 text-${isSubmitting ? 'blue' : feedbackMessage.includes('successfully') ? 'green' : 'red'}-600`}>
                    {feedbackMessage}
                </p>
            )}
        </div>
    );
}
