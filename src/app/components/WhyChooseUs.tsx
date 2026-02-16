import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  GraduationCap,
  Heart,
  Users,
  Building2,
  Sparkles,
  Shield,
} from "lucide-react";

const advantages = [
  {
    icon: Heart,
    title: "Sharqona Axloq va Tarbiya",
    description:
      "Islomiy qadriyatlar, axloq qoidalari va xarakterni rivojlantirishga katta e'tibor",
  },
  {
    icon: Users,
    title: "Yuqori Malakali O'qituvchilar",
    description:
      "Yuqori tajribaga ega bo'lgan salohiyatli ustozlar jamoasi",
  },
  {
    icon: Building2,
    title: "Zamonaviy inshootlar",
    description:
      "Zamonaviy xonalar, sport majmualari, futbol maydoni va texnologiyalarga boy sinflar",
  },
  {
    icon: Sparkles,
    title: "Sinfdan Tashqari Mukammallik",
    description:
      "Iste'dodlarni tarbiyalash uchun sport, san'at, IT (AyTi) va madaniy dasturlarning keng doirasi",
  },
  {
    icon: Shield,
    title: "Xavfsiz Va Tarbiyalash Muhiti",
    description:
      "Talabalar farovonligi va o'sishiga sodiq bo'lgan g'amxo'r xodimlar bilan xavfsiz kampus",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl text-[#0A2342] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            Nima Uchun bizni tanlashingiz kerak?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="group bg-[#FAFAF8] p-8 rounded-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-transparent hover:border-[#C9A96E] cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9A96E] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#C9A96E] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3
                  className="text-xl text-[#0A2342] mb-2 group-hover:text-[#C9A96E] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
