import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    pompiers: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons dans les 24 heures.",
    });
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      pompiers: '',
      message: ''
    });
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
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600">
              Réservez votre démo gratuite ou posez-nous vos questions. Notre équipe vous répondra rapidement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Demander une Démonstration
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
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
                    Organisation *
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Caserne de Saint-Jean"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
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
                    Téléphone
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
                    Nombre de pompiers
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
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de vos besoins..."
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D9072B] hover:bg-[#B00623] text-white py-6 text-lg font-semibold"
                >
                  Envoyer la demande
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-[#D9072B] to-[#B00623] rounded-2xl p-8 text-white mb-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:[email protected]" className="text-white/90 hover:text-white">
                        [email protected]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Téléphone</div>
                      <a href="tel:+14503303648" className="text-white/90 hover:text-white">
                        +1 450 330 3648
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Heures d'Ouverture</div>
                      <div className="text-white/90">
                        Lundi - Vendredi<br />
                        8h - 18h (EST)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="text-3xl font-bold text-[#D9072B] mb-2">&lt; 24h</div>
                  <div className="text-sm text-gray-600">Temps de réponse</div>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="text-3xl font-bold text-[#D9072B] mb-2">30 min</div>
                  <div className="text-sm text-gray-600">Démo gratuite</div>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="text-3xl font-bold text-[#D9072B] mb-2">1-2 sem</div>
                  <div className="text-sm text-gray-600">Configuration</div>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="text-3xl font-bold text-[#D9072B] mb-2">100%</div>
                  <div className="text-sm text-gray-600">Québécois</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;