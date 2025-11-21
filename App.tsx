import React, { useEffect, useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Factory, 
  Leaf, 
  Package, 
  Clock, 
  ShieldCheck, 
  TrendingUp,
  Menu,
  X,
  Building2,
  Award,
  Users,
  Instagram,
  Facebook,
  AlertCircle,
  CheckCircle,
  ShoppingCart,
  Scissors,
  Gift,
  Handshake
} from 'lucide-react';
import { ServiceItem, ContactOption, InquiryType } from './types';

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      const yOffset = -96; // Offset for fixed header (6rem, same as scroll-mt-24)
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      if (href === '#contact') {
        setTimeout(() => {
          const nameInput = document.querySelector<HTMLInputElement>('input[name="name"]');
          nameInput?.focus({ preventScroll: true });
        }, 400);
      }
    }
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight leading-none">LEGEND</span>
              <span className="text-xs font-semibold text-brand-600 tracking-widest uppercase">Industries</span>
            </div>
          </div>

          {/* Desktop Nav - Switched to lg:flex to support tablets better */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-5 py-2 bg-brand-600 text-white text-sm font-semibold rounded-full hover:bg-brand-700 transition-transform hover:scale-105 shadow-lg shadow-brand-500/30"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full text-center py-3 px-4 bg-brand-600 text-white rounded-lg font-semibold mt-2"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const contactOptions: ContactOption[] = [
    { 
      id: 'whatsapp', 
      label: 'WhatsApp Now', 
      subLabel: 'Instant Reply',
      icon: MessageCircle, 
      action: () => window.open('https://wa.me/919052088880?text=Hi,%20I%20am%20interested%20in%20bulk%20manufacturing.', '_blank'),
      colorClass: 'text-green-600',
      bgClass: 'bg-green-50 hover:bg-green-100 border-green-200'
    },
    { 
      id: 'call', 
      label: 'Call Sales', 
      subLabel: '+91 90520 88880',
      icon: Phone, 
      action: () => window.location.href = 'tel:+919052088880',
      colorClass: 'text-blue-600',
      bgClass: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
    },
    { 
      id: 'email', 
      label: 'Email Quote', 
      subLabel: 'Response < 2hrs',
      icon: Mail, 
      action: () => window.location.href = 'mailto:legendindustries92@gmail.com',
      colorClass: 'text-purple-600',
      bgClass: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
    },
    { 
      id: 'visit', 
      label: 'Visit Office', 
      subLabel: 'Hyderabad',
      icon: MapPin, 
      action: () => window.open('https://maps.app.goo.gl/FJZM9SUr6MwGmV2DA', '_blank'),
      colorClass: 'text-brand-600',
      bgClass: 'bg-brand-50 hover:bg-brand-100 border-brand-200'
    },
  ];

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-brand-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              One Source<br /> <span className="text-brand-600">Infinite Possibilities</span>
            </h1>
            
            <div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Elevate connections with thoughtfully crafted corporate and retail gifts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
                Unleash the potential of your employees, customers, and partners as brand advocates with our end-to-end gifting and manufacturing solutions—from concept to delivery.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {contactOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={opt.action}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${opt.bgClass}`}
                  aria-label={opt.label}
                >
                  <opt.icon className={`w-6 h-6 mb-2 ${opt.colorClass}`} />
                  <span className="font-bold text-gray-900 text-sm">{opt.label}</span>
                  <span className="text-xs text-gray-500 mt-1">{opt.subLabel}</span>
                </button>
              ))}
            </div>
            
            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Typical response time: <strong>Under 30 minutes</strong> during business hours.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  const features = [
    { id: "01", title: "End-to-End Manufacturing", desc: "In-house production from design to delivery—full control over quality & timelines.", icon: Factory },
    { id: "02", title: "Authenticity Assured", desc: "We guarantee genuine materials and ethical sourcing, with transparent processes you can trust.", icon: ShieldCheck },
    { id: "03", title: "Cost-Effective at Scale", desc: "Competitive, direct-from-factory pricing for bulk and wholesale orders.", icon: TrendingUp },
    { id: "04", title: "Time & Cost Savings", desc: "A single-source solution for branding, production, and fulfillment.", icon: Clock },
    { id: "05", title: "Pan-India Reach", desc: "Reliable logistics and delivery partners across India for B2B and retail.", icon: Package },
    { id: "06", title: "Expert Consultation", desc: "Collaborate with our specialists to create the perfect gifting and manufacturing strategy.", icon: Handshake },
  ];

  return (
    <section id="why-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <p className="text-lg text-gray-600">Our integrated approach ensures quality control, fast turnaround, and brand-aligned execution—whether you're ordering 10 units or 10,000.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.id} className="bg-slate-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-brand-600">{f.id}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: ServiceItem[] = [
    { id: '1', title: "Custom Manufacturing", description: "Your design, our expertise. We build custom bags, accessories, and products.", icon: Factory },
    { id: '2', title: "Corporate Gifting", description: "Tailored gift programs that reflect your company's values and vision.", icon: Building2 },
    { id: '3', title: "Private & White Label", description: "Launch your brand with our manufacturing expertise and your label.", icon: ShieldCheck },
    { id: '4', title: "Promotional Branding", description: "Branded merchandise that amplifies your corporate identity.", icon: Award },
    { id: '5', title: "Sustainable Gifts", description: "Recycled, reusable, and responsibly made gifting options.", icon: Leaf },
    { id: '6', seasonal: true, title: "Seasonal & Festival Kits", description: "Curated Diwali, New Year, and festive hampers for employees and clients.", icon: Gift },
    { id: '7', title: "Wholesale & Bulk", description: "Scalable solutions for events, incentives, and large organizations.", icon: ShoppingCart },
    { id: '8', title: "Personalization Studio", description: "Add names, logos, or messages with our engraving & embroidery services.", icon: Scissors },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600">We serve the best gifting and manufacturing solutions. From concept to creation, we are your single-source partner.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-200 hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="bg-brand-50 text-brand-600 rounded-xl w-14 h-14 flex items-center justify-center mb-5">
                <service.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex-grow">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  const [isLocating, setIsLocating] = useState(false);
  const [locationDetected, setLocationDetected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: '',
    location: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address.';
        }
        break;
      case 'phone':
        if (!value) {
          error = 'Phone number is required.';
        } else if (!/^\+?[\d\s-]{10,}$/.test(value)) {
          error = 'Please enter a valid phone number (at least 10 digits).';
        }
        break;
      case 'name':
        if (!value.trim()) error = 'Full name is required.';
        break;
      case 'type':
        if (!value) error = 'Please select an inquiry type.';
        break;
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleLocate = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {
        setTimeout(() => {
          setFormData(prev => ({ ...prev, location: 'Hyderabad, Telangana' }));
          setIsLocating(false);
          setLocationDetected(true);
        }, 1000);
      }, (error) => {
        alert('Could not detect location. Please enter manually.');
        setIsLocating(false);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        phone: true,
        email: true,
        type: true,
        message: true,
        location: true
      });
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
        setFormStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormStatus('idle');
    setFormData({ name: '', phone: '', email: '', type: '', message: '', location: '' });
    setTouched({});
    setErrors({});
    setLocationDetected(false);
  };

  const getInputClass = (name: string) => {
    const baseClass = "w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 text-gray-700";
    if (touched[name] && errors[name]) {
      return `${baseClass} border-red-300 focus:ring-2 focus:ring-red-100 bg-red-50/50`;
    }
    if (touched[name] && !errors[name] && formData[name as keyof typeof formData]) {
      return `${baseClass} border-green-300 focus:ring-2 focus:ring-green-100 bg-white`;
    }
    return `${baseClass} border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-50`;
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-brand-700 p-10 lg:p-12 text-white flex flex-col relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Let's Talk Business</h3>
              <p className="text-brand-100 mb-12 leading-relaxed">
                Ready to scale your merchandise? Get a custom quote for your manufacturing or gifting needs.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-brand-200 font-medium mb-1">Sales Hotline</div>
                    <a href="tel:+919052088880" className="font-bold text-lg hover:underline">+91 90520 88880</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-brand-200 font-medium mb-1">Email Us</div>
                    <a href="mailto:legendindustries92@gmail.com" className="font-bold text-lg break-words block hover:underline">legendindustries92@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-brand-200 font-medium mb-1">Main Office</div>
                    <a href="https://maps.app.goo.gl/fzz8qjd8bKqKwm6SA" target="_blank" rel="noreferrer" className="font-bold text-lg hover:underline">
                      Office & Showroom<br/>Vijay Nagar Colony, Hyderabad
                    </a>
                  </div>
                </div>
              </div>
             </div>
          </div>

          {/* Main Form Area */}
          <div className="lg:w-2/3 p-8 lg:p-12 bg-white flex flex-col justify-center min-h-[600px]">
            {formStatus === 'success' ? (
              <div className="text-center animate-fade-in">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Your inquiry has been sent. We've sent a confirmation to your WhatsApp and will be in touch shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-transform hover:scale-105 shadow-lg shadow-brand-500/30"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="name"
                        required
                        className={getInputClass('name')}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.name && !errors.name && formData.name && <CheckCircle className="absolute right-3 top-3.5 text-green-500 w-5 h-5" />}
                      {touched.name && errors.name && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5" />}
                    </div>
                    {touched.name && errors.name && <p className="text-xs text-red-500 ml-1 font-medium">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 ml-1">Phone (WhatsApp) <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        className={getInputClass('phone')}
                        placeholder="+91 90000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phone && !errors.phone && formData.phone && <CheckCircle className="absolute right-3 top-3.5 text-green-500 w-5 h-5" />}
                      {touched.phone && errors.phone && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5" />}
                    </div>
                    {touched.phone && errors.phone && <p className="text-xs text-red-500 ml-1 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email"
                        className={getInputClass('email')}
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && !errors.email && formData.email && <CheckCircle className="absolute right-3 top-3.5 text-green-500 w-5 h-5" />}
                      {touched.email && errors.email && <AlertCircle className="absolute right-3 top-3.5 text-red-500 w-5 h-5" />}
                    </div>
                    {touched.email && errors.email && <p className="text-xs text-red-500 ml-1 font-medium">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700 ml-1">Location</label>
                    <div className="relative">
                        <input 
                          type="text" 
                          name="location"
                          className={getInputClass('location')}
                          placeholder="City"
                          value={formData.location}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <button 
                          type="button"
                          onClick={handleLocate}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-brand-600 transition-colors rounded-full hover:bg-gray-100"
                          title="Auto-detect location"
                        >
                          {isLocating ? <div className="animate-spin w-5 h-5 border-2 border-brand-600 border-t-transparent rounded-full"/> : <MapPin size={20} className={locationDetected ? 'text-green-500' : ''} />}
                        </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 ml-1">Inquiry Type <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select 
                      name="type"
                      className={getInputClass('type')}
                      value={formData.type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Interest</option>
                      {Object.values(InquiryType).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  {touched.type && errors.type && <p className="text-xs text-red-500 ml-1 font-medium">{errors.type}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 ml-1">Project Details</label>
                  <textarea 
                    name="message"
                    rows={3}
                    className={getInputClass('message')}
                    placeholder="Describe quantity, timeline, and product requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <input type="checkbox" id="whatsapp-opt" defaultChecked className="w-5 h-5 text-brand-600 rounded focus:ring-brand-500 border-gray-300" />
                  <label htmlFor="whatsapp-opt" className="text-sm text-gray-700 cursor-pointer select-none">
                    Receive catalog and price list via <strong>WhatsApp</strong>.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-2 group transform active:scale-[0.99] ${formStatus === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 hover:shadow-brand-500/40'}`}
                >
                  {formStatus === 'submitting' ? 'Sending...' : (
                    <>
                      Get Custom Quote
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const locations = [
    {
      id: 'retail-miyapur',
      tag: 'Retail Outlet',
      tagClasses: 'text-blue-600 bg-blue-100',
      Icon: ShoppingCart,
      iconClasses: 'bg-blue-50 text-blue-600',
      title: 'Legend Luggage Shoppee',
      description: 'Our Miyapur outlet is perfect for retail purchases, hands-on product experience, and browsing our latest collections.',
      mapLink: 'https://maps.app.goo.gl/bqW3YBqdN7TdaoDQ7'
    },
    {
      id: 'office-retail',
      tag: 'Office & Retail',
      tagClasses: 'text-purple-600 bg-purple-100',
      Icon: Building2,
      iconClasses: 'bg-purple-50 text-purple-600',
      title: 'Office & Showroom',
      description: 'Visit our main office for corporate gifting, wholesale inquiries, and to view our exclusive B2B catalog.',
      mapLink: 'https://maps.app.goo.gl/5fFWzznmyk66JfmFA'
    },
    {
      id: 'retail-shaikpet',
      tag: 'Retail Outlet',
      tagClasses: 'text-blue-600 bg-blue-100',
      Icon: ShoppingCart,
      iconClasses: 'bg-blue-50 text-blue-600',
      title: 'Legend Leather & Luggage',
      description: 'Explore our premium collection of leather goods, luggage, and travel essentials at our OU Colony, Shaikpet store.',
      mapLink: 'https://maps.app.goo.gl/aNtWN9nQiqHpacor8'
    },
    {
      id: 'factory',
      tag: 'Manufacturing Unit',
      tagClasses: 'text-brand-600 bg-brand-100',
      Icon: Factory,
      iconClasses: 'bg-brand-50 text-brand-600',
      title: 'Manufacturing Facility',
      description: 'Our dedicated production unit. Schedule a visit for bulk order discussions, material sampling, and factory tours.',
      mapLink: 'https://maps.app.goo.gl/fzz8qjd8bKqKwm6SA'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
          <p className="text-lg text-gray-600 mt-4">Experience the quality firsthand at our Hyderabad locations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {locations.map((loc) => (
             <div key={loc.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                   <div className={`p-4 rounded-xl ${loc.iconClasses}`}>
                     <loc.Icon size={28} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${loc.tagClasses}`}>
                    {loc.tag}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{loc.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {loc.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a 
                      href={loc.mapLink}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-50 text-gray-900 font-semibold rounded-xl hover:bg-brand-600 hover:text-white transition-all group"
                  >
                      Get Directions <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      const yOffset = -96; // Offset for fixed header (6rem, same as scroll-mt-24)
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      if (href === '#contact') {
        setTimeout(() => {
          const nameInput = document.querySelector<HTMLInputElement>('input[name="name"]');
          nameInput?.focus({ preventScroll: true });
        }, 400);
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">LEGEND</span>
              <span className="text-xs font-semibold text-brand-500 tracking-[0.2em] uppercase">Industries</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner for corporate gifting and custom manufacturing solutions in Hyderabad.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/legend_industries_92" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/legendindustries" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="mailto:legendindustries92@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110" aria-label="Email">
                 <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Services</a></li>
              <li><a href="#why-us" onClick={(e) => handleLinkClick(e, '#why-us')} className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Why Us</a></li>
              <li><a href="#locations" onClick={(e) => handleLinkClick(e, '#locations')} className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Locations</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-brand-500 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</a></li>
            </ul>
          </div>

          {/* Contact Column - Fixed layout issues */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-gray-800 rounded-lg text-brand-500 shrink-0 group-hover:bg-brand-900 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Call Us</div>
                   <a href="tel:+919052088880" className="text-white hover:text-brand-500 transition-colors font-medium text-base">+91 90520 88880</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-gray-800 rounded-lg text-brand-500 shrink-0 group-hover:bg-brand-900 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Email Us</div>
                   <a href="mailto:legendindustries92@gmail.com" className="text-white hover:text-brand-500 transition-colors font-medium text-base break-words block">legendindustries92@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-gray-800 rounded-lg text-brand-500 shrink-0 group-hover:bg-brand-900 transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                   <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Visit Us</div>
                   <a 
                    href="https://maps.app.goo.gl/fzz8qjd8bKqKwm6SA" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-white hover:text-brand-500 transition-colors font-medium text-base block"
                  >
                    Office & Showroom, Vijay Nagar Colony, Hyderabad
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>&copy; {new Date().getFullYear()} Legend Industries. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919052088880?text=Hi,%20I%20need%20assistance."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-green-500/40 focus:outline-none focus:ring-4 focus:ring-green-300 transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* Mobile & Tablet: Just Icon */}
      <div className="p-4 lg:hidden">
        <MessageCircle size={28} fill="currentColor" />
      </div>

      {/* Desktop: Expanded Pill */}
      <div className="hidden lg:flex items-center px-5 py-3 gap-2">
        <MessageCircle size={24} fill="currentColor" />
        <span className="font-bold text-base">Chat Now</span>
      </div>
    </a>
  );
};

// --- Main Layout ---

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navigation />
      <main className="isolate">
        <Hero />
        <ValueProp />
        <Services />
        <Locations />
        <InquiryForm />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;
