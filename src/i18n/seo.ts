import type { Language, PageKey } from './config';

type SeoEntry = { title: string; description: string };
type SeoMap = Record<PageKey, Record<Language, SeoEntry>>;

export const seoData: SeoMap = {
  home: {
    it: { title: 'Pintour Bus - Tour in Autobus Italia ed Europa | Noleggio Bus e Shuttle', description: 'Pintour Bus: tour in autobus, noleggio bus con conducente e shuttle bus per Costiera Amalfitana, Napoli e destinazioni europee. Servizi per gruppi, scuole e aziende.' },
    en: { title: 'Pintour Bus - Bus Tours in Italy and Europe | Bus Rental & Shuttle', description: 'Pintour Bus: bus tours, bus rental with driver and shuttle bus for Amalfi Coast, Naples and European destinations. Services for groups, schools and companies.' },
    fr: { title: 'Pintour Bus - Circuits en Autocar Italie et Europe | Location Bus & Navettes', description: 'Pintour Bus: circuits en autocar, location de bus avec chauffeur et navettes pour la Côte Amalfitaine, Naples et destinations européennes. Services pour groupes, écoles et entreprises.' },
    de: { title: 'Pintour Bus - Busreisen Italien und Europa | Busvermietung & Shuttle', description: 'Pintour Bus: Busreisen, Busvermietung mit Fahrer und Shuttle-Bus für Amalfiküste, Neapel und europäische Ziele. Dienstleistungen für Gruppen, Schulen und Unternehmen.' },
    es: { title: 'Pintour Bus - Circuitos en Autobús Italia y Europa | Alquiler de Bus & Shuttle', description: 'Pintour Bus: circuitos en autobús, alquiler de bus con conductor y shuttle para Costa Amalfitana, Nápoles y destinos europeos. Servicios para grupos, colegios y empresas.' },
  },
  about: {
    it: { title: 'Chi Siamo - Pintour Bus | Tour e Noleggio Bus Italia', description: 'Scopri Pintour S.C.A.R.L.: oltre 20 anni di esperienza in tour in autobus e noleggio bus con conducente in Italia ed Europa. Flotta Mercedes Benz e Setra da 8 a 55 posti.' },
    en: { title: 'About Us - Pintour Bus | Bus Tours & Rental Italy', description: 'Discover Pintour S.C.A.R.L.: over 20 years of experience in bus tours and bus rental with driver in Italy and Europe. Fleet of Mercedes Benz and Setra from 8 to 55 seats.' },
    fr: { title: 'À Propos - Pintour Bus | Circuits et Location Bus Italie', description: "Découvrez Pintour S.C.A.R.L.: plus de 20 ans d'expérience en circuits en autocar et location de bus avec chauffeur en Italie et en Europe. Flotte Mercedes Benz et Setra de 8 à 55 places." },
    de: { title: 'Über Uns - Pintour Bus | Busreisen & Busvermietung Italien', description: 'Entdecken Sie Pintour S.C.A.R.L.: über 20 Jahre Erfahrung in Busreisen und Busvermietung mit Fahrer in Italien und Europa. Flotte von Mercedes Benz und Setra, 8 bis 55 Plätze.' },
    es: { title: 'Quiénes Somos - Pintour Bus | Circuitos y Alquiler de Bus Italia', description: 'Descubre Pintour S.C.A.R.L.: más de 20 años de experiencia en circuitos en autobús y alquiler de bus con conductor en Italia y Europa. Flota Mercedes Benz y Setra de 8 a 55 plazas.' },
  },
  tours: {
    it: { title: 'Tour in Autobus Italia ed Europa | Pintour Bus', description: 'Esperienze di viaggio in autobus: itinerari organizzati in Costiera Amalfitana, Pompei, Sorrento, Capri e tour europei. Servizio guidato con conducente esperto.' },
    en: { title: 'Bus Tours in Italy and Europe | Pintour Bus', description: 'Bus travel experiences: organized itineraries in Amalfi Coast, Pompeii, Sorrento, Capri and European tours. Guided service with experienced driver.' },
    fr: { title: 'Circuits en Autocar Italie et Europe | Pintour Bus', description: 'Expériences de voyage en autocar : itinéraires organisés en Côte Amalfitaine, Pompéi, Sorrente, Capri et circuits européens. Service guidé avec chauffeur expérimenté.' },
    de: { title: 'Busreisen Italien und Europa | Pintour Bus', description: 'Busreise-Erlebnisse: organisierte Routen an der Amalfiküste, Pompeji, Sorrent, Capri und Europatouren. Geführter Service mit erfahrenem Fahrer.' },
    es: { title: 'Circuitos en Autobús Italia y Europa | Pintour Bus', description: 'Experiencias de viaje en autobús: itinerarios organizados en Costa Amalfitana, Pompeya, Sorrento, Capri y circuitos europeos. Servicio guiado con conductor experimentado.' },
  },
  shuttle: {
    it: { title: 'Shuttle Bus Napoli Amalfi | Aeroporto Capodichino - Costiera', description: "Servizio shuttle bus aeroporto Napoli Capodichino ↔ Costiera Amalfitana. Collegamenti diretti per Vietri, Cetara, Maiori, Minori, Atrani, Amalfi. Prenota online." },
    en: { title: 'Shuttle Bus Naples Amalfi | Capodichino Airport - Coast', description: 'Airport shuttle service Naples Capodichino ↔ Amalfi Coast. Direct connections to Vietri, Cetara, Maiori, Minori, Atrani, Amalfi. Book online.' },
    fr: { title: 'Shuttle Bus Naples Amalfi | Aéroport Capodichino - Côte', description: "Service navette aéroport Naples Capodichino ↔ Côte Amalfitaine. Connexions directes vers Vietri, Cetara, Maiori, Minori, Atrani, Amalfi. Réservez en ligne." },
    de: { title: 'Shuttle Bus Neapel Amalfi | Flughafen Capodichino - Küste', description: 'Flughafenshuttle-Service Neapel Capodichino ↔ Amalfiküste. Direktverbindungen nach Vietri, Cetara, Maiori, Minori, Atrani, Amalfi. Online buchen.' },
    es: { title: 'Shuttle Bus Nápoles Amalfi | Aeropuerto Capodichino - Costa', description: 'Servicio shuttle aeropuerto Nápoles Capodichino ↔ Costa Amalfitana. Conexiones directas a Vietri, Cetara, Maiori, Minori, Atrani, Amalfi. Reserva online.' },
  },
  rental: {
    it: { title: 'Noleggio Bus con Conducente | Costiera Amalfitana - Pintour Bus', description: 'Noleggio bus con conducente per gite, escursioni, tour in Italia ed Europa. Bus da 54, 40, 30 posti, shuttle bus, auto VIP. Richiedi preventivo gratuito.' },
    en: { title: 'Bus Rental with Driver | Amalfi Coast - Pintour Bus', description: 'Bus rental with driver for trips, excursions, tours in Italy and Europe. 54, 40, 30-seat buses, shuttle buses, VIP cars. Request a free quote.' },
    fr: { title: 'Location Bus avec Chauffeur | Côte Amalfitaine - Pintour Bus', description: 'Location de bus avec chauffeur pour des excursions et des visites en Italie et en Europe. Bus de 54, 40, 30 places, navettes, voitures VIP. Demandez un devis gratuit.' },
    de: { title: 'Busvermietung mit Fahrer | Amalfiküste - Pintour Bus', description: 'Busvermietung mit Fahrer für Ausflüge und Touren in Italien und Europa. Busse mit 54, 40, 30 Plätzen, Shuttle-Busse, VIP-Autos. Fordern Sie ein kostenloses Angebot an.' },
    es: { title: 'Alquiler de Bus con Conductor | Costa Amalfitana - Pintour Bus', description: 'Alquiler de autobús con conductor para excursiones y tours en Italia y Europa. Autobuses de 54, 40, 30 plazas, shuttle, coches VIP. Solicite presupuesto gratuito.' },
  },
  vehicles: {
    it: { title: 'Parco Mezzi - Flotta Autobus | Pintour Bus', description: 'Il parco mezzi Pintour: autobus Mercedes Benz e Setra da 54, 40 e 30 posti, shuttle bus da 20 e 8 posti, auto VIP. Manutenzione certificata e massima sicurezza.' },
    en: { title: 'Our Fleet - Bus Vehicles | Pintour Bus', description: 'Pintour fleet: Mercedes Benz and Setra buses with 54, 40 and 30 seats, 20 and 8-seat shuttle buses, VIP cars. Certified maintenance and maximum safety.' },
    fr: { title: 'Notre Flotte - Véhicules Bus | Pintour Bus', description: 'Flotte Pintour: bus Mercedes Benz et Setra de 54, 40 et 30 places, navettes de 20 et 8 places, voitures VIP. Entretien certifié et sécurité maximale.' },
    de: { title: 'Unsere Flotte - Busfahrzeuge | Pintour Bus', description: 'Pintour Flotte: Mercedes Benz und Setra Busse mit 54, 40 und 30 Plätzen, Shuttle-Busse mit 20 und 8 Plätzen, VIP-Autos. Zertifizierte Wartung und maximale Sicherheit.' },
    es: { title: 'Nuestra Flota - Vehículos Autobús | Pintour Bus', description: 'Flota Pintour: autobuses Mercedes Benz y Setra de 54, 40 y 30 plazas, shuttle de 20 y 8 plazas, coches VIP. Mantenimiento certificado y máxima seguridad.' },
  },
  contacts: {
    it: { title: 'Contatti - Pintour Bus | Noleggio Bus Costiera Amalfitana', description: 'Contatta Pintour S.C.A.R.L. per noleggio bus e shuttle bus. Sede legale Pimonte (Na), sede operativa Pompei (Na). Tel: +39 081 879 2645, WhatsApp: +39 335 691 0211.' },
    en: { title: 'Contacts - Pintour Bus | Bus Rental Amalfi Coast', description: 'Contact Pintour S.C.A.R.L. for bus rental and shuttle bus. Legal HQ Pimonte (Na), operational HQ Pompei (Na). Tel: +39 081 879 2645, WhatsApp: +39 335 691 0211.' },
    fr: { title: 'Contacts - Pintour Bus | Location Bus Côte Amalfitaine', description: 'Contactez Pintour S.C.A.R.L. pour la location de bus et navette. Siège social Pimonte (Na), siège opérationnel Pompei (Na). Tél: +39 081 879 2645.' },
    de: { title: 'Kontakte - Pintour Bus | Busvermietung Amalfiküste', description: 'Kontaktieren Sie Pintour S.C.A.R.L. für Busvermietung und Shuttle-Bus. Firmensitz Pimonte (Na), Betriebssitz Pompei (Na). Tel: +39 081 879 2645.' },
    es: { title: 'Contactos - Pintour Bus | Alquiler de Bus Costa Amalfitana', description: 'Contacte con Pintour S.C.A.R.L. para alquiler de bus y shuttle. Sede legal Pimonte (Na), sede operativa Pompei (Na). Tel: +39 081 879 2645.' },
  },
  privacy: {
    it: { title: 'Privacy Policy - Pintour Bus', description: 'Informativa sul trattamento dei dati personali e cookie policy di Pintour S.C.A.R.L. in conformità al Regolamento GDPR 2016/679.' },
    en: { title: 'Privacy Policy - Pintour Bus', description: 'Information on the processing of personal data and cookie policy of Pintour S.C.A.R.L. in compliance with the GDPR Regulation 2016/679.' },
    fr: { title: 'Politique de confidentialité - Pintour Bus', description: "Informations sur le traitement des données personnelles et politique de cookies de Pintour S.C.A.R.L. conformément au Règlement RGPD 2016/679." },
    de: { title: 'Datenschutzerklärung - Pintour Bus', description: 'Informationen zur Verarbeitung personenbezogener Daten und Cookie-Richtlinie von Pintour S.C.A.R.L. gemäß DSGVO-Verordnung 2016/679.' },
    es: { title: 'Política de privacidad - Pintour Bus', description: 'Información sobre el tratamiento de datos personales y política de cookies de Pintour S.C.A.R.L. conforme al Reglamento RGPD 2016/679.' },
  },
};

export function getSeo(page: PageKey, lang: Language): SeoEntry {
  return seoData[page]?.[lang] ?? seoData.home.it;
}
