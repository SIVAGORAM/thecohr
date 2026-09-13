import { ProtectedImage } from "@/components/ui/protected-image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020612]/90 backdrop-blur-md transition-opacity duration-300">
      {/* Ambient Radial Glow */}
      <div className="absolute w-72 h-72 bg-[#0066FF]/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Animated Brand Pulse Badge */}
        <div className="relative flex items-center justify-center w-20 h-20">
          {/* Outer Rotating Glowing Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0066FF] border-r-[#00A3FF] animate-spin" />
          
          {/* Subtle Inner Pulsing Ring */}
          <div className="absolute inset-2 rounded-full border border-blue-500/30 animate-ping opacity-30" />

          {/* Logo / Brand Icon */}
          <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-xl shadow-blue-500/20 flex items-center justify-center border border-slate-100">
            <ProtectedImage
              src="/fav.svg"
              alt="The Co HR Logo"
              width={36}
              height={36}
              className="w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading Message & Shimmer Bar */}
        <div className="space-y-2">
          <h3 className="text-white font-bold text-lg tracking-tight">
            The Co HR
          </h3>
          <p className="text-xs font-medium text-slate-400 animate-pulse">
            Connecting enterprise solutions...
          </p>

          {/* Progress Shimmer Line */}
          <div className="w-44 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto mt-3">
            <div className="h-full bg-gradient-to-r from-[#0066FF] via-[#00A3FF] to-[#0066FF] rounded-full animate-shimmer w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
