import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Clock, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const contactData = t(language, 'contact');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    pompiers: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone || null,
          firefighters: formData.pompiers || null,
          message: formData.message || null,
          language: language
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send');
      }
      
      toast({
        title: language === 'fr' ? "Message envoyé !" : "Message sent!",
        description: language === 'fr' ? "Nous vous contacterons dans les 24 heures." : "We will contact you within 24 hours.",
      });
      
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        pompiers: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Échec de l'envoi. Veuillez réessayer." : "Failed to send. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {contactData.title}
            </h2>
            <p className="text-xl text-gray-600">
              {contactData.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {contactData.formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactData.name} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Tremblay"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactData.organization} *
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder={language === 'fr' ? "Caserne de Saint-Jean" : "Saint-Jean Fire Station"}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactData.email} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="[email protected]"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactData.phone}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 450 330 3648"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="pompiers" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactData.firefighters}
                  </label>
                  <Input
                    id="pompiers"
                    name="pompiers"
                    type="number"
                    value={formData.pompiers}
                    onChange={handleChange}
                    placeholder="30"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactData.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactData.messagePlaceholder}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D9072B] hover:bg-[#B00623] text-white py-6 text-lg font-semibold"
                >
                  {contactData.send}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-[#D9072B] to-[#B00623] rounded-2xl p-8 text-white mb-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">{contactData.infoTitle}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{contactData.emailSupport}</div>
                      <a href="mailto:info@profiremanager.ca" className="text-white/90 hover:text-white">
                        info@profiremanager.ca
                      </a>
                      <div className="text-white/70 text-sm">{contactData.emailDesc}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{contactData.phoneSupport}</div>
                      <a href="tel:+14503303648" className="text-white/90 hover:text-white">
                        +1 450 330 3648
                      </a>
                      <div className="text-white/70 text-sm">{contactData.phoneDesc}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{contactData.hours}</div>
                      <div className="text-white/90">
                        {contactData.hoursWeekdays}<br />
                        {contactData.hoursWeekdaysTime}
                      </div>
                      <div className="text-white/70 text-sm mt-1">
                        {contactData.hoursWeekend}: {contactData.hoursWeekendTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {contactData.stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <div className="text-3xl font-bold text-[#D9072B] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
