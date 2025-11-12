export interface Business {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  website: string;
  description: string;
}

const mockBusinesses: Business[] = [
  {
    id: 1,
    name: 'Byte Cafe',
    category: 'Restaurant',
    address: '123 Tech Avenue, Silicon Valley, CA',
    phone: '555-0101',
    website: 'https://bytecafe.example.com',
    description: 'A modern cafe serving artisanal coffee and locally-sourced pastries to the tech community. Free Wi-Fi and power outlets available.'
  },
  {
    id: 2,
    name: 'Code & Quill',
    category: 'Bookstore',
    address: '456 Binary Blvd, San Francisco, CA',
    phone: '555-0102',
    website: 'https://codeandquill.example.com',
    description: 'An independent bookstore specializing in programming, design, and technology books. Hosts weekly meetups and author signings.'
  },
  {
    id: 3,
    name: 'Innovate Gym',
    category: 'Fitness',
    address: '789 Algorithm Way, Mountain View, CA',
    phone: '555-0103',
    website: 'https://innovategym.example.com',
    description: 'A state-of-the-art fitness center with smart equipment, virtual classes, and personalized training programs for a healthier lifestyle.'
  },
  {
    id: 4,
    name: 'Pixel Perfect Printing',
    category: 'Services',
    address: '101 DPI Drive, Palo Alto, CA',
    phone: '555-0104',
    website: 'https://pixelprint.example.com',
    description: 'High-quality digital and offset printing services for businesses and individuals. Specializing in marketing materials and custom stationery.'
  },
  {
    id: 5,
    name: 'Green Leaf Grocers',
    category: 'Retail',
    address: '212 Organic Lane, Cupertino, CA',
    phone: '555-0105',
    website: 'https://greenleaf.example.com',
    description: 'A family-owned grocery store offering a wide selection of organic produce, gourmet foods, and eco-friendly household products.'
  },
    {
    id: 6,
    name: 'Main Street Auto Repair',
    category: 'Services',
    address: '333 Gearshift Rd, San Jose, CA',
    phone: '555-0106',
    website: 'https://mainstreetauto.example.com',
    description: 'Trusted, ASE-certified mechanics providing reliable and affordable auto repair and maintenance services for all makes and models.'
  },
];

const simulateDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchBusinesses = async (): Promise<Business[]> => {
  await simulateDelay(500); // Simulate network latency
  return mockBusinesses;
};

export const searchBusinesses = async (query: string): Promise<Business[]> => {
  await simulateDelay(300);
  const lowercasedQuery = query.toLowerCase();
  return mockBusinesses.filter(
    business =>
      business.name.toLowerCase().includes(lowercasedQuery) ||
      business.category.toLowerCase().includes(lowercasedQuery) ||
      business.address.toLowerCase().includes(lowercasedQuery)
  );
};
