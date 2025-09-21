import React from 'react';
import { Check, Calculator, TrendingUp, Shield } from 'lucide-react';

const Pricing = () => {
  const advantages = [
    "Aucun frais d'installation ou de mise en service",
    "Pas de frais cachés ou de commissions supplémentaires",
    "Transparence totale sur tous les coûts",
    "Paiement uniquement sur les revenus générés",
    "Rapport détaillé mensuel de vos gains",
    "Accompagnement personnalisé inclus"
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Tarification <span className="text-blue-600">transparente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez DiarBNB, pas de surprises. Notre commission est claire et équitable.
          </p>
        </div>

        {/* Carte de prix principale */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Tarification flexible</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-6xl font-bold">10-20%</span>
                <span className="text-xl ml-2 text-blue-100">selon les services</span>
              </div>
              <p className="text-blue-100 text-lg">
                Tarifs adaptés à vos besoins spécifiques
              </p>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Avantages */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-2" />
                    Ce qui est inclus
                  </h4>
                  <ul className="space-y-4">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Calculatrice simple */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Calculator className="w-6 h-6 text-blue-600 mr-2" />
                    Exemples de tarification
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Service partiel (10-15%)</h5>
                      <p className="text-sm text-blue-700">Gestion des annonces et communication voyageurs uniquement</p>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Revenus locatifs mensuels</span>
                      <span className="font-semibold text-lg">2 000€</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Service complet DiarBNB (20%)</span>
                      <span className="font-semibold text-lg text-red-600">- 400€</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                      <span className="font-bold text-gray-800">Votre profit net</span>
                      <span className="font-bold text-2xl text-green-600">1 600€</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <strong>Service complet :</strong> Check-in/out, ménage, entretien piscine/jardin, gestion complète
                    </p>
                  </div>
                </div>
              </div>

              {/* Garantie */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-amber-50 text-amber-800 px-6 py-3 rounded-full border border-amber-200">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Garantie satisfaction ou remboursement sous 30 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Découvrez votre potentiel de revenus
          </h3>
          <p className="text-gray-600 mb-8">
            Obtenez une estimation personnalisée gratuite en moins de 24h
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            Demander une estimation gratuite
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;