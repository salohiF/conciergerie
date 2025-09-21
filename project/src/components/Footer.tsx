import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal du footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/diarbnb.png"
                alt="DiarBNB Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">DiarBNB</h3>
                <p className="text-sm text-gray-400 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Djerba, Tunisie
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Votre partenaire de confiance pour la gestion complète de vos locations Airbnb à Djerba. 
              Expertise locale, service premium, transparence garantie.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('tarifs')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('temoignages')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Témoignages
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  Zone Touristique Midoun<br />
                  4116 Djerba, Tunisie
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+21675123456" className="hover:text-white transition-colors">
                    +216 75 123 456
                  </a><br />
                  <a href="tel:+21629876543" className="hover:text-white transition-colors">
                    +216 29 876 543
                  </a>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="mailto:contact@diarbnb.com" className="hover:text-white transition-colors">
                    contact@diarbnb.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DiarBNB. Tous droits réservés. Conciergerie Airbnb professionnelle à Djerba.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        aria-label="Retour en haut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;