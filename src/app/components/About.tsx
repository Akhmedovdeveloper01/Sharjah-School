import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { number: "5+", label: "Yil tajriba" },
  { number: "1 000+", label: "Bitiruvchilar" },
  { number: "100%", label: "Xavfsiz hudud" },
  { number: "100%", label: "Zamonaviy maktab" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
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
            Sharqon ta'limga xush kelibsiz
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sharja International School biz eng yaxshi o'quv dasturlarini kuchli axloqiy va madaniy qadriyatlar bilan birlashtiramiz. Bizning yaxlit yondashuv bo'ylab turli o'quvchilarni tarbiyalaydi. Biz talabalarni nafaqat universitetga, balki hayotga tayyorlaymiz.
            </p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#C9A96E] group"
            >
              <div className="text-center">
                <p
                  className="text-4xl sm:text-5xl text-[#0A2342] mb-2 group-hover:text-[#C9A96E] transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-sm sm:text-base text-gray-700 mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                >
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
