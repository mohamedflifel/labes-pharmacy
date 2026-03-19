import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Stethoscope,
  Baby,
  Sparkles,
  HeartPulse,
  Syringe,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

// --- Arabesque SVG Pattern Background ---
const ArabesquePattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="arabesque" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* Geometric star pattern */}
        <polygon points="40,5 47,28 72,28 52,43 59,68 40,53 21,68 28,43 8,28 33,28" fill="none" stroke="#0e7490" strokeWidth="1" />
        <circle cx="40" cy="40" r="12" fill="none" stroke="#0891b2" strokeWidth="0.8" />
        <rect x="28" y="28" width="24" height="24" fill="none" stroke="#06b6d4" strokeWidth="0.6" transform="rotate(45 40 40)" />
        <circle cx="40" cy="40" r="4" fill="#0e7490" opacity="0.4" />
        {/* Corner dots */}
        <circle cx="0" cy="0" r="2" fill="#0891b2" opacity="0.3" />
        <circle cx="80" cy="0" r="2" fill="#0891b2" opacity="0.3" />
        <circle cx="0" cy="80" r="2" fill="#0891b2" opacity="0.3" />
        <circle cx="80" cy="80" r="2" fill="#0891b2" opacity="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#arabesque)" />
  </svg>
);

// --- Zellige Divider ---
const ZellijeDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon points="14,2 16,10 24,10 18,16 20,24 14,19 8,24 10,16 4,10 12,10" fill="#0891b2" opacity="0.7" />
    </svg>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />
  </div>
);

