export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Our Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
] as const;

export const stats = [
  {
    value: '100+',
    label: 'Installations Completed',
    description: 'CCTV deployments across shops, offices, and facilities with reliable execution.'
  },
  {
    value: '6+',
    label: 'Years',
    description: 'Hands-on expertise in surveillance, electrical, and system installations.'
  },
  {
    value: '100%',
    label: 'Safety Compliance',
    description: 'Work executed following strict installation and safety standards.'
  },
  {
    value: '24/7',
    label: 'Support Availability',
    description: 'Responsive assistance for maintenance, troubleshooting, and service requests.'
  },
]

export const features = [
  {
    title: 'Theft Prevention',
    description: 'Visible cameras deter theft. Recorded footage protects your business when incidents happen.',
    iconSrc: '/icons/thief-icon.png',
    iconAlt: 'Thief Icon'
  },
  {
    title: 'Fast Installation',
    description: 'We handle everything — most systems installed quickly with minimal disruption.',
    iconSrc: '/icons/clock-icon.png',
    iconAlt: 'Clock Icon'
  },
  {
    title: 'Easy Maintenance',
    description: 'Regular maintenance keeps your system reliable, without unexpected issues.',
    iconSrc: '/icons/tool-icon.png',
    iconAlt: 'Tool Icon'
  },
  {
    title: 'Mobile Monitoring',
    description: 'Visible cameras deter theft. Recorded footage protects your business when incidents happen.',
    iconSrc: '/icons/mobile-icon.png',
    iconAlt: 'Mobile Icon'
  },
]

export const services = [
  {
    imageSrc: '/services/cctv-installation.png', 
    imageAlt: 'A person installing a cctv camera', 
    tags: ['Security', 'Surveillance'],
    title: 'CCTV Installation & Surveillance', 
    description: 'End-to-end camera system design, installation, and configuration for shops, offices, and facilities — with remote monitoring and ongoing support.'
  },
  {
    imageSrc: '/services/access-control.png', 
    imageAlt: 'A person installing a biometric sensor', 
    tags: ['Biometrics', 'Entry Control'],
    title: 'Access Control', 
    description: 'Biometric and entry management solutions that regulate and monitor authorized access to your premises.'
  },
  {
    imageSrc: '/services/fire-safety.png', 
    imageAlt: 'A person installing a fire safety alarm', 
    tags: ['Alerts', 'Compliance'],
    title: 'Fire Safety', 
    description: 'Detection and alert systems designed to improve safety readiness and regulatory compliance.'
  },
  {
    imageSrc: '/services/electrical-support.png', 
    imageAlt: 'A person installing a server case', 
    tags: ['Power Systems', 'Maintenance'],
    title: 'Electrical Support', 
    description: 'Installation and maintenance support for power distribution and system infrastructure.'
  }, 
]

export const adaptableSolutions = [
  {
    imageSrc: '/solutions/retail-store.png',
    imageAlt: 'Retail store image',
    title: 'Retail Shops',
    description: 'Inventory protection and customer monitoring tailored to store layouts and traffic patterns.'
  },
  {
    imageSrc: '/solutions/office.png',
    imageAlt: 'Office image',
    title: 'Offices',
    description: 'Access and surveillance configured for employee safety and asset protection.'
  },
  {
    imageSrc: '/solutions/restaurant.png',
    imageAlt: 'Restaurant Image',
    title: 'Restaurants',
    description: 'Coverage designed for kitchens, storage, and customer-facing areas.'
  },
  {
    imageSrc: '/solutions/warehouse.png',
    imageAlt: 'Warehouse Image',
    title: 'Warehouses',
    description: 'Wide-area monitoring solutions optimized for inventory movement and scale.'
  },
   
]

export const processes = [
  {
    step: '01',
    title: 'Free Site Visit & Analysis', 
    description: 'We assess your premises, risk points and coverage needs to recommend the right surveillance setup.',
    iconSrc: '/icons/location-icon-white.png',
    iconAlt: 'location icon'
  },
  {
    step: '02',
    title: 'Installation & Setup', 
    description: 'Professional installation, system configuration, and mobile monitoring setup — ready to use immediately.',
    iconSrc: '/icons/tool-icon-white.png',
    iconAlt: 'location icon'
  },
  {
    step: '03',
    title: 'Ongoing Service & Support', 
    description: 'Regular maintenance and quick support to ensure your system runs reliably at all times.',
    iconSrc: '/icons/headset-icon-white.png',
    iconAlt: 'location icon'
  },

] 

export const ourWorks = [
  {
    imageSrc: '/our-work/thandhi-tv-office.jpg', 
    imageAlt: 'Thandhi Tv Office Image', 
    title: 'Integrated Security System Deployment', 
    description: 'End-to-end installation of IP cameras with access control, fire alarm, and public address systems for workplace safety and monitoring.',
    tags: ['CCTV', 'Access Control'],
    location: 'Thanthi TV Office - Perungudi, Chennai',
    href: '/our-work'
  },
  {
    imageSrc: '/our-work/byjus.jpg', 
    imageAlt: 'Byjus Tution Centre Image', 
    title: 'Enterprise Network Infrastructure Setup', 
    description: 'Installation and testing of 120 networking points to support reliable connectivity across classrooms and operational areas.',
    tags: ['Networking', 'Infrastructure'],
    location: 'BYJU’S Tution Centre - Trichy',
    href: '/our-work'
  },
  {
    imageSrc: '/our-work/power-tech-engineers.png', 
    imageAlt: 'Power Tech Engineers HT/LT Electrical System Installation Image', 
    title: 'HT/LT Electrical System Commissioning', 
    description: 'Transformer installation, panel setup, and cable routing for high-capacity industrial electrical distribution.',
    tags: ['Electrical', 'Industrial'],
    location: 'Power Tech Engineering - Porur, Chennai',
    href: '/our-work'
  },
]

export const about = {
  badge: 'Licensed & Compliant',
  title: 'Certified Engineering Execution You Can Rely On',
  description: 'S.K. Power Tech is an electrical engineering firm established in 2018, delivering consultancy, installation, testing, and commissioning services across power, instrumentation, surveillance, and industrial electrification projects. Our team manages the complete lifecycle — from requirement analysis to execution, maintenance, and troubleshooting — ensuring dependable performance across commercial and industrial environments.',
  highlights: [
    'Installation, Erection & Commissioning Expertise',
    'CCTV, Fire Alarm & Access Systems Integration',
    'HT/LT Electrical Infrastructure Execution',
    'Annual Maintenance for Industrial & Commercial Sites'
  ],
  imageSrc: '/about/about-section-img.png',
  imageAlt: 'About section image',
}