import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const { t } = useTranslation();
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const categories = [
    { value: 'General', label: t('contact.categories.general') },
    { value: 'Feedback/Suggestion', label: 'Feedback / Suggestion' },
    { value: 'Feature Request', label: t('contact.categories.feature') },
    { value: 'Collaboration', label: t('contact.categories.collaboration') }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Input validations
    if (name === 'name') {
      // Only allow letters and spaces
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }
    
    if (name === 'phone') {
      // Only allow numbers and limit to 15 digits
      if (!/^\d*$/.test(value)) return;
      if (value.length > 15) return;
    }

    if (name === 'message') {
      // Limit to 2000 characters
      if (value.length > 2000) return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!captchaValue) {
      setErrorMessage(t('contact.form.captchaRequired'));
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://eagri-website-backend.vercel.app/ContactUsForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: formData.category,
          name: formData.name,
          email: formData.email,
          subject: formData.phone,
          message: formData.message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        category: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setCaptchaValue(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || t('contact.form.error'));
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCharacterCount = () => {
    return formData.message.length;
  };

  const getWordCount = () => {
    return formData.message.trim().split(/\s+/).filter(Boolean).length;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            {/* Category Select */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.category')} <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">{t('contact.form.selectCategory')}</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.name')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                pattern="[A-Za-z\s]+"
                title="Only letters and spaces are allowed"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.phone')} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{1,15}"
                maxLength={15}
                title="Only numbers are allowed (max 15 digits)"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.message')} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                maxLength={2000}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
                <span>{getCharacterCount()}/2000 characters</span>
                <span>{getWordCount()}/400 words</span>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "6Lf8rwcrAAAAAI6PRiH33ryFU1yhvYNszPMbMii4"}
                onChange={handleCaptchaChange}
                theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting || !captchaValue}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors duration-300 ${
                  isSubmitting || !captchaValue
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-brand hover:bg-brand-dark'
                }`}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-green-600 dark:text-green-400 text-center">
                {t('contact.form.success')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-600 dark:text-red-400 text-center">
                {errorMessage || t('contact.form.error')}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 