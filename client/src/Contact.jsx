import React, { useEffect, useState } from "react";
import image10 from "../images/logo.jpg";
import image6 from "../images/logo.jpg";
import { toast, ToastContainer } from "react-toastify";
import {
  Menu,
  X,
  ArrowRightCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ITEMS = [
  { name: "Website Design", path: "/webdesign" },
  { name: "Lead Generation", path: "/lead" },
  { name: "Go High Level CRM", path: "/gohigh" },
  { name: "AI Agents/Automation", path: "/ai" },
  { name: "White Label Marketing", path: "/whitelabel" },
  { name: "Digital Marketing", path: "/digitalmarketing" },
  { name: "Managed Hosting", path: "/hosting" },
  { name: "Conversion Rate Optimization", path: "/conversionrate" },
  { name: "Service Website", path: "/service-site" },
  { name: "Meta Ads Management", path: "/metaads" },
  { name: "Search Engine Optimisation", path: "/seo" },
  { name: "Branding & Logo Design", path: "/branding&logodesign" },
  { name: "ECommerce Websites", path: "/ecommerce" },
  { name: "Google Ads Management", path: "/googleads" },
];

const RADIO_OPTIONS = [
  "Website Design",
  "ECommerce Websites",
  "Service Website",
  "Branding & Logo Design",
  "Digital Marketing",
  "Search Engine Optimisation",
  "Google Ads Management",
  "Meta Ads Management",
  "Content Marketing",
  "Conversion Rate Optimization",
  "Managed Hosting",
  "Go High Level CRM",
  "AI Agents/Automation Development",
  "White Label Marketing",
  "Lead Generation",
];

const SOCIALS = [
  {
    icon: <Facebook size={18} />,
    href: "#",
    label: "Facebook",
    bg: "bg-blue-600",
  },
  {
    icon: <Twitter size={18} />,
    href: "#",
    label: "Twitter",
    bg: "bg-sky-500",
  },
  {
    icon: <Instagram size={18} />,
    href: "#",
    label: "Instagram",
    bg: "bg-pink-600",
  },
  {
    icon: <Linkedin size={18} />,
    href: "#",
    label: "LinkedIn",
    bg: "bg-blue-700",
  },
  {
    icon: <Youtube size={18} />,
    href: "#",
    label: "YouTube",
    bg: "bg-red-600",
  },
];

export default function Contact() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [focused, setFocused] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    callback: "",
    service: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.endsWith("@gmail.com")) {
      toast.error("Incorrect email!");
      return;
    }
    axios
      .post(
        "https://growthflowmedia-esxn.vercel.app/web/api/enquiry/enquiry-insert",
        formData,
      )
      .then(() => {
        toast.success("Message sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          callback: "",
          service: "",
        });
        navigate("/success-page");
      })
      .catch(() => toast.error("Failed to send message."));
  };

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  };

  return (
    <div className="bg-[#fafaf8] font-['Montserrat']">
      <ToastContainer position="top-right" theme="dark" />

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-36 pb-20 px-4 sm:px-6">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px]
          rounded-full bg-[#e36a2e]/6 pointer-events-none"
        />
        <div
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px]
          rounded-full bg-[#e36a2e]/4 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto text-center relative">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60
              px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em]
              uppercase text-[#e36a2e] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e36a2e] animate-pulse" />
            Get In Touch
          </div>

          <h1
            data-aos="fade-up"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-zinc-900
              leading-tight tracking-tight mb-5"
          >
            Ready to{" "}
            <span className="text-[#e36a2e] relative inline-block">
              Grow
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 120 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 3 Q15 0 30 3 Q45 6 60 3 Q75 0 90 3 Q105 6 120 3"
                  stroke="#e36a2e"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.4"
                />
              </svg>
            </span>{" "}
            Your Business?
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Have a project in mind? We'd love to hear about it. Let's discuss
            how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT GRID
      ══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ── LEFT: info cards ── */}
          <div data-aos="fade-right" className="space-y-5">
            {/* phone + email */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <Phone size={20} />,
                  title: "Call Us",
                  value: "+91 9646174266",
                  href: "tel:+919646174266",
                },
                {
                  icon: <Mail size={20} />,
                  title: "Email Us",
                  value: "support@growthflowmedia.com",
                  href: "mailto:support@growthflowmedia.com",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group bg-white rounded-2xl border border-zinc-100
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 relative overflow-hidden
                    hover:border-[#e36a2e]/25 hover:shadow-[0_8px_32px_rgba(227,106,46,0.08)]
                    hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px
                    bg-gradient-to-r from-transparent via-[#e36a2e]/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div
                    className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/50
                    flex items-center justify-center text-[#e36a2e] mb-4"
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2 tracking-wide">
                    {card.title}
                  </h3>
                  <a
                    href={card.href}
                    className="text-[#e36a2e] font-semibold text-sm hover:text-[#cf5f28]
                      transition-colors break-all"
                  >
                    {card.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Why us */}
            <div className="bg-zinc-900 rounded-2xl border border-white/[0.06] p-7 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px
                bg-gradient-to-r from-transparent via-[#e36a2e]/50 to-transparent"
              />

              <p
                className="text-[10px] tracking-[0.25em] uppercase text-[#e36a2e]/70
                font-semibold mb-4"
              >
                Why Work With Us
              </p>
              <h3 className="text-xl font-black text-white mb-5 tracking-tight">
                What you get when
                <br />
                <span className="text-[#e36a2e]">you reach out</span>
              </h3>

              <div className="space-y-3">
                {[
                  "Response within 2 business hours",
                  "Free 30-minute strategy consultation",
                  "No lock-in contracts — ever",
                  "Dedicated account manager assigned",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full bg-[#e36a2e]/15 border border-[#e36a2e]/25
                      flex items-center justify-center shrink-0"
                    >
                      <span className="text-[#e36a2e] text-[9px] font-black">
                        ✓
                      </span>
                    </div>
                    <span className="text-white/50 text-sm font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div
              className="bg-white rounded-2xl border border-zinc-100
              shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6"
            >
              <p
                className="text-[10px] tracking-[0.25em] uppercase text-zinc-400
                font-semibold mb-4"
              >
                Follow Us
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`${s.bg} w-10 h-10 rounded-xl flex items-center
                      justify-center text-white transition-all duration-200
                      hover:scale-110 hover:shadow-lg`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <div
            data-aos="fade-left"
            className="relative bg-[#0c0c10] rounded-2xl overflow-hidden"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#e36a2e]/60 to-transparent" />

            <form onSubmit={handleSubmit} className="p-7 sm:p-9">
              {/* logo */}
              <div className="mb-7 pb-6 border-b border-white/[0.06]">
                <img
                  src={image10}
                  alt="Aussie Growth Media"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>

              {/* heading */}
              <div className="mb-6">
                <p
                  className="text-[10px] tracking-[0.25em] uppercase
                  text-[#e36a2e]/70 font-semibold mb-1.5"
                >
                  Let's Talk
                </p>
                <h2 className="text-xl font-bold text-white leading-snug">
                  Send us a message
                </h2>
              </div>

              {/* text inputs */}
              <div className="space-y-3 mb-6">
                {[
                  { ph: "Full Name", name: "name", type: "text" },
                  { ph: "Email Address", name: "email", type: "email" },
                  { ph: "Phone Number", name: "phone", type: "text" },
                  {
                    ph: "Preferred Callback Time",
                    name: "callback",
                    type: "text",
                  },
                ].map(({ ph, name, type }) => (
                  <div key={name} className="relative group">
                    <div
                      className={`absolute left-0 top-2 bottom-2 w-px rounded-full
                      transition-all duration-300
                      ${
                        focused === name
                          ? "bg-[#e36a2e] opacity-100"
                          : "bg-white/10 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    <input
                      type={type}
                      name={name}
                      placeholder={ph}
                      value={formData[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused("")}
                      className={`w-full pl-5 pr-4 py-3 rounded-xl
                        bg-white/[0.03] border text-white text-sm
                        placeholder:text-white/20 focus:outline-none
                        font-['Montserrat'] transition-all duration-200
                        ${
                          focused === name
                            ? "border-[#e36a2e]/40 bg-white/[0.05]"
                            : "border-white/[0.07] hover:border-white/[0.12]"
                        }`}
                    />
                    {formData[name] && (
                      <div
                        className="absolute right-4 top-1/2 -translate-y-1/2
                        w-1.5 h-1.5 rounded-full bg-[#e36a2e]/60"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* radio label */}
              <p
                className="text-[10px] tracking-[0.22em] uppercase
                text-white/25 font-semibold mb-3"
              >
                How can we help?
              </p>

              {/* radio list */}
              <div
                className="space-y-1 mb-6 max-h-52 overflow-y-auto pr-1
                [&::-webkit-scrollbar]:w-[3px]
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-[#e36a2e]/20
                [&::-webkit-scrollbar-thumb]:rounded-full"
              >
                {RADIO_OPTIONS.map((opt) => {
                  const active = formData.service === opt;
                  return (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl
                        cursor-pointer transition-all duration-150 group relative
                        ${
                          active
                            ? "bg-[#e36a2e]/10 border border-[#e36a2e]/25"
                            : "border border-transparent hover:bg-white/[0.04]"
                        }`}
                    >
                      {active && (
                        <div
                          className="absolute left-0 top-2 bottom-2 w-px
                          bg-[#e36a2e]/60 rounded-full"
                        />
                      )}
                      <div
                        className={`w-3.5 h-3.5 rounded-full border shrink-0
                        flex items-center justify-center transition-all duration-150
                        ${
                          active
                            ? "border-[#e36a2e] bg-[#e36a2e]/15"
                            : "border-white/15 group-hover:border-white/30"
                        }`}
                      >
                        {active && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e36a2e]" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="service"
                        value={opt}
                        checked={active}
                        onChange={() =>
                          setFormData((p) => ({ ...p, service: opt }))
                        }
                        className="sr-only"
                      />
                      <span
                        className={`text-xs font-medium transition-colors duration-150
                        ${
                          active
                            ? "text-orange-300/90"
                            : "text-white/35 group-hover:text-white/55"
                        }`}
                      >
                        {opt}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* submit */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden
                  bg-[#e36a2e] hover:bg-[#cf5f28] text-black
                  font-bold text-xs tracking-[0.15em] uppercase
                  px-8 py-4 rounded-xl flex items-center justify-center gap-2
                  transition-all duration-300
                  hover:shadow-[0_8px_24px_rgba(227,106,46,0.40)]"
              >
                <div
                  className="absolute inset-0 translate-x-[-100%]
                  group-hover:translate-x-[100%] transition-transform duration-500
                  bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative">Submit Request</span>
                <ArrowRightCircle size={15} className="relative" />
              </button>

              <p className="text-center text-[10px] text-white/15 mt-4 tracking-wide">
                We respond within 2 business hours · No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
