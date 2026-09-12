"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-white py-3 sm:py-5 lg:py-6">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#031846] via-[#05215E] to-[#031846] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-2 max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Discover how The Co HR can help you streamline your HR operations, empower your people, and drive business growth.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="bg-white hover:bg-blue-50 text-[#051332] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-md hover:shadow-lg group"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
