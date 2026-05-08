import React from 'react';
import { X, FileText, AlertCircle, Scale, Ban, RefreshCw } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Conditions d'Utilisation</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-sm text-gray-600 mb-6">Dernière mise à jour : Janvier 2025</p>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">1. Acceptation des Conditions</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                En accédant et en utilisant ProFireManager (le "Service"), vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Service.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>ProFireManager Inc.</strong><br />
                  351 rue Jean-Louis Boudreau<br />
                  Granby, QC J2H 0A3, Canada<br />
                  Email: info@profiremanager.ca
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">2. Description du Service</h3>
              </div>
              <p className="text-gray-700 mb-4">
                ProFireManager est une plateforme cloud de gestion pour services d'incendie offrant :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Gestion automatisée des horaires et plannings de garde</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Système de remplacements intelligents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Gestion des équipements de protection (EPI) conforme NFPA 1851</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Suivi des formations et certifications conforme NFPA 1500</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Module de prévention incendie (optionnel)</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">3. Compte Utilisateur</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>3.1 Création de compte :</strong> Vous devez fournir des informations exactes et complètes lors de la création de votre compte.</p>
                <p><strong>3.2 Sécurité :</strong> Vous êtes responsable de la confidentialité de vos identifiants de connexion.</p>
                <p><strong>3.3 Utilisation autorisée :</strong> Chaque compte est destiné à une organisation spécifique. Le partage de comptes entre organisations est interdit.</p>
                <p><strong>3.4 Administrateurs :</strong> Les administrateurs de votre organisation sont responsables de la gestion des accès et des rôles des utilisateurs.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">4. Abonnement et Paiement</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>4.1 Tarification :</strong> La tarification est basée sur le nombre de pompiers actifs dans votre organisation, facturée mensuellement ou annuellement.</p>
                <p><strong>4.2 Facturation :</strong> Les frais sont facturés au début de chaque période de facturation. Un rabais de 10% s'applique pour la facturation annuelle.</p>
                <p><strong>4.3 Modification des tarifs :</strong> Nous nous réservons le droit de modifier nos tarifs avec un préavis de 30 jours.</p>
                <p><strong>4.4 Défaut de paiement :</strong> En cas de défaut de paiement, l'accès au Service peut être suspendu après un délai de grâce de 15 jours.</p>
                <p><strong>4.5 Remboursement :</strong> Garantie satisfait ou remboursé de 60 jours pour les nouveaux clients (sous conditions).</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">5. Utilisation Acceptable</h3>
              </div>
              <p className="text-gray-700 mb-4">Vous acceptez de NE PAS :</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Utiliser le Service à des fins illégales ou non autorisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Tenter d'accéder aux données d'autres organisations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Compromettre la sécurité ou l'intégrité du Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Utiliser des robots, scripts ou processus automatisés non autorisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Transmettre des virus, malwares ou codes malveillants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Revendre ou redistribuer le Service sans autorisation écrite</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Propriété Intellectuelle</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>6.1 Nos droits :</strong> ProFireManager, son logo, sa marque et tous les contenus du Service sont notre propriété exclusive.</p>
                <p><strong>6.2 Vos données :</strong> Vous conservez la propriété de toutes les données que vous saisissez dans le Service.</p>
                <p><strong>6.3 Licence :</strong> Nous vous accordons une licence limitée, non exclusive et révocable pour utiliser le Service.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Disponibilité du Service</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>7.1 Disponibilité :</strong> Nous nous efforçons de maintenir une disponibilité de 99.9% mais ne garantissons pas un service ininterrompu.</p>
                <p><strong>7.2 Maintenance :</strong> Des interruptions planifiées peuvent survenir pour maintenance, avec préavis lorsque possible.</p>
                <p><strong>7.3 Support :</strong> Support par email inclus. Support téléphonique disponible durant les heures d'ouverture (Lun-Ven 8h-18h EST).</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation de Responsabilité</h3>
              <p className="text-gray-700 mb-4">
                Dans la mesure permise par la loi :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Le Service est fourni "tel quel" sans garantie d'aucune sorte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Notre responsabilité totale est limitée aux montants payés au cours des 12 derniers mois</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Résiliation</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>9.1 Par vous :</strong> Vous pouvez résilier votre abonnement à tout moment via votre compte ou en nous contactant.</p>
                <p><strong>9.2 Par nous :</strong> Nous pouvons suspendre ou résilier votre accès en cas de violation de ces conditions.</p>
                <p><strong>9.3 Exportation des données :</strong> Vous disposez de 90 jours après la résiliation pour exporter vos données.</p>
                <p><strong>9.4 Suppression :</strong> Vos données seront supprimées définitivement 90 jours après la résiliation, sauf obligation légale.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications des Conditions</h3>
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications importantes seront notifiées par email avec un préavis de 30 jours. L'utilisation continue du Service après notification constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Loi Applicable</h3>
              <p className="text-gray-700">
                Ces conditions sont régies par les lois de la province de Québec et du Canada. Tout litige sera soumis à la juridiction exclusive des tribunaux de Granby, Québec.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h3>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant ces conditions d'utilisation :
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>ProFireManager Inc.</strong><br />
                  351 rue Jean-Louis Boudreau<br />
                  Granby, QC J2H 0A3, Canada<br />
                  Email: <a href="mailto:info@profiremanager.ca" className="text-[#D9072B] hover:underline">info@profiremanager.ca</a><br />
                  Tél: +1 450 330 3648
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
