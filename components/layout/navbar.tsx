"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  ChevronDown,
  ArrowRight,
  Cpu,
  Users,
  GraduationCap,
  PhoneCall,
  Sparkles,
  Mail,
  MapPin,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const servicesItems = [
  {
    title: "HR ERP Software",
    desc: "Complete HCM system, automated payroll & performance analytics.",
    href: "/services#hr-erp-software",
    icon: Cpu,
  },
  {
    title: "Remote HR Services",
    desc: "Dedicated global HR partners & 100% statutory compliance.",
    href: "/services#remote-hr-services",
    icon: Users,
  },
  {
    title: "ERP Training & Upskilling",
    desc: "Hands-on corporate module workshops & team certifications.",
    href: "/services#erp-training",
    icon: GraduationCap,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* 1. TOP UTILITY BAR (Deep Dark Navy) */}
      <div className="hidden lg:block bg-[#0A1128] text-slate-300 text-[11px] py-1.5 px-6 border-b border-slate-800">
        <div className="mx-auto w-full max-w-[1440px] flex items-center justify-between">
          {/* Left Tagline */}
          <div className="flex items-center gap-2.5 font-medium">
            <span>Powering People. Enabling Possibilities.</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Your Strategic HR Partner</span>
          </div>

          {/* Right Contact Info & Socials */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@thecohr.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#0066FF]" />
              <span>info@thecohr.com</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-[#0066FF]" />
              <span>Hyderabad, India</span>
            </div>

            <span className="text-slate-700">|</span>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#0066FF] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400"
                aria-label="Facebook"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400"
                aria-label="Instagram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-slate-400"
                aria-label="YouTube"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FLOATING PILL NAVBAR */}
      <div className="px-3 sm:px-6 py-1.5">
        <div
          className={cn(
            "mx-auto w-full max-w-[1440px] bg-white rounded-full transition-all duration-300 border border-slate-100 px-4 sm:px-6 py-1.5 flex items-center justify-between",
            isScrolled
              ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-1"
              : "shadow-[0_2px_15px_rgba(0,0,0,0.03)]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 py-0.5" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="The Co HR Logo"
              width={280}
              height={85}
              className="h-12 sm:h-14 lg:h-[56px] w-auto object-contain transition-transform duration-200 hover:scale-[1.01]"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {/* Home */}
            <Link
              href="/"
              className={cn(
                "relative text-[15px] font-semibold transition-colors py-2 flex flex-col items-center group",
                pathname === "/" ? "text-[#0066FF]" : "text-slate-800 hover:text-[#0066FF]"
              )}
            >
              <span>Home</span>
              {pathname === "/" && (
                <div className="absolute -bottom-1 flex items-center justify-center w-full">
                  <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0066FF] rounded-full absolute shadow-sm" />
                  </div>
                </div>
              )}
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={cn(
                "relative text-[15px] font-semibold transition-colors py-2 flex flex-col items-center group",
                pathname === "/about" ? "text-[#0066FF]" : "text-slate-800 hover:text-[#0066FF]"
              )}
            >
              <span>About Us</span>
              {pathname === "/about" && (
                <div className="absolute -bottom-1 flex items-center justify-center w-full">
                  <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0066FF] rounded-full absolute shadow-sm" />
                  </div>
                </div>
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link
                href="/services"
                className={cn(
                  "relative flex items-center gap-1.5 text-[15px] font-semibold transition-colors group",
                  pathname.startsWith("/services") || isServicesHovered
                    ? "text-[#0066FF]"
                    : "text-slate-800 hover:text-[#0066FF]"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 opacity-70",
                    isServicesHovered ? "rotate-180 text-[#0066FF]" : ""
                  )}
                />
                {pathname.startsWith("/services") && (
                  <div className="absolute -bottom-1 flex items-center justify-center w-full">
                    <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                      <span className="w-2 h-2 bg-[#0066FF] rounded-full absolute shadow-sm" />
                    </div>
                  </div>
                )}
              </Link>

              {/* Services Dropdown Panel */}
              {isServicesHovered && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] animate-in fade-in-50 slide-in-from-top-1 duration-200">
                  <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-3 ring-1 ring-slate-900/5">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                        Our HR Solutions
                      </span>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-[#0066FF] hover:underline flex items-center gap-1"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="flex flex-col gap-1">
                      {servicesItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group/item flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 hover:bg-blue-50/60"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-105">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-[14px] font-semibold text-slate-900 group-hover/item:text-[#0066FF] transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-slate-500 leading-normal mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={cn(
                "relative text-[15px] font-semibold transition-colors py-2 flex flex-col items-center group",
                pathname === "/contact" ? "text-[#0066FF]" : "text-slate-800 hover:text-[#0066FF]"
              )}
            >
              <span>Contact Us</span>
              {pathname === "/contact" && (
                <div className="absolute -bottom-1 flex items-center justify-center w-full">
                  <div className="w-8 h-[2px] bg-blue-100 rounded-full relative flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0066FF] rounded-full absolute shadow-sm" />
                  </div>
                </div>
              )}
            </Link>
          </nav>

          {/* Desktop Right Side: Divider + Phone Schedule Block + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="h-9 w-px bg-slate-200" />

            {/* Phone Info Block */}
            <a href="tel:+919876543210" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug">
                  +91 98765 43210
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-none">
                  Mon - Fri, 9:00 AM - 6:00 PM
                </span>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0066FF] px-7 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-[#0052CC] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/contact"
              className="sm:inline-flex hidden items-center gap-1.5 rounded-full bg-[#0066FF] px-4 py-2 text-xs font-bold text-white shadow-sm"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2.5 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white flex flex-col p-6 w-[88vw] max-w-[360px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <Image
                    src="/logo.png"
                    alt="The Co HR Logo"
                    width={240}
                    height={75}
                    className="h-12 w-auto object-contain"
                    unoptimized
                  />
                </div>

                <div className="flex flex-col gap-2 py-6 overflow-y-auto">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                      pathname === "/"
                        ? "bg-blue-50 text-[#0066FF]"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                      pathname === "/about"
                        ? "bg-blue-50 text-[#0066FF]"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    About Us
                  </Link>

                  <div className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors w-full text-left",
                        pathname.startsWith("/services")
                          ? "bg-blue-50 text-[#0066FF]"
                          : "text-slate-800 hover:bg-slate-50"
                      )}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200 text-slate-400",
                          mobileServicesOpen ? "rotate-180 text-[#0066FF]" : ""
                        )}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-4 pl-3 border-l-2 border-blue-100 flex flex-col gap-1.5 my-1 py-1">
                        {servicesItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-[#0066FF] hover:bg-slate-50 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors",
                      pathname === "/contact"
                        ? "bg-blue-50 text-[#0066FF]"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-3 text-sm font-bold text-slate-800"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <span>+91 98765 43210</span>
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full py-3.5 font-bold text-sm justify-center flex items-center gap-2 shadow-md"
                  >
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}



