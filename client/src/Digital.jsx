import React, { useEffect, useState } from "react";
import image6 from "../images/logo.jpg";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  ArrowRightCircle,
  Phone,
  Mail,
  Globe,
  Bot,
  Target,
  Server,
  UserPlus,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const DigitalMarketing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    callback: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const serviceItems = [
    { name: "Website Design", path: "/webdesign" },
    { name: "ECommerce Websites", path: "/ecommerce" },
    { name: "Service Website", path: "/service-site" },
    { name: "Branding & Logo Design", path: "/branding&logodesign" },
    { name: "Digital Marketing", path: "/digitalmarketing" },
    { name: "Search Engine Optimisation", path: "/seo" },
    { name: "Google Ads Management", path: "/googleads" },
    { name: "Meta Ads Management", path: "/metaads" },
    { name: "Conversion Rate Optimization", path: "/conversionrate" },
    { name: "Managed Hosting", path: "/hosting" },
    { name: "Go High Level CRM", path: "/gohigh" },
    { name: "Ai Agents/Automation", path: "/ai" },
    { name: "White Label Marketing", path: "/whitelabel" },
    { name: "Lead Generation", path: "/lead" },
  ];

  const services = [
    {
      title: "SEO Optimization",
      description:
        "Rank higher on search engines and attract high-converting organic traffic to your business.",
      icon: <Globe className="w-8 h-8 text-[#e36a2e]" />,
      metrics: [
        "+250% Organic Traffic",
        "Page 1 Rankings",
        "Local & Technical SEO",
      ],
    },
    {
      title: "Social Media Strategy",
      description:
        "Engage your audience and build brand loyalty across all major social platforms.",
      icon: <Layers className="w-8 h-8 text-[#e36a2e]" />,
      metrics: [
        "Content Strategy",
        "Community Growth",
        "Targeted Paid Social Ads",
      ],
    },
    {
      title: "PPC Advertising",
      description:
        "Get immediate, measurable results with highly targeted and optimized paid campaigns.",
      icon: <Target className="w-8 h-8 text-[#e36a2e]" />,
      metrics: [
        "Google & Meta Ads",
        "Advanced Retargeting",
        "Conversion Tracking",
      ],
    },
  ];

  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-aos="fade-right">
              <p className="text-[#e36a2e] text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Digital Marketing
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Data-driven <br />
                <span className="text-zinc-500">marketing that</span> <br />
                <span className="bg-gradient-to-r from-orange-400 to-[#e36a2e] bg-clip-text text-transparent">
                  drives revenue.
                </span>
              </h1>
              <p className="text-zinc-400 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
                Drive targeted traffic, generate qualified leads, and maximize
                your ROI with our performance-obsessed marketing strategies.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="group px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-white bg-[#e36a2e] hover:bg-[#cf5f28] transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5"
              >
                Start Your Campaign{" "}
                <ChevronRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Digital Marketing Analytics"
                  className="w-full h-80 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Bento Metrics */}
              <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 z-20 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700 rounded-2xl p-6 shadow-2xl flex gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-[#e36a2e] mb-1">
                    92%
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                    Client ROI <br /> Increase
                  </div>
                </div>
                <div className="w-px bg-zinc-700"></div>
                <div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    45%
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                    Avg Cost <br /> Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
              data-aos="fade-up"
            >
              Our Marketing <span className="text-[#e36a2e]">Methodology.</span>
            </h2>
            <p
              className="text-gray-500 text-lg sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We combine cutting-edge technology with proven marketing
              strategies to deliver measurable, sustainable results across all
              channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-[#e36a2e]/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#e36a2e]" />
                      <span className="text-gray-700 font-medium text-sm">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Contact Split Section */}
      <section className="relative py-20 lg:py-32 bg-zinc-950 overflow-hidden border-t border-zinc-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column: Latest News */}
            <div data-aos="fade-right" className="flex flex-col h-full">
              <div className="mb-10 sm:mb-14">
                <p className="text-[#e36a2e] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  Insights
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Latest News & <br /> Updates.
                </h2>
                <p className="text-zinc-400 text-lg">
                  Stay up to date with the latest strategies, case studies, and
                  insights from our team.
                </p>
              </div>

              <div className="space-y-6 flex-grow flex flex-col justify-center">
                {/* Article Card 1 */}
                <div className="group flex flex-col sm:flex-row gap-5 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 sm:p-5 hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                  <div className="h-48 sm:h-40 w-full sm:w-40 shrink-0 rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                      alt="PPC"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2 pr-2">
                    <p className="text-[#e36a2e] text-xs font-bold tracking-wider uppercase mb-2">
                      January 3, 2026
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-[#e36a2e]">
                      How We Deliver High-Performance PPC Management in Brisbane
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                      PPC management is becoming the foundation stone for the
                      success of businesses in Brisbane. Discover how
                      instantaneous reach can transform your ROI.
                    </p>
                  </div>
                </div>

                {/* Article Card 2 */}
                <div className="group flex flex-col sm:flex-row gap-5 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 sm:p-5 hover:border-zinc-700 transition-all duration-500 cursor-pointer">
                  <div className="h-48 sm:h-40 w-full sm:w-40 shrink-0 rounded-2xl overflow-hidden relative">
                    <img
                      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80"
                      alt="Web Design"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center py-2 pr-2">
                    <p className="text-[#e36a2e] text-xs font-bold tracking-wider uppercase mb-2">
                      December 26, 2025
                    </p>
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-[#e36a2e]">
                      Why Your Business Needs a Professional Website Design
                      Agency
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                      A website design agency plays a crucial role in today's
                      market, where your website is often the very first
                      impression potential clients get.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div data-aos="fade-left">
              <form
                onSubmit={handleSubmit}
                className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
              >
                <div className="mb-8 pb-7 border-b border-zinc-800/80">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Get Your Free Marketing Audit
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2">
                    Fill out the form below and our team will be in touch
                    shortly.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none focus:border-[#e36a2e] focus:ring-1 focus:ring-[#e36a2e] placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none focus:border-[#e36a2e] focus:ring-1 focus:ring-[#e36a2e] placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none focus:border-[#e36a2e] focus:ring-1 focus:ring-[#e36a2e] placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
                    />
                    <input
                      type="text"
                      placeholder="Callback Time"
                      name="callback"
                      value={formData.callback}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-zinc-950/50 text-white border border-zinc-800 focus:outline-none focus:border-[#e36a2e] focus:ring-1 focus:ring-[#e36a2e] placeholder:text-zinc-600 text-sm sm:text-base transition-all duration-300"
                    />
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-bold tracking-[0.15em] text-zinc-500 uppercase mb-4">
                  How can we help?
                </p>
                <div className="flex flex-wrap gap-2.5 mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {[
                    "Digital Marketing",
                    "SEO Optimization",
                    "PPC Campaigns",
                    "Social Media",
                    "Web Design",
                    "Conversion Optimization",
                  ].map((option, i) => (
                    <label
                      key={i}
                      className={`cursor-pointer px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${formData.service === option ? "bg-[#e36a2e] border-[#e36a2e] text-white shadow-[0_4px_12px_rgba(227,106,46,0.3)]" : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={option}
                        checked={formData.service === option}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {option}
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="group w-full bg-[#e36a2e] hover:bg-[#cf5f28] text-white font-semibold text-sm sm:text-base tracking-wide uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(227,106,46,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  Submit Request{" "}
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
