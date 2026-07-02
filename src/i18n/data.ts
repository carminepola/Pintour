import type { PageKey } from './config';

export const company = {
  name: 'Pintour S.C.A.R.L.',
  email: 'ordini@pintourbus.com',
  emailInfo: 'info@pintourbus.com',
  phone1: '+39 081 879 2645',
  phone2: '+39 335 691 0211',
  whatsapp: '393356910211',
  vat: '06565461214',
  legalHQ: { street: 'Via Castellammare, 18', city: '80050 Pimonte (Na)' },
  operationalHQ: { street: 'Via Mariconda, 39', city: '80045 Pompei (Na)' },
};

// Ordine di navigazione (orientato alla vendita: Tour in evidenza)
export const navKeys: PageKey[] = ['home', 'tours', 'shuttle', 'rental', 'vehicles', 'about', 'contacts'];

export type VehicleKey = 'bus54' | 'bus40' | 'bus30' | 'shuttle20' | 'shuttle8' | 'auto4' | 'luggage';

export interface Vehicle {
  key: VehicleKey;
  image: string;
  color: string;
  count: string;
  icon: 'bus' | 'users' | 'car' | 'luggage';
}

export const vehicles: Vehicle[] = [
  { key: 'bus54', image: '/images/WhatsApp-Image-2019-06-07-at-11.00.52-1-thegem-portfolio-metro.jpg', color: '#1a1064', count: '6', icon: 'bus' },
  { key: 'bus40', image: '/images/WhatsApp-Image-2019-06-07-at-11.03.38-2-1-thegem-portfolio-metro.jpeg', color: '#24227a', count: '6', icon: 'bus' },
  { key: 'bus30', image: '/images/2911-thegem-portfolio-metro.jpeg', color: '#25867f', count: '7', icon: 'bus' },
  { key: 'shuttle20', image: '/images/WhatsApp-Image-2019-04-11-at-13.50.10-1-thegem-portfolio-metro.jpg', color: '#ec2a7a', count: '', icon: 'bus' },
  { key: 'shuttle8', image: '/images/vito-thegem-portfolio-metro.jpg', color: '#1a1064', count: '2', icon: 'users' },
  { key: 'auto4', image: '/images/mercedes_classe_e_vip_1_20161125_1648113092-thegem-portfolio-metro.jpg', color: '#24227a', count: '1', icon: 'car' },
  { key: 'luggage', image: '/images/1-fiat-ducato-maxi-3.0-mjet-usato-galatina-lecce-salento-www.centrautogroup.it_-thegem-portfolio-metro.jpg', color: '#25867f', count: '2', icon: 'luggage' },
];

export const serviceCards = [
  { page: 'tours' as PageKey, titleKey: 'toursTitle', descKey: 'toursDesc', image: '/images/strada-costiera-amalfitana-maxw-1280.jpg', icon: '/images/iconcina-1.png' },
  { page: 'shuttle' as PageKey, titleKey: 'shuttleTitle', descKey: 'shuttleDesc', image: '/images/navetta-hone.png', icon: '/images/iconcina-1.png' },
  { page: 'rental' as PageKey, titleKey: 'rentalTitle', descKey: 'rentalDesc', image: '/images/bus-home-2.png', icon: '/images/iconcina-2.png' },
  { page: 'vehicles' as PageKey, titleKey: 'fleetTitle', descKey: 'fleetDesc', image: '/images/flotta-home-2.png', icon: '/images/iconcina-3.png' },
];

export type RegionKey = 'lazio' | 'toscana' | 'campania' | 'europa';
export type DestinationKey = 'roma' | 'firenze' | 'napoli' | 'amalfi' | 'pompei' | 'sorrento' | 'capri' | 'parigi';

export interface Destination {
  key: DestinationKey;
  region: RegionKey;
  emoji: string;
  from: string;
  to: string;
  color: string;
  priceFrom: string;
  durationKey: 'half' | 'full' | 'multi';
}

export const destinations: Destination[] = [
  { key: 'roma', region: 'lazio', emoji: '🏛️', from: '#1a1064', to: '#24227a', color: '#1a1064', priceFrom: '€39', durationKey: 'full' },
  { key: 'firenze', region: 'toscana', emoji: '🎨', from: '#ec2a7a', to: '#d4236a', color: '#ec2a7a', priceFrom: '€49', durationKey: 'multi' },
  { key: 'napoli', region: 'campania', emoji: '🌋', from: '#25867f', to: '#1f6b65', color: '#25867f', priceFrom: '€29', durationKey: 'full' },
  { key: 'amalfi', region: 'campania', emoji: '🌊', from: '#24227a', to: '#1a1064', color: '#24227a', priceFrom: '€35', durationKey: 'full' },
  { key: 'pompei', region: 'campania', emoji: '🏺', from: '#ec2a7a', to: '#24227a', color: '#ec2a7a', priceFrom: '€25', durationKey: 'half' },
  { key: 'sorrento', region: 'campania', emoji: '🍋', from: '#25867f', to: '#24227a', color: '#25867f', priceFrom: '€30', durationKey: 'full' },
  { key: 'capri', region: 'campania', emoji: '🏝️', from: '#1a1064', to: '#25867f', color: '#1a1064', priceFrom: '€45', durationKey: 'full' },
  { key: 'parigi', region: 'europa', emoji: '🗼', from: '#24227a', to: '#ec2a7a', color: '#24227a', priceFrom: '€199', durationKey: 'multi' },
];

export const regionOrder: RegionKey[] = ['lazio', 'toscana', 'campania', 'europa'];

export interface WhyItem {
  icon: 'shield' | 'bus' | 'users' | 'award';
  color: string;
  titleKey: 'experience' | 'fleet' | 'safety' | 'drivers';
}

export const whyItems: WhyItem[] = [
  { icon: 'award', color: '#ec2a7a', titleKey: 'experience' },
  { icon: 'bus', color: '#1a1064', titleKey: 'fleet' },
  { icon: 'shield', color: '#25867f', titleKey: 'safety' },
  { icon: 'users', color: '#24227a', titleKey: 'drivers' },
];
