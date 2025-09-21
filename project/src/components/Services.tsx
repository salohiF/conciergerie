import React from 'react';
import { Key, Users, Sparkles, Waves, Calendar, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Gestion complète des annonces",
      description: "Création et optimisation de vos annonces Airbnb, gestion du calendrier, des tarifs et de la disponibilité pour maximiser vos réservations."
    },
    {
      icon: <Key className="w-8 h-8 text-blue-600" />,
      title: "Check-in & Check-out",
      description: "Accueil personnalisé de vos voyageurs, remise des clés, présentation du logement et gestion des départs en toute sérénité."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Ménage professionnel",
      description: "Nettoyage complet et minutieux entre chaque séjour, changement du linge et vérification de l'état du logement."
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-600" />,
      title: "Entretien piscines & jardins",
      description: "Maintenance régulière de vos espaces extérieurs, entretien des piscines et soins des jardins pour un cadre parfait."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Communication voyageurs",
      description: "Réponse aux messages 24h/7j, assistance durant le séjour et gestion des éventuels problèmes en temps réel."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Assurance & Sécurité",
      description: "Vérification des équipements, contrôle sécuritaire du logement et gestion des assurances pour votre tranquillité."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nos services de <span className="text-blue-600">conciergerie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une gestion complète de votre propriété Airbnb à Djerba, 
            pour vous offrir une tranquillité d'esprit totale et maximiser vos revenus locatifs.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à confier votre propriété à des experts ?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Choisissez le niveau de service adapté à vos besoins et votre budget
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Obtenir une estimation gratuite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;