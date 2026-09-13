"use client";

import { useEffect } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ProtectedImage } from "@/components/ui/protected-image";
import Link from "next/link";
import {
  Monitor,
  Users,
  GraduationCap,
  ArrowRight,
  UserPlus,
  BarChart3,
  Search,
  FileText,
  UserCheck,
  Laptop,
  PieChart,
  Calendar,
  ShieldCheck,
  CalendarDays,
  LogOut,
  CreditCard,
  Cloud,
  Server,
  Building,
  Award,
  Settings,
  Heart,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Building2,
} from "lucide-react";

export function ServicesSolutions() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <section className="bg-slate-50/60 py-2 lg:py-3 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 space-y-1">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
            OUR CORE SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051332] tracking-tight">
            Three Powerful Solutions. One Stronger Tomorrow.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Technology, expertise, and learning — everything you need for a more efficient, people-centric workplace.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ==================== CARD 1: HR ERP Software ==================== */}
          <FadeIn
            id="hr-erp-software"
            direction="up"
            duration={0.5}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all flex flex-col justify-between scroll-mt-28"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                    <Monitor className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#051332]">
                      HR ERP Software
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Complete employee lifecycle management.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services#hr-erp-software"
                  className="w-9 h-9 rounded-full border border-blue-100 flex items-center justify-center text-[#0066FF] hover:bg-blue-50 transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Dashboard Preview Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-6 bg-slate-50">
                <ProtectedImage
                  src="/images/dashboard-mockup.png"
                  alt="HR ERP Software Dashboard"
                  width={600}
                  height={380}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Key Modules */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <Users className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Employee Information</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <CreditCard className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Payroll</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <UserPlus className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Recruitment</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <BarChart3 className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Performance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <Search className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Applicant Tracking</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <GraduationCap className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Training</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <FileText className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Offer Management</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <UserCheck className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Employee Self Service</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <Laptop className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Digital Onboarding</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <PieChart className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Reports</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <Calendar className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Attendance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Compliance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <CalendarDays className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Leave</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50/60 px-3 py-2 rounded-xl border border-slate-200/80 transition-colors">
                    <LogOut className="w-4 h-4 text-[#0066FF] shrink-0" />
                    <span className="leading-tight">Exit Management</span>
                  </div>
                </div>
              </div>

              {/* Deployment Options */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Deployment Options
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-center">
                  <div className="bg-blue-50/60 rounded-xl p-2 border border-blue-100/60 flex flex-col items-center justify-center">
                    <Cloud className="w-4 h-4 text-[#0066FF] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">Cloud SaaS</span>
                  </div>
                  <div className="bg-blue-50/60 rounded-xl p-2 border border-blue-100/60 flex flex-col items-center justify-center">
                    <Server className="w-4 h-4 text-[#0066FF] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">Private Cloud</span>
                  </div>
                  <div className="bg-blue-50/60 rounded-xl p-2 border border-blue-100/60 flex flex-col items-center justify-center">
                    <Building className="w-4 h-4 text-[#0066FF] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">On-Premise</span>
                  </div>
                  <div className="bg-blue-50/60 rounded-xl p-2 border border-blue-100/60 flex flex-col items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#0066FF] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">Subscription</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-blue-50/60 rounded-xl p-2 border border-blue-100/60 flex flex-col items-center justify-center">
                    <Award className="w-4 h-4 text-[#0066FF] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700 leading-tight">Perpetual Licence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/services#hr-erp-software"
              className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              <span className="whitespace-nowrap">Explore HR ERP Software</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </FadeIn>


          {/* ==================== CARD 2: Remote HR Services ==================== */}
          <FadeIn
            id="remote-hr-services"
            direction="up"
            duration={0.5}
            delay={0.1}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all flex flex-col justify-between scroll-mt-28"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00B894] flex items-center justify-center text-white shadow-md shadow-emerald-500/20 shrink-0">
                    <Users className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#051332]">
                      Remote HR Services
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Our HR professionals work as your dedicated HR team.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services#remote-hr-services"
                  className="w-9 h-9 rounded-full border border-emerald-100 flex items-center justify-center text-[#00B894] hover:bg-emerald-50 transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Team Photo with Floating Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-6 bg-slate-50">
                <ProtectedImage
                  src="/images/remote-hr.jpg"
                  alt="Remote HR Team Services"
                  width={600}
                  height={380}
                  className="w-full h-48 object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-emerald-100 text-center max-w-[130px] z-10">
                  <p className="text-xs font-bold text-[#051332]">
                    Your Extended HR Team
                  </p>
                </div>
              </div>

              {/* Services Include */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Services Include
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <UserPlus className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Recruitment</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <Users className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Employee Lifecycle Management</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <Settings className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>HR Operations</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <FileText className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Policy Development</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <ShieldCheck className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Compliance Support</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <BarChart3 className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Performance Reviews</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <Heart className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Employee Engagement</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <CreditCard className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>Payroll Coordination</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/40">
                    <PieChart className="w-4 h-4 text-[#00B894] shrink-0" />
                    <span>HR Reporting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/services#remote-hr-services"
              className="w-full bg-[#00B894] hover:bg-[#009879] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              <span className="whitespace-nowrap">Explore Remote HR Services</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </FadeIn>


          {/* ==================== CARD 3: ERP Training & Upskilling ==================== */}
          <FadeIn
            id="erp-training"
            direction="up"
            duration={0.5}
            delay={0.2}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all flex flex-col justify-between scroll-mt-28"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#6C5CE7] flex items-center justify-center text-white shadow-md shadow-purple-500/20 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#051332]">
                      ERP Training &amp; Upskilling
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Professional learning designed for HR teams.
                    </p>
                  </div>
                </div>
                <Link
                  href="/services#erp-training"
                  className="w-9 h-9 rounded-full border border-purple-100 flex items-center justify-center text-[#6C5CE7] hover:bg-purple-50 transition-colors shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Training Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-6 bg-slate-50">
                <ProtectedImage
                  src="/images/training.jpg"
                  alt="ERP Training & Upskilling"
                  width={600}
                  height={380}
                  className="w-full h-48 object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Training Programmes */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Training Programmes
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <CheckCircle2 className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>ERP Implementation Training</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <Award className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>Administrator Certification</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <GraduationCap className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>HR Executive Training</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <Users className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>Manager Workshops</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <UserCheck className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>Employee Orientation</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <BookOpen className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>Corporate Learning</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-purple-50/40 p-2.5 rounded-xl border border-purple-100/40">
                    <Sparkles className="w-4 h-4 text-[#6C5CE7] shrink-0" />
                    <span>Custom Training</span>
                  </div>
                </div>
              </div>

              {/* Delivery Modes */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Delivery Modes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="bg-purple-50/60 rounded-xl p-2 border border-purple-100/60 flex flex-col items-center">
                    <Monitor className="w-4 h-4 text-[#6C5CE7] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700">Online</span>
                  </div>
                  <div className="bg-purple-50/60 rounded-xl p-2 border border-purple-100/60 flex flex-col items-center">
                    <Building2 className="w-4 h-4 text-[#6C5CE7] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700">Classroom</span>
                  </div>
                  <div className="bg-purple-50/60 rounded-xl p-2 border border-purple-100/60 flex flex-col items-center">
                    <Users className="w-4 h-4 text-[#6C5CE7] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700">Corporate Workshops</span>
                  </div>
                  <div className="bg-purple-50/60 rounded-xl p-2 border border-purple-100/60 flex flex-col items-center">
                    <Laptop className="w-4 h-4 text-[#6C5CE7] mb-1" />
                    <span className="text-[10px] font-bold text-slate-700">Hybrid Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              href="/services#erp-training"
              className="w-full bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              <span className="whitespace-nowrap">Explore ERP Training</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
