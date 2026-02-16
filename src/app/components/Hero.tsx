import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1770827401349-3499200c5e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzEyNjEyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/95 via-[#0A2342]/85 to-[#C9A96E]/60" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#C9A96E" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#C9A96E" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-sm rounded-full border-2 border-[#C9A96E] flex items-center justify-center">
              <span className="text-4xl text-[#C9A96E]">🎓</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Sharjah International School
          </motion.h1>

          {/* Arabic + English Subheadline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >

            <p className="text-lg sm:text-xl text-white/90 italic">
              Zamonaviy ta'lim va sharqona tarbiya maskani
            </p>
          </motion.div>

          {/* Tagline */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-10"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base text-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A96E] rounded-full" />
                Excellence in Education
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A96E] rounded-full" />
                Rooted in Values
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A96E] rounded-full" />
                Prepared for the Future
              </span>
            </div>
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#admissions"
              className="px-8 py-4 bg-[#C9A96E] hover:bg-[#B8975D] text-[#0A2342] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Biz bilan bog'laning
            </a>
            <a
              href="#campus"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A2342] rounded-lg transition-all duration-300 min-w-[200px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Onlayn sayohat
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
