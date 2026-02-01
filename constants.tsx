import { Project, Experience, Skill, Service } from './types';
import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  Terminal, 
  Cpu,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import React from 'react';

// =========================================================================
// ⚙️ TIZIM SOZLAMALARI VA MA'LUMOTLARNI O'ZGARTIRISH (BOSHQARUV PANELI)
// =========================================================================

export const PROFILE = {
  name: "Sanjarbek Otabekov",
  role: "Senior Full Stack Dasturchi",
  
  // 🖼 ASOSIY RASM (O'ZGARTIRISH YO'RIQNOMASI):
  // 1. O'z rasmingizni loyihaning "public" papkasiga tashlang (masalan: men.jpg).
  // 2. Pastdagi qatorga rasm nomini yozing. Masalan: "/men.jpg"
  // Agar internetdan qo'ymoqchi bo'lsangiz, to'liq linkni yozing.
  
  heroImage: "men.jpg", 
  
  // 📄 CV (RESUME) FAYLI:
  // PDF faylingizni ham "public" papkasiga tashlang va nomini yozing (masalan: "/resume.pdf").
  resumeUrl: "#", 
  
  // 📍 SHAXSIY MA'LUMOTLAR
  location: "Toshkent, O'zbekiston",
  email: "sanjarbek@example.com",
  phone: "+998 90 123 45 67",
  status: "Ishga tayyor", // Yoki "Band", "Loyihalar olmoqda"
  
  // 📝 QISQA TA'RIF (Sayt boshida chiqadi)
  aboutShort: "Men biznesingizni raqamli dunyoda yuksaltirish uchun xavfsiz, tezkor va zamonaviy dasturiy yechimlar yarataman.",
  
  // 📝 TO'LIQ TA'RIF (Haqimda qismida chiqadi)
  aboutLong: `Dasturlash sohasida 5 yildan ortiq tajribaga egaman. Men uchun kod yozish — bu shunchaki buyruqlar ketma-ketligi emas, balki mukammal mantiq va mustahkam arxitektura qurish san'atidir. 
  
  Har bir loyihada men nafaqat texnik talablarni, balki biznes maqsadlarini ham birinchi o'ringa qo'yaman. Mening asosiy maqsadim — foydalanuvchilarga qulaylik, biznesga esa daromad keltiradigan barqaror tizimlarni ishlab chiqishdir.`,
  
  // 🔗 IJTIMOIY TARMOQLAR
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    telegram: "https://t.me/sanjarbek",
    instagram: "https://instagram.com"
  }
};

// =========================================================================
// 🛠 XIZMATLAR (SERVICES)
// =========================================================================
export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Web Ilovalar Yaratish",
    description: "Murakkab biznes jarayonlarini avtomatlashtiruvchi, tezkor va xavfsiz web saytlar hamda platformalar (React, Next.js).",
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Backend va API",
    description: "Yuqori yuklamaga bardosh beradigan server arxitekturasi va REST/GraphQL API tizimlarini loyihalash.",
    icon: <Database className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Mobil Ilovalar",
    description: "iOS va Android platformalari uchun qulay, chiroyli va tez ishlaydigan mobil ilovalar ishlab chiqish (React Native).",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Kiberxavfsizlik Auditi",
    description: "Mavjud loyihalarni xavfsizlik jihatidan tekshirish, zaifliklarni aniqlash va ularni bartaraf etish.",
    icon: <Shield className="w-8 h-8" />
  }
];

// =========================================================================
// 🚀 LOYIHALAR (PROJECTS)
// ⚠️ YANGI LOYIHA QO'SHISH UCHUN:
// Pastdagi {...} blokidan nusxa olib, vergul (,) bilan ajratib qo'shing.
// =========================================================================
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Ekotizim",
    description: "Katta hajmdagi tovarlar aylanmasini boshqaruvchi, to'lov tizimlari integratsiya qilingan zamonaviy onlayn bozor. Yuqori tezlik va xavfsizlik ta'minlangan.",
    techStack: ["Next.js 14", "Node.js", "PostgreSQL", "Redis"],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "AI Assistent Platformasi",
    description: "Korxonalar uchun mijozlar bilan muloqot qiluvchi sun'iy intellektga (AI) asoslangan aqlli chat tizimi. 24/7 rejimida ishlaydi.",
    techStack: ["Python", "FastAPI", "OpenAI API", "React"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    description: "Moliyaviy tahlillar va real vaqt rejimidagi tranzaksiyalarni kuzatish uchun interaktiv boshqaruv paneli. Grafiklar va hisobotlar.",
    techStack: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  },
  // --- Misol uchun yangi loyihalar (Avtomatik moslashishini tekshirish uchun) ---
  {
    id: 4,
    title: "Travel Booking App",
    description: "Dunyo bo'ylab sayohatlarni rejalashtirish, mehmonxona va aviachiptalarni band qilish uchun qulay mobil ilova.",
    techStack: ["React Native", "Redux", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "Crypto Tracker",
    description: "Kriptovalyutalar narxini real vaqtda kuzatish va portfolio boshqaruvi uchun mo'ljallangan web ilova.",
    techStack: ["React", "WebSockets", "CoinGecko API"],
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "O'quv markazlari uchun talabalar, o'qituvchilar va kurslarni boshqarish tizimi. Video darslar yuklash imkoniyati.",
    techStack: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 7,
    title: "Smart Home Controller",
    description: "Uydagi aqlli qurilmalarni (chiroq, konditsioner) masofadan boshqarish uchun IoT tizimi.",
    techStack: ["Flutter", "Firebase", "IoT", "Arduino"],
    imageUrl: "https://images.unsplash.com/photo-1558002038-10917738179d?fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#"
  }
];

// =========================================================================
// 💼 ISH TAJRIBASI (EXPERIENCE)
// =========================================================================
export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "Global Tech Solutions",
    period: "2022 - Hozir",
    description: "Xalqaro loyihalarda ishtirok etish, mikroservis arxitekturasini qurish va jamoani boshqarish."
  },
  {
    id: 2,
    role: "Middle Backend Developer",
    company: "FinTech Innovation",
    period: "2020 - 2022",
    description: "Bank tizimlari uchun xavfsiz API yozish va ma'lumotlar bazasini optimallashtirish."
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: "Zamonaviy UI/UX dizaynlarni kodga o'tkazish va animatsiyalar bilan ishlash."
  }
];

// =========================================================================
// ⚡️ KO'NIKMALAR (SKILLS)
// =========================================================================
export const SKILLS: (Omit<Skill, 'icon'> & { icon: React.ReactNode })[] = [
  { name: "Frontend (React/Next)", level: 98, icon: <Layout className="w-6 h-6" /> },
  { name: "Backend (Node/Python)", level: 90, icon: <Terminal className="w-6 h-6" /> },
  { name: "Database (SQL/NoSQL)", level: 85, icon: <Database className="w-6 h-6" /> },
  { name: "Cloud (AWS/Docker)", level: 75, icon: <Globe className="w-6 h-6" /> },
  { name: "AI Integration", level: 80, icon: <Cpu className="w-6 h-6" /> },
  { name: "Architecture", level: 88, icon: <Zap className="w-6 h-6" /> },
];