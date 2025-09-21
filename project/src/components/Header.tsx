import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Area */}
          <div className="flex items-center space-x-3">
            <img
              src="/diarbnb.png"
              alt="DiarBNB Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">DiarBNB</h1>
              <p className="text-sm text-blue-600 flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                Djerba, Tunisie
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('tarifs')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('temoignages')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('tarifs')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('temoignages')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Témoignages
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-colors mt-2"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;