// --- Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Horaires', href: '#hours' },
    { name: 'Santé & Conseils', href: '#blog' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur shadow-lg shadow-cyan-900/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-2.5 rounded-lg shadow-lg shadow-cyan-500/30">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-slate-900" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Labes<span className="text-cyan-400">Pharmacy</span>
              </span>
              <span className="text-[10px] text-cyan-300/70 tracking-widest uppercase">صيدلية لاباس</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+21612345678"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-lg text-sm font-bold hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/25"
            >
              Appeler
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-cyan-900/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-xl font-bold">
                  Contactez-nous
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero ---
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Arabesque BG */}
      <ArabesquePattern />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-teal-950/80 -z-0" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

      {/* Decorative arch top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Arabic label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-4 h-4" />
              موثوق من قِبل آلاف العائلات
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
             صحتك,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                أولويتنا.
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-300 mb-6">
              Votre Santé, Notre Priorité.
            </h2>

            <ZellijeDivider />

            <p className="text-base text-slate-400 mb-8 max-w-lg leading-relaxed mt-4">
              Labes Pharmacy vous offre un service pharmaceutique de confiance, des conseils personnalisés et des produits de qualité pour toute la famille — au cœur de votre quartier.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-teal-400 transition-all shadow-xl shadow-cyan-500/30 hover:-translate-y-1"
              >
                Nos Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                Contactez-nous
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {[
                { val: '24/7', label: 'Disponible' },
                { val: '15+', label: "Ans d'expérience" },
                { val: '100%', label: 'Produits Certifiés' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-cyan-400" style={{ fontFamily: 'Georgia, serif' }}>{s.val}</div>
                  <div className="text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 rounded-3xl border border-teal-400/10 -translate-x-2 -translate-y-2" />

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-cyan-900/50">
              <img
                src="https://i.ibb.co/wFkvHq5X/30e76816-efbc-440b-b190-4f43de71459a.png"
                alt="Pharmacist helping customer"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-slate-800 border border-cyan-500/30 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="bg-cyan-500/20 p-3 rounded-xl border border-cyan-500/30">
                <Stethoscope className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Consultation Gratuite</div>
                <div className="text-xs text-slate-400">Tous les jours</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Services ---
const Services = () => {
  const services: Service[] = [
    { title: 'Ordonnances', description: "Préparation rapide et précise de vos ordonnances avec conseils d'utilisation.", icon: <HeartPulse className="w-8 h-8" /> },
    { title: 'Vaccinations', description: 'Grippe, voyages, vaccins de routine — restez protégé toute l\'année.', icon: <Syringe className="w-8 h-8" /> },
    { title: 'Tension Artérielle', description: 'Mesure gratuite de la tension et conseils santé cardiovasculaire.', icon: <Stethoscope className="w-8 h-8" /> },
    { title: 'Conseil Médication', description: 'Entretiens personnalisés pour mieux gérer vos traitements.', icon: <CheckCircle2 className="w-8 h-8" /> },
    { title: 'Cosmétique & Soin', description: 'Les meilleures marques de soins de la peau et produits de beauté.', icon: <Sparkles className="w-8 h-8" /> },
    { title: 'Produits Bébé', description: 'Tout ce qu\'il faut pour votre bébé : nutrition, soins, hygiène.', icon: <Baby className="w-8 h-8" /> },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <ArabesquePattern />
      <div className="absolute inset-0 bg-slate-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3">خدماتنا · Nos Services</h2>
          <ZellijeDivider />
          <h3 className="text-4xl font-bold text-white mb-4 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
            Soins Complets pour Votre Famille
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Une gamme complète de services pharmaceutiques et produits de santé pour vous accompagner au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.5)' }}
              className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:shadow-xl hover:shadow-cyan-900/20 transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>{service.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
              <button className="text-cyan-400 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-sm">
                En savoir plus <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Hours ---
const Hours = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      if (day >= 1 && day <= 5) setIsOpen(hour >= 8 && hour < 20);
      else if (day === 6) setIsOpen(hour >= 9 && hour < 18);
      else setIsOpen(hour >= 10 && hour < 16);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    { day: 'Lundi – Vendredi', arabic: 'الإثنين – الجمعة', hours: '08:00 – 20:00' },
    { day: 'Samedi', arabic: 'السبت', hours: '09:00 – 18:00' },
    { day: 'Dimanche', arabic: 'الأحد', hours: '10:00 – 16:00' },
  ];

  return (
    <section id="hours" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-900/40 shadow-2xl shadow-cyan-900/20">
          <ArabesquePattern />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-slate-900/95 to-teal-950/90" />

          <div className="relative z-10 grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full animate-pulse ${isOpen ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                <span className={`font-bold text-sm uppercase tracking-widest ${isOpen ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isOpen ? 'Ouvert Maintenant · مفتوح' : 'Fermé · مغلق'}
                </span>
              </div>

              <h3 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Nos Horaires</h3>
              <p className="text-cyan-400/60 text-lg mb-2">أوقات العمل</p>
              <ZellijeDivider />
              <p className="text-slate-400 mb-10 leading-relaxed mt-4">
                Notre équipe est disponible toute la semaine pour répondre à vos besoins pharmaceutiques.
              </p>

              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-slate-800 last:border-0">
                    <div>
                      <span className="font-semibold text-white">{item.day}</span>
                      <span className="text-xs text-slate-500 block">{item.arabic}</span>
                    </div>
                    <span className="text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-lg text-sm font-mono">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
                alt="Pharmacy interior"
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-teal-950/40" />
              {/* Decorative arch */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
                  <path d="M20 300 L20 120 Q20 20 100 20 Q180 20 180 120 L180 300" stroke="#06b6d4" strokeWidth="2" fill="none" />
                  <path d="M40 300 L40 130 Q40 50 100 50 Q160 50 160 130 L160 300" stroke="#0891b2" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Blog ---
const Blog = () => {
  const posts: BlogPost[] = [
    { id: 1, title: '5 Conseils pour Gérer le Diabète', excerpt: 'Maintenez une glycémie saine grâce à une alimentation équilibrée, l\'exercice et une bonne gestion des médicaments.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop', date: '15 Mars 2026' },
    { id: 2, title: 'Quand Utiliser des Antibiotiques ?', excerpt: 'Comprendre la différence entre infections virales et bactériennes est essentiel pour utiliser les antibiotiques de façon responsable.', image: 'https://images.unsplash.com/photo-1612540943977-98ce54bea8a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', date: '12 Mars 2026' },
    { id: 3, title: 'Rester Hydraté en Été', excerpt: 'L\'hydratation est essentielle pour le bon fonctionnement de votre corps. Découvrez des astuces pour boire plus d\'eau.', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop', date: '10 Mars 2026' },
  ];

  return (
    <section id="blog" className="py-24 bg-slate-950 relative overflow-hidden">
      <ArabesquePattern />
      <div className="absolute inset-0 bg-slate-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3">نصائح صحية · Santé & Conseils</h2>
            <ZellijeDivider />
            <h3 className="text-4xl font-bold text-white mb-4 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              Derniers Articles Santé
            </h3>
            <p className="text-slate-400">Nos pharmaciens partagent des conseils utiles pour vous et votre famille.</p>
          </div>
          <button className="bg-slate-800 border border-slate-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-700 hover:border-cyan-500/50 transition-all">
            Voir Tout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-900/60 hover:shadow-xl hover:shadow-cyan-900/20 transition-all flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 grayscale-[30%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-cyan-500/30 px-3 py-1 rounded-lg text-xs font-bold text-cyan-300">
                  {post.date}
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h4 className="text-lg font-bold text-white mb-3 line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>{post.title}</h4>
                <p className="text-slate-400 mb-6 flex-1 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                <button className="text-cyan-400 font-bold inline-flex items-center gap-2 group text-sm">
                  Lire la Suite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 translate-x-4 translate-y-4" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
              <img
                src="https://i.ibb.co/zhBHpQ2v/a73791c5-4843-4e3d-b3d4-f3d300556b51.png"
                alt="Notre Pharmacien"
                className="w-full h-auto grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl" />
          </div>

          <div>
            <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3">من نحن · À Propos</h2>
            <ZellijeDivider />
            <h3 className="text-4xl font-bold text-white mb-6 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              Au Service de Notre Communauté Depuis 15 Ans
            </h3>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                Fondée en 2011, Labes Pharmacy est un pilier de la santé locale. Notre mission : offrir des soins pharmaceutiques accessibles et de qualité, avec la chaleur humaine propre à notre culture.
              </p>
              <p>
                Nous croyons que la santé va au-delà de l'absence de maladie — c'est un bien-être complet, physique et mental. C'est pourquoi nous allons au-delà de la simple délivrance d'ordonnances.
              </p>
              <p>
                Notre équipe de pharmaciens diplômés vous écoute, comprend vos besoins et vous propose des solutions adaptées à vous et votre famille.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { title: 'Experts Certifiés', sub: 'Pharmaciens diplômés d\'état' },
                { title: 'Ancrage Local', sub: 'Propriété familiale tunisienne' },
                { title: 'Produits Garantis', sub: '100% certifiés et authentiques' },
                { title: 'Conseil Gratuit', sub: 'Tous les jours sans rendez-vous' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-2 rounded-lg mt-1">
                    <CheckCircle2 className="text-cyan-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact ---
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <ArabesquePattern />
      <div className="absolute inset-0 bg-slate-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3">تواصل معنا · Contactez-nous</h2>
            <ZellijeDivider />
            <h3 className="text-4xl font-bold text-white mb-8 mt-4" style={{ fontFamily: 'Georgia, serif' }}>
              Venez Nous Rendre Visite
            </h3>

            <div className="space-y-7 mb-12">
              {[
                { icon: <MapPin className="w-6 h-6" />, title: 'Notre Adresse', lines: ['Rue de la Médina, Tunis', 'Tunisie 1000'] },
                { icon: <Phone className="w-6 h-6" />, title: 'Téléphone', lines: ['+216 71 123 456', '+216 71 987 654'] },
                { icon: <Mail className="w-6 h-6" />, title: 'Email', lines: ['soin@labespharmacy.tn', 'info@labespharmacy.tn'] },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-2xl text-cyan-400">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg mb-1">{c.title}</div>
                    {c.lines.map((l, j) => <p key={j} className="text-slate-400 text-sm">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-56 border border-slate-800 bg-slate-900 relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-600 gap-3">
                <MapPin className="w-10 h-10" />
                <span className="font-medium text-sm">Google Maps · تونس</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
                alt="Map"
                className="w-full h-full object-cover opacity-20 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-10 lg:p-12 rounded-3xl shadow-2xl">
            <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Envoyez un Message</h4>
            <p className="text-slate-500 text-sm mb-8">أرسل لنا رسالة</p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { label: 'Nom complet', placeholder: 'Mohamed Ben Ali', type: 'text' },
                  { label: 'Email', placeholder: 'mohamed@example.com', type: 'email' },
                ].map((f, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Sujet</label>
                <input
                  type="text"
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Votre Message</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre demande..."
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all outline-none resize-none"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/20 hover:from-cyan-400 hover:to-teal-400 transition-all hover:-translate-y-0.5">
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 relative overflow-hidden">
      <ArabesquePattern />
      <div className="absolute inset-0 bg-slate-950/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-2.5 rounded-lg shadow-lg shadow-cyan-500/30">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Labes<span className="text-cyan-400">Pharmacy</span>
                </span>
                <div className="text-[10px] text-cyan-300/50 tracking-widest">صيدلية لاباس</div>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Votre partenaire de confiance en santé et bien-être. Des soins pharmaceutiques professionnels depuis 2011, au cœur de la Tunisie.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Navigation</h5>
            <ul className="space-y-3 text-slate-500">
              {['Accueil', 'Services', 'Horaires', 'Santé & Conseils', 'À Propos'].map((l) => (
                <li key={l}><a href="#" className="hover:text-cyan-400 transition-colors text-sm">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Services</h5>
            <ul className="space-y-3 text-slate-500">
              {['Ordonnances', 'Vaccinations', 'Bilans Santé', 'Cosmétique', 'Bébé & Enfant'].map((l) => (
                <li key={l}><a href="#" className="hover:text-cyan-400 transition-colors text-sm">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Newsletter</h5>
            <p className="text-slate-500 mb-5 text-sm">Recevez nos conseils santé directement dans votre boîte mail.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none text-white placeholder:text-slate-600 text-sm"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-xl hover:from-cyan-400 hover:to-teal-400 transition-all">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <ZellijeDivider />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs">
          <p>© 2026 Labes Pharmacy · صيدلية لاباس · Tous droits réservés.</p>
          <div className="flex gap-8">
            {['Politique de Confidentialité', 'Conditions d\'utilisation', 'Cookies'].map((l) => (
              <a key={l} href="#" className="hover:text-cyan-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />
      <Hero />
      <Services />
      <Hours />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}