export const genres = [
  {
    id: 1,
    name: "Business/Entrepreneurship",
  },
  {
    id: 2,
    name: "Psychology/Sales",
  },
  {
    id: 3,
    name: "Business/Marketing",
  },
  {
    id: 4,
    name: "Business/Technology",
  },
  {
    id: 5,
    name: "Marketing/Technology",
  },
];

export interface Book {
  id: number;
  title: string;
  img: string;
  price: string;
}
export const books = [
  {
    id: 1,
    title: "Cloud Computing Solutions",
    description: "Our cloud computing solutions offer scalable and secure cloud infrastructure to support your business operations. Whether you need public, private, or hybrid cloud services, we provide customized solutions that ensure data accessibility and business continuity.",
    category: "Technology/Cloud Services",
    img: "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=300",
    price: "$3000",
  },
  {
    id: 2,
    title: "Cybersecurity Services",
    description: "Protect your business from cyber threats with our comprehensive cybersecurity services. We offer advanced security solutions including threat detection, vulnerability assessments, and incident response to safeguard your critical data.",
    category: "Technology/Security",
    img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$2500",
  },
  {
    id: 3,
    title: "Software Development",
    description: "Our software development services cater to businesses looking to create custom software solutions. From mobile apps to enterprise software, our team of developers delivers high-quality, scalable software tailored to your specific needs.",
    category: "Technology/Development",
    img: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$5000",
  },
  {
    id: 4,
    title: "IT Consulting Services",
    description: "Our IT consulting services help businesses optimize their IT infrastructure and strategy. We provide expert advice on technology adoption, system upgrades, and digital transformation initiatives to enhance your business operations.",
    category: "Technology/Consulting",
    img:  "https://images.pexels.com/photos/6804067/pexels-photo-6804067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$500",
  },
  {
    id: 5,
    title: "Managed IT Services",
    description: "Let us manage your IT operations with our comprehensive managed IT services. We offer 24/7 monitoring, maintenance, and support to ensure your IT systems are always running smoothly.",
    category: "Technology/Managed Services",
    img: "https://images.pexels.com/photos/6803546/pexels-photo-6803546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$1200",
  },
  {
    id: 6,
    title: "Data Analytics and Business Intelligence",
    description: "Transform your data into actionable insights with our data analytics and business intelligence services. We provide tools and expertise to help you analyze data, generate reports, and make informed business decisions.",
    category: "Technology/Data Analytics",
    img: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$2000",
  },
  {
    id: 7,
    title: "Network Infrastructure Solutions",
    description: "Build a robust and reliable network infrastructure with our expert solutions. We design, implement, and manage network systems that support your business communication and data needs.",
    category: "Technology/Networking",
    img: "https://images.pexels.com/photos/4339335/pexels-photo-4339335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "$1700",
  },
];

