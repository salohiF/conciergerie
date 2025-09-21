import React from 'react';
import { ArrowRight, Star, Users, Home } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu Principal */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Service 5 étoiles</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Votre spécialiste{' '}
              <span className="text-blue-600">Airbnb</span> à{' '}
              <span className="text-amber-500">Djerba</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              DiarBNB gère intégralement vos locations Airbnb à Djerba. 
              Maximisez vos revenus locatifs en toute sérénité avec notre 
              expertise locale et notre service personnalisé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Découvrir nos services
              </button>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Home className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-800">50+</span>
                </div>
                <p className="text-gray-600 text-sm">Propriétés gérées</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-800">200+</span>
                </div>
                <p className="text-gray-600 text-sm">Voyageurs accueillis</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
                  <span className="text-2xl font-bold text-gray-800">4.9</span>
                </div>
                <p className="text-gray-600 text-sm">Note moyenne</p>
              </div>
            </div>
          </div>

          {/* Image Héro */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Villa de luxe avec piscine à Djerba"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Gestion complète</p>
                  <p className="text-sm text-gray-600">7j/7 - 24h/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;