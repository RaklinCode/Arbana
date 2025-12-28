import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, ChevronRight, Phone, Mail, MapPin, Menu, X, CheckCircle, Clock, Award, Globe } from 'lucide-react';


const translations = {
  al: {
    nav: {
      services: 'Shërbimet',
      about: 'Rreth Nesh',
      whyUs: 'Pse Ne',
      contact: 'Kontakt',
      quote: 'Merr Ofertë'
    },
    hero: {
      badge: 'Lider në Sigurinë Private në Shqipëri',
      title: 'Arbana Security',
      subtitle: 'Traditë Garanci Siguri',
      desc: 'Për 30 vite, ne kemi mbrojtur asetet më të rëndësishme të Tiranës. Siguri private për ata që kërkojnë seriozitet dhe përsosmëri.',
      contactBtn: 'Na Kontaktoni',
      servicesBtn: 'Shërbimet Tona'
    },
    stats: [
      { number: "30+", label: "Vite Eksperiencë" },
      { number: "200+", label: "Oficerë Sigurie" },
      { number: "24/7", label: "Monitorim Aktiv" },
      { number: "100%", label: "Staf i Licencuar" }
    ],
    services: {
      title: 'Ekspertiza Jonë',
      desc: 'Protokolle sigurie gjithëpërfshirëse të dizajnuara për të eliminuar rrezikun dhe për të garantuar vazhdimësinë e biznesit.',
      items: [
        {
          title: "Grupi i Gatshëm",
          description: "Shërbimi ynë elitar. Monitorim 24/7 i alarmit dhe reagim i menjëhershëm me patrullë të armatosur në rast rreziku.",
        },
        {
          title: "Roje Fizike",
          description: "Oficerë sigurie statikë për rezidenca, zyra dhe objekte industriale. Të trajnuar dhe të verifikuar.",
        },
        {
          title: "Mbrojtje e Afërt (VIP)",
          description: "Shoqërim ekzekutiv me automjete luksoze dhe agjentë të certifikuar për mbrojtje fizike diskrete.",
        },
        {
          title: "Siguria e Eventeve",
          description: "Menaxhim turmash dhe protokolle sigurie për koncerte, dasma VIP dhe evente korporative.",
        }
      ],
      learnMore: 'Mëso më shumë'
    },
    about: {
      title: 'Rreth Nesh',
      desc: "Arbana Security (Arbana Sh.a) është themeluar me një mision të qartë: Të sjellë standardin ndërkombëtar të sigurisë në tregun shqiptar.",
      content: [
        "Ndryshe nga kompanitë tradicionale, ne nuk ofrojmë thjesht 'roje', por zgjidhje të integruara sigurie. Duke kombinuar forcën njerëzore të trajnuar sipas Ligjit 75/2014 me teknologjinë më të fundit të monitorimit, ne garantojmë qetësi absolute për bizneset dhe familjet në Tiranë.",
        "Arbana Sh.a ofron garanci financiare, transparencë dhe stabilitet që pak kompani në treg mund ta ofrojnë."
      ]
    },
    whyUs: {
      title: 'Pse të zgjidhni Arbana Security?',
      desc: 'Në një botë të paparashikueshme, ju duhet një partner që parashikon kërcënimet para se ato të ndodhin. Standardet tona rigoroze të trajnimit dhe qasja teknologjike na bëjnë të dallojmë nga të tjerët.',
      items: [
        { title: 'Verifikim Rigoroz', desc: 'Çdo oficer i nënshtrohet kontrolleve të thella të sfondit dhe vlerësimeve psikologjike.' },
        { title: 'Reagim i Shpejtë ', desc: 'Qendra jonë operative punon 24/7/365 për të nisur patrullën në moment.' },
        { title: 'Strategji e Personalizuar', desc: 'Plani ynë i sigurisë hartohet posaçërisht për të mbuluar çdo nevojë tuajën.' }
      ],
      industryStandards: 'Standardet Tona',
      certifications: [
        { title: 'Ligji', subtitle: 'Konform Ligjit 75/2014' },
        { title: '24/7', subtitle: 'Qendra Operative' },
        { title: '100%', subtitle: 'Staf i Çertifikuar' },
        { title: 'GPS', subtitle: 'Gjurmim i Mjeteve' }
      ]
    },
    contact: {
      title: 'Na Kontaktoni',
      desc: 'Kontaktoni selinë tonë në Tiranë për një vlerësim konfidencial të riskut. Specialistët tanë janë gati t\'ju ndihmojnë.',
      phone: { title: 'Telefon ', subtitle: '' },
      email: { title: 'Email', subtitle: '' },
      address: { title: 'Zyra Qendrore', subtitle: 'Tiranë, Shqipëri' },
      form: {
        title: 'Kërkoni Ofertë Falas',
        name: 'Emri',
        phone: 'Telefon',
        email: 'Email Pune',
        service: 'Shërbimi i Kërkuar',
        message: 'Mesazhi / Detaje',
        submit: 'Dërgo Kërkesën',
        submitting: 'Duke dërguar...',
        privacy: 'Të dhënat tuaja trajtohen me konfidencialitet të plotë.',
        successTitle: 'Mesazhi u Dërgua',
        successDesc: 'Faleminderit. Një specialist sigurie do t\'ju kontaktojë së shpejti.'
      },
      servicesOptions: [
        'Roje Fizike',
        'Siguria e Biznesit',
        'Siguria e Eventeve',
        'Sisteme Kamerash/Alarm',
        'Siguri Personale (VIP)',
        'Tjetër'
      ]
    },
    footer: {
      desc: 'Standardi i ri për sigurinë private në Shqipëri. Ne mbrojmë njerëzit dhe pronën me përkushtim të palëkundur.',
      services: 'Shërbimet',
      company: 'Kompania',
      newsletter: 'Buletini',
      newsletterDesc: 'Të rejat më të fundit nga siguria.',
      go: 'Shko',
      rights: '© 2024 Arbana Sh.a. Të gjitha të drejtat e rezervuara.',
      links: ['Kushtet', 'Privatësia', 'Cookies']
    }
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About Us',
      whyUs: 'Why Us',
      contact: 'Contact',
      quote: 'Get a Quote'
    },
    hero: {
      badge: 'Leading Private Security in Albania',
      title: 'Arbana Security',
      subtitle: 'Tradition Guarantee Security',
      desc: 'For 30 years, we have protected Tirana\'s most important assets. Private security for those seeking seriousness and excellence.',
      contactBtn: 'Contact Us',
      servicesBtn: 'Our Services'
    },
    stats: [
      { number: "30+", label: "Years Experience" },
      { number: "200+", label: "Security Officers" },
      { number: "24/7", label: "Active Monitoring" },
      { number: "100%", label: "Licensed Staff" }
    ],
    services: {
      title: 'Our Expertise',
      desc: 'Comprehensive security protocols designed to mitigate risk and ensure business continuity.',
      items: [
        {
          title: "Rapid Response",
          description: "Our elite service. 24/7 alarm monitoring and immediate armed response in the event of a threat.",
        },
        {
          title: "Manned Guarding",
          description: "Trained and licensed personnel for the security of commercial properties, banks, and private residences.",
        },
        {
          title: "Close Protection (VIP)",
          description: "Discreet and professional protection for VIPs, executives, and high-profile individuals.",
        },
        {
          title: "Event Security",
          description: "Crowd management and access control for concerts, matches, and corporate events.",
        }
      ],
      learnMore: 'Learn more'
    },
    about: {
      title: 'About Us',
      desc: "Arbana Security (Arbana Sh.a) was founded with a clear mission: To bring international security standards to the Albanian market.",
      content: [
        "Unlike traditional companies, we don't just offer 'guards', but integrated security solutions. By combining human force trained according to Law 75/2014 with the latest monitoring technology, we guarantee absolute peace of mind for businesses and families in Tirana.",
        "As a Joint Stock Company (Sh.a), Arbana offers financial guarantees, transparency, and stability that few companies in the market can offer."
      ]
    },
    whyUs: {
      title: 'Why Choose Arbana Sh.a?',
      desc: 'In an unpredictable world, you need a partner who anticipates threats before they happen. Our rigorous training standards and technological approach set us apart.',
      items: [
        { title: 'Rigorous Vetting', desc: 'Every officer undergoes deep background checks and psychological assessments.' },
        { title: 'Rapid Response', desc: 'Our operations center works 24/7/365 to deploy patrols instantly.' },
        { title: 'Tailored Strategy', desc: 'We don\'t offer generic solutions. We assess your vulnerabilities.' }
      ],
      industryStandards: 'Our Standards',
      certifications: [
        { title: 'Law', subtitle: 'Compliant with Law 75/2014' },
        { title: '24/7', subtitle: 'Operations Center' },
        { title: '100%', subtitle: 'Certified Staff' },
        { title: 'GPS', subtitle: 'Vehicle Tracking' }
      ]
    },
    contact: {
      title: 'Contact Us',
      desc: 'Contact our headquarters in Tirana for a confidential risk assessment. Our specialists are ready to help you.',
      phone: { title: 'Phone 24/7', subtitle: 'Available for emergencies' },
      email: { title: 'Email', subtitle: '' },
      address: { title: 'Headquarters', subtitle: 'Tirana, Albania' },
      form: {
        title: 'Request Free Quote',
        name: 'Name',
        phone: 'Phone',
        email: 'Work Email',
        service: 'Requested Service',
        message: 'Message / Details',
        submit: 'Send Request',
        submitting: 'Sending...',
        privacy: 'Your data is treated with strict confidentiality.',
        successTitle: 'Message Sent',
        successDesc: 'Thank you. A security specialist will contact you shortly.'
      },
      servicesOptions: [
        'Physical Guarding',
        'Business Security',
        'Event Security',
        'CCTV/Alarm Systems',
        'Close Protection (VIP)',
        'Other'
      ]
    },
    footer: {
      desc: 'The new standard for private security in Albania. We protect people and property with unwavering dedication.',
      services: 'Services',
      company: 'Company',
      newsletter: 'Newsletter',
      newsletterDesc: 'Latest security updates.',
      go: 'Go',
      rights: '© 2024 Arbana Sh.a. All rights reserved.',
      links: ['Terms', 'Privacy', 'Cookies']
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('al'); // 'al' or 'en'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 1500);
  };

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const servicesIcons = [
    <Eye className="w-8 h-8 text-gold" />,
    <Users className="w-8 h-8 text-gold" />,
    <Shield className="w-8 h-8 text-gold" />,
    <Lock className="w-8 h-8 text-gold" />
  ];

  return (
    <div className="font-sans text-deep-green bg-cream min-h-screen selection:bg-gold selection:text-deep-green">

      {/* Navigation */}
      <nav className={`absolute w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deep-green/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="w-full pr-6 pl-2 flex justify-between items-center">
          <div className="flex items-center gap-0">
            <img src="/arbana_logo.png" alt="Arbana Security" className="h-20 md:h-28 w-auto object-contain margin-right-0 padding-right-0 margin-left-0 padding-left-0" />
            <span className="text-xl md:text-2xl font-bold text-cream tracking-tight margin-left-0 padding-left-0">ARBANA SECURITY</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-cream/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wider">{t.nav.services}</a>
            <a href="#about" className="text-cream/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wider">{t.nav.about}</a>
            <a href="#why-us" className="text-cream/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wider">{t.nav.whyUs}</a>
            <a href="#contact" className="text-cream/80 hover:text-gold font-medium transition-colors text-sm uppercase tracking-wider">{t.nav.contact}</a>

            <div className="flex items-center text-cream/60 text-sm gap-2 border-l border-cream/20 pl-4">
              <span onClick={() => setLang('al')} className={`cursor-pointer hover:text-gold ${lang === 'al' ? 'text-gold font-bold' : ''}`}>AL</span>
              <span onClick={() => setLang('en')} className={`cursor-pointer hover:text-gold ${lang === 'en' ? 'text-gold font-bold' : ''}`}>EN</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-cream">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-deep-green border-t border-deep-green p-6 flex flex-col gap-4 shadow-xl">
            <a href="#services" onClick={toggleMenu} className="text-cream/80 hover:text-gold text-lg font-medium">{t.nav.services}</a>
            <a href="#about" onClick={toggleMenu} className="text-cream/80 hover:text-gold text-lg font-medium">{t.nav.about}</a>
            <a href="#why-us" onClick={toggleMenu} className="text-cream/80 hover:text-gold text-lg font-medium">{t.nav.whyUs}</a>
            <a href="#contact" onClick={toggleMenu} className="text-cream/80 hover:text-gold text-lg font-medium">{t.nav.contact}</a>
            <div className="flex gap-4 text-cream/80 text-lg font-medium">
              <span onClick={() => { setLang('al'); toggleMenu(); }} className={`cursor-pointer ${lang === 'al' ? 'text-gold font-bold' : ''}`}>AL</span>
              <span onClick={() => { setLang('en'); toggleMenu(); }} className={`cursor-pointer ${lang === 'en' ? 'text-gold font-bold' : ''}`}>EN</span>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - OLD MONEY THEME */}
      <header className="relative h-screen flex items-center justify-center bg-deep-green overflow-hidden">

        {/* Abstract Background - Subtle Gold Accents */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(198,168,124,0.1),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">



            {/* The Headline - Using a Serif font for "Old Money" feel */}
            <h1 className="text-4xl md:text-7xl font-bold text-cream mb-8 leading-tight tracking-tight font-serif">
              {t.hero.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#E5D5B5]">{t.hero.subtitle}</span>
            </h1>

            <p className="text-xl text-cream/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button - Gold */}
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-[#B09265] text-deep-green rounded-sm font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                {t.hero.contactBtn}
              </a>

              {/* Secondary Button - Border Only */}
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cream/20 hover:border-gold text-cream rounded-sm font-bold text-lg transition-all hover:bg-cream/5">
                {t.hero.servicesBtn}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <section className="bg-hunter py-12 relative z-20 -mt-10 mx-4 md:mx-10 rounded-lg shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-cream">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</span>
                <span className="text-gold font-medium uppercase text-sm tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-deep-green/80 mt-4 max-w-2xl mx-auto">{t.services.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-cream group hover:-translate-y-2">
                <div className="bg-cream w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-hunter transition-colors duration-300">
                  <div className="group-hover:text-gold transition-colors duration-300">
                    {React.cloneElement(servicesIcons[index], { className: "w-8 h-8 group-hover:text-gold text-hunter" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-deep-green mb-3">{service.title}</h3>
                <p className="text-deep-green/70 leading-relaxed mb-4">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-gold font-semibold hover:text-hunter">
                  {t.services.learnMore} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/20 rounded-xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
                  alt="Security Team"
                  className="relative rounded-xl shadow-2xl w-full object-cover h-64 md:h-[400px]"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">{t.about.title}</h2>
              <p className="text-xl text-gold font-medium mb-6">
                {t.about.desc}
              </p>
              <div className="space-y-4 text-deep-green/80 leading-relaxed">
                {t.about.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / About */}
      <section id="why-us" className="py-16 md:py-24 bg-deep-green text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.whyUs.title}</h2>
              <p className="text-cream/70 mb-8 text-lg leading-relaxed">
                {t.whyUs.desc}
              </p>

              <div className="space-y-6">
                {t.whyUs.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-1">{item.title}</h4>
                      <p className="text-cream/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-hunter p-8 rounded-lg border border-gold/20 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-gold" />
                {t.whyUs.industryStandards}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {t.whyUs.certifications.map((cert, i) => (
                  <div key={i} className="bg-deep-green p-4 rounded border border-gold/10 text-center">
                    <div className="text-3xl font-bold text-gold mb-1">{cert.title}</div>
                    <div className="text-xs text-cream/60">{cert.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">{t.contact.title}</h2>
              <div className="flex items-center justify-center gap-2 text-gold font-medium">
                <Mail size={20} />
                <a href="mailto:arbana.sha@outlook.com" className="hover:underline text-lg">arbana.sha@outlook.com</a>
              </div>
            </div>

            <div className="bg-cream p-8 md:p-12 rounded-xl shadow-lg border border-gold/20">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-green mb-3">{t.contact.form.successTitle}</h3>
                  <p className="text-deep-green/70">{t.contact.form.successDesc}</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-gold font-semibold hover:underline">
                    {lang === 'al' ? 'Dërgo një mesazh tjetër' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-deep-green mb-2">{t.contact.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-deep-green/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-deep-green mb-2">{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-deep-green/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-deep-green mb-2">{t.contact.form.email}</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-deep-green/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-deep-green mb-2">{t.contact.form.service}</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-deep-green/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white appearance-none"
                      >
                        <option value="">{t.contact.form.service}</option>
                        {t.contact.servicesOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-deep-green mb-2">{t.contact.form.message}</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-deep-green/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full md:w-auto px-8 py-4 bg-gold hover:bg-[#B09265] text-deep-green font-bold text-lg rounded-sm transition-all shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mx-auto block"
                  >
                    {formStatus === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                  </button>
                  <p className="text-center text-xs text-deep-green/40 mt-4">
                    {t.contact.form.privacy}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-green text-cream/80 py-16 border-t border-cream/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-gold" />
                <span className="text-xl font-bold text-cream">ARBANA<span className="text-gold">SH.A</span></span>
              </div>
              <p className="text-cream/60 leading-relaxed mb-6">
                {t.footer.desc}
              </p>

            </div>

            <div>
              <h4 className="text-cream font-bold mb-6 text-lg">{t.footer.services}</h4>
              <ul className="space-y-4">
                {t.services.items.map((item, i) => (
                  <li key={i}><a href="#" className="hover:text-gold transition-colors">{item.title}</a></li>
                ))}
              </ul>
            </div>




          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
