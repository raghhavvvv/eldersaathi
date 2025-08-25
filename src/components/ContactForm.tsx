'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6 sm:py-8">
        <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-3 sm:mb-4 text-sm sm:text-base">
          <strong>Thank you!</strong> Your message has been sent successfully. We&apos;ll get back to you soon.
        </div>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[#00C29C] hover:underline text-sm sm:text-base"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full h-10 sm:h-12 px-3 sm:px-4 bg-[#F5F5F5] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C29C] text-sm sm:text-base ${
            errors.name ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full h-10 sm:h-12 px-3 sm:px-4 bg-[#F5F5F5] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C29C] text-sm sm:text-base ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full h-10 sm:h-12 px-3 sm:px-4 bg-[#F5F5F5] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C29C] text-sm sm:text-base ${
            errors.phone ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#F5F5F5] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C29C] resize-none text-sm sm:text-base ${
            errors.message ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium transition-colors text-sm sm:text-base ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#00C29C] hover:bg-[#00A085] text-white'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
