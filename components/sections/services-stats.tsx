"use client";

import { motion } from "framer-motion";
import { Users, Building, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Businesses Supported",
  },
  {
    icon: Building,
    value: "10+",
    label: "Industries Served",
  },
  {
    icon: ShieldCheck,
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    icon: TrendingUp,
    value: "A Stronger Workforce",
    label: "Our Commitment",
  },
];

export function ServicesStats() {
  return (
    <section className="bg-white py-2 lg:py-3">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#F5F9FF] via-[#F8FBFF] to-[#F5F9FF] rounded-3xl border border-blue-100/80 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-blue-100">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center gap-4 ${index !== 0 ? "pt-3 sm:pt-2 lg:pt-0 lg:pl-6" : ""}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-100/70 flex items-center justify-center text-[#0066FF] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#051332]">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-500">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
