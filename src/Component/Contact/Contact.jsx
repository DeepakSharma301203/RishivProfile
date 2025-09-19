import React, { useState } from 'react';

// --- SVG Icons ---
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        // Here you would typically send the data to a backend or service
    };

    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Get In Touch</h1>
                <p className="text-lg text-center text-gray-600 mb-12">
                    Have a question or want to work together? Feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* --- Contact Information --- */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <MailIcon />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Email</h3>
                                    <a href="mailto:rishivpandit38@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">rishivpandit38@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <PhoneIcon />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Phone</h3>
                                    <p className="text-gray-600">+91 9720595310</p>
                                </div>
                            </div>
                             <div className="flex items-center">
                                <LocationIcon />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Location</h3>
                                    <p className="text-gray-600">Gangoh, Uttar Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Contact Form --- */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                                <p className="text-gray-600">Your message has been sent successfully.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
