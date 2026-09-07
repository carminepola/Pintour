import type { PageKey } from './config';

export const company = {
  name: 'Pintour SOC. COOP. ARL',
  email: 'ordini@pintourbus.com',
  emailInfo: 'info@pintourbus.com',
  emailCareers: 'lavora-con-noi@pintourbus.com',
  phone1: '+39 081 879 2645',
  phone2: '+39 335 691 0211',
  whatsapp: '393356910211',
  vat: '06565461214',
  legalHQ: { street: 'Via 1° Maggio, 1', city: '06039 Trevi (PG)' },
  operationalHQ: { street: 'Via Mariconda, 39', city: '80045 Pompei (Na)' },
  operationalHQ2: { street: 'Roma', city: 'Roma' },
};

// Ordine di navigazione (orientato alla vendita: Tour in evidenza)
export const navKeys: PageKey[] = ['home', 'tours', 'shuttle', 'rental', 'vehicles', 'about', 'contacts', 'careers'];

export type VehicleKey = 'bus54' | 'bus40' | 'bus30' | 'shuttle20' | 'shuttle8' | 'auto4' | 'luggage';

export interface Vehicle {
  key: VehicleKey;
  image: string;
  color: string;
  count: string;
  icon: 'bus' | 'users' | 'car' | 'luggage';
}

export const vehicles: Vehicle[] = [
  { key: 'bus54', image: '/images/WhatsApp-Image-2019-06-07-at-11.00.52-1-thegem-portfolio-metro.jpg', color: '#0f2540', count: '6', icon: 'bus' },
  { key: 'bus40', image: '/images/WhatsApp-Image-2019-06-07-at-11.03.38-2-1-thegem-portfolio-metro.jpeg', color: '#1c3a55', count: '6', icon: 'bus' },
  { key: 'bus30', image: '/images/2911-thegem-portfolio-metro.jpeg', color: '#0f4c81', count: '7', icon: 'bus' },
  { key: 'shuttle20', image: '/images/WhatsApp-Image-2019-04-11-at-13.50.10-1-thegem-portfolio-metro.jpg', color: '#0f4c81', count: '', icon: 'bus' },
  { key: 'shuttle8', image: '/images/vito-thegem-portfolio-metro.jpg', color: '#0f2540', count: '2', icon: 'users' },
  { key: 'auto4', image: '/images/mercedes_classe_e_vip_1_20161125_1648113092-thegem-portfolio-metro.jpg', color: '#1c3a55', count: '1', icon: 'car' },
  { key: 'luggage', image: '/images/1-fiat-ducato-maxi-3.0-mjet-usato-galatina-lecce-salento-www.centrautogroup.it_-thegem-portfolio-metro.jpg', color: '#0f4c81', count: '2', icon: 'luggage' },
];

export const serviceCards = [
  { page: 'tours' as PageKey, titleKey: 'toursTitle', descKey: 'toursDesc', image: '/images/strada-costiera-amalfitana-maxw-1280.jpg', icon: '/images/iconcina-1.png' },
  { page: 'shuttle' as PageKey, titleKey: 'shuttleTitle', descKey: 'shuttleDesc', image: '/images/navetta-hone.png', icon: '/images/iconcina-1.png' },
  { page: 'rental' as PageKey, titleKey: 'rentalTitle', descKey: 'rentalDesc', image: '/images/bus-home-2.png', icon: '/images/iconcina-2.png' },
  { page: 'vehicles' as PageKey, titleKey: 'fleetTitle', descKey: 'fleetDesc', image: '/images/flotta-home-2.png', icon: '/images/iconcina-3.png' },
];

export type RegionKey = 'lazio' | 'toscana' | 'campania' | 'europa';
export type DestinationKey = 'roma' | 'firenze' | 'napoli' | 'amalfi' | 'pompei' | 'sorrento' | 'pisa' | 'parigi';

export interface Destination {
  key: DestinationKey;
  region: RegionKey;
  emoji: string;
  from: string;
  to: string;
  color: string;
  priceFrom: string;
  durationKey: 'half' | 'full' | 'multi';
  image: string;
}

export const destinations: Destination[] = [
  { key: 'roma', region: 'lazio', emoji: '🏛️', from: '#0f2540', to: '#1c3a55', color: '#0f2540', priceFrom: '€39', durationKey: 'full', image: '/images/roma-colosseum.jpg' },
  { key: 'firenze', region: 'toscana', emoji: '🎨', from: '#0f4c81', to: '#0a3a62', color: '#0f4c81', priceFrom: '€49', durationKey: 'multi', image: '/images/firenze-duomo.jpg' },
  { key: 'napoli', region: 'campania', emoji: '🌋', from: '#0f4c81', to: '#0a3a62', color: '#0f4c81', priceFrom: '€29', durationKey: 'full', image: '/images/napoli-vesuvius.jpg' },
  { key: 'amalfi', region: 'campania', emoji: '🌊', from: '#1c3a55', to: '#0f2540', color: '#1c3a55', priceFrom: '€35', durationKey: 'full', image: '/images/amalfi-coast.jpg' },
  { key: 'pompei', region: 'campania', emoji: '🏺', from: '#0f4c81', to: '#1c3a55', color: '#0f4c81', priceFrom: '€25', durationKey: 'half', image: '/images/pompei-ruins.jpg' },
  { key: 'sorrento', region: 'campania', emoji: '🍋', from: '#0f4c81', to: '#1c3a55', color: '#0f4c81', priceFrom: '€30', durationKey: 'full', image: '/images/sorrento-coast.jpg' },
  { key: 'pisa', region: 'toscana', emoji: '🏛️', from: '#0f4c81', to: '#0a3a62', color: '#0f4c81', priceFrom: '€39', durationKey: 'full', image: '/images/pisa-tower.jpg' },
  { key: 'parigi', region: 'europa', emoji: '🗼', from: '#1c3a55', to: '#0f4c81', color: '#1c3a55', priceFrom: '€199', durationKey: 'multi', image: '/images/parigi-eiffel.jpg' },
];

export const regionOrder: RegionKey[] = ['lazio', 'toscana', 'campania', 'europa'];

export interface WhyItem {
  icon: 'shield' | 'bus' | 'users' | 'award';
  color: string;
  titleKey: 'experience' | 'fleet' | 'safety' | 'drivers';
}

export const whyItems: WhyItem[] = [
  { icon: 'award', color: '#0f4c81', titleKey: 'experience' },
  { icon: 'bus', color: '#0f2540', titleKey: 'fleet' },
  { icon: 'shield', color: '#25867f', titleKey: 'safety' },
  { icon: 'users', color: '#1c3a55', titleKey: 'drivers' },
];

export type JobKey = 'driverGt' | 'bookingSecretary';
export type JobContract = 'fullTime' | 'partTime' | 'seasonal' | 'temporary';

export interface JobOpening {
  key: JobKey;
  icon: 'bus' | 'mail';
  color: string;
  location: string;
  contract: JobContract;
}

export const jobOpenings: JobOpening[] = [
  { key: 'driverGt', icon: 'bus', color: '#0f2540', location: 'Pompei (Na)', contract: 'fullTime' },
  { key: 'bookingSecretary', icon: 'mail', color: '#0f4c81', location: 'Pompei (Na)', contract: 'fullTime' },
];
