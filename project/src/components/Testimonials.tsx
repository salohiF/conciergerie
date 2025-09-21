import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      location: "Propriétaire d'une villa à Midoun",
      rating: 5,
      text: "DiarBNB a transformé ma propriété en véritable source de revenus. Leur professionnalisme et leur connaissance de Djerba sont exceptionnels. Mes revenus ont augmenté de 40% depuis que je leur ai confié la gestion !",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Ahmed Ben Salah",
      location: "Investisseur immobilier",
      rating: 5,
      text: "Une équipe fantastique ! La gestion est impeccable, les voyageurs sont ravis et je n'ai plus aucun souci à me faire. Le service 24/7 et la transparence des comptes sont un vrai plus.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Marie Dubois",
      location: "Propriétaire d'un riad à Houmt Souk",
      rating: 5,
      text: "Grâce à DiarBNB, je peux profiter de ma retraite en France tout en gardant ma propriété rentable à Djerba. Leur expertise locale fait toute la différence. Je recommande vivement !",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ce que disent nos <span className="text-blue-600">clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos propriétaires est notre priorité. 
            Découvrez leurs témoignages authentiques.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Citation */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-70" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Étoiles */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Profil */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-200">Note moyenne</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+30%</div>
                <div className="text-blue-200">Revenus en moyenne</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Rejoignez nos propriétaires satisfaits
          </h3>
          <p className="text-gray-600 mb-8">
            Commencez dès aujourd'hui et découvrez pourquoi ils nous font confiance
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Démarrer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;