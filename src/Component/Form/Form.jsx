import React, { useState } from 'react';

const FormPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        stream: '',
        comments: '',
        resumeLink: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "919720595310"; // Your WhatsApp number

        let messageBody = `*New Course Application*\n\n`;
        messageBody += `*Name:* ${formData.name}\n`;
        messageBody += `*Email:* ${formData.email}\n`;
        messageBody += `*Phone:* ${formData.phone}\n`;
        messageBody += `*Course Need:* ${formData.course}\n`;
        messageBody += `*Stream:* ${formData.stream}\n\n`;
        messageBody += `*Additional Info:*\n${formData.comments}\n\n`;

        if (formData.resumeLink) {
            messageBody += `*Resume Link:* ${formData.resumeLink}`;
        } else {
            messageBody += `*Resume:* Not Provided`;
        }

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageBody)}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Application Form</h1>
                        <p className="text-md text-gray-500">Please fill out the details below to apply.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g., Rishiv Goutam"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g., your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                required 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g., +91 98765 43210"
                            />
                        </div>

                        <div>
                            <label htmlFor="course" className="block text-sm font-bold text-gray-700 mb-1">Course Need</label>
                            <input 
                                type="text" 
                                name="course" 
                                id="course" 
                                required 
                                value={formData.course} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="e.g., Full Stack Development"
                            />
                        </div>

                        <div>
                            <label htmlFor="stream" className="block text-sm font-bold text-gray-700 mb-1">Stream</label>
                            <select 
                                name="stream" 
                                id="stream" 
                                required 
                                value={formData.stream} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                            >
                                <option value="" disabled>Select your stream</option>
                                <option value="Science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts/Humanities</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="comments" className="block text-sm font-bold text-gray-700 mb-1">Additional Information</label>
                            <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                value={formData.comments}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="Tell us anything else we should know..."
                            ></textarea>
                        </div>
                        
                        <div>
                            <label htmlFor="resumeLink" className="block text-sm font-bold text-gray-700 mb-1">Resume Link</label>
                            <input 
                                type="url" 
                                name="resumeLink" 
                                id="resumeLink" 
                                required 
                                value={formData.resumeLink} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                                placeholder="https://drive.google.com/..."
                            />
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-300 shadow-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                                Submit via WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPage;

