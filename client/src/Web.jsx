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

const WebDesignDevelopment = () => {
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
      category: "Web Design",
      items: [
        "UI/UX Design",
        "Responsive Design",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      category: "Web Development",
      items: [
        "React.js Development",
        "Node.js Backend",
        "E-commerce Solutions",
        "API Integration",
      ],
    },
    {
      category: "Performance",
      items: [
        "Page Speed Optimization",
        "SEO-Friendly Code",
        "Security Implementation",
        "Scalable Architecture",
      ],
    },
  ];

  const technologies = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "WordPress" },
    { name: "Shopify" },
  ];

  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Dark Hero & Process Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e36a2e]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-24 fade-in">
            <p className="text-[#e36a2e] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Web Design & Development
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Digital experiences <br />
              <span className="bg-gradient-to-r from-orange-400 to-[#e36a2e] bg-clip-text text-transparent">
                that convert.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Create stunning, high-performing websites that deliver exceptional
              user experiences, drive business growth, and set you apart.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Process Card */}
            <div
              data-aos="fade-right"
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#e36a2e]/5 to-transparent pointer-events-none"></div>

              <div className="rounded-2xl overflow-hidden mb-8 relative border border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="Web Development Process"
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Our Development Process
              </h3>

              <div className="space-y-4 flex-grow">
                {[
                  {
                    title: "Discovery & Planning",
                    desc: "Understanding requirements and creating a roadmap.",
                  },
                  {
                    title: "Design & Prototyping",
                    desc: "Creating visual designs and interactive prototypes.",
                  },
                  {
                    title: "Development & Launch",
                    desc: "Building, testing, and optimizing the website.",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center bg-zinc-950/50 rounded-2xl p-4 border border-zinc-800 transition-colors hover:border-zinc-700"
                  >
                    <div className="w-10 h-10 shrink-0 bg-[#e36a2e]/10 border border-[#e36a2e]/20 text-[#e36a2e] font-bold text-lg rounded-xl flex items-center justify-center mr-4">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="text-zinc-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Solutions Card */}
            <div
              data-aos="fade-left"
              className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-zinc-800 shadow-2xl relative flex flex-col"
            >
              <div className="w-16 h-16 bg-[#e36a2e]/10 border border-[#e36a2e]/20 rounded-2xl flex items-center justify-center mb-8">
                <Server className="w-8 h-8 text-[#e36a2e]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Modern Web Solutions
              </h2>
              <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
                We build websites that not only look beautiful but perform
                exceptionally well across all devices, load quickly, and convert
                visitors into customers.
              </p>

              <div className="mb-10">
                <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-5">
                  Our Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-[#e36a2e] hover:text-white transition-colors cursor-default"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="text-center p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <div className="text-3xl font-extrabold text-[#e36a2e] mb-1">
                    99.9%
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Uptime
                  </div>
                </div>
                <div className="text-center p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <div className="text-3xl font-extrabold text-[#e36a2e] mb-1">
                    {"<"} 2s
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Load Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Services Grid Section */}
      <section className="py-20 lg:py-32 relative bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6"
              data-aos="fade-up"
            >
              Comprehensive <span className="text-[#e36a2e]">Expertise.</span>
            </h2>
            <p
              className="text-gray-500 text-lg sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              From the first wireframe to the final deployment, our full-stack
              capabilities ensure your project is built to the highest
              standards.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                  {service.category}
                </h3>
                <ul className="space-y-5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center group/item">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mr-4 transition-colors group-hover/item:bg-[#e36a2e]/10">
                        <CheckCircle2 className="w-4 h-4 text-[#e36a2e]" />
                      </div>
                      <span className="text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Contact Split Section (Reused from DigitalMarketing) */}
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
                      alt="Team meeting"
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
                    Ready to build?
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2">
                    Fill out the form below and our web experts will be in
                    touch.
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
                    "Website Design",
                    "ECommerce Websites",
                    "Service Website",
                    "Web Development",
                    "Managed Hosting",
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

export default WebDesignDevelopment;
