/* =============================================================
   PrincingData.js
   Preispläne für die Pricing-Sektion (Free, Basic, Pro).
   Plain Array — wird später durch Backend-API ersetzt.
   Felder: id, label, preis, periode, gruppeTitel,
           featured, badge, features[].
   ============================================================= */

export const pricingPlans = [
  {
    id: 'free',
    label: 'Free',
    preis: '0€',
    periode: '/Monat',
    gruppeTitel: 'Für Einsteiger',
    featured: false,
    badge: null,
    features: ['3 Termine', '1 Erinnerung', 'SMS oder WhatsApp-Versand'],
  },
  {
    id: 'basic',
    label: 'Basic',
    preis: '14,99€',
    periode: '/Monat',
    gruppeTitel: 'Für wachsende Betriebe',
    featured: true,
    badge: 'Empfohlen',
    features: ['50 Termine', '2 Erinnerungen', 'SMS oder WhatsApp-Versand'],
  },
  {
    id: 'pro',
    label: 'Pro',
    preis: '29,99€',
    periode: '/Monat',
    gruppeTitel: 'Für professionelle Betriebe',
    featured: false,
    badge: null,
    features: [
      'Unbegrenzte Termine',
      '3 Erinnerungen',
      'SMS oder WhatsApp-Versand',
    ],
  },
];
