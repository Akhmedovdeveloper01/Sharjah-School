import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Baby, BookOpen, Globe, Trophy } from "lucide-react";

const programs = [
  {
    id: "early",
    icon: Baby,
    title: "Early Years",
    titleAr: "السنوات المبكرة",
    age: "Ages 3-5",
    description:
      "Play-based learning that nurtures curiosity, creativity, and social skills in a safe, stimulating environment.",
    highlights: [
      "Montessori-inspired approach",
      "Bilingual exposure (English & Arabic)",
      "Sensory and motor development",
      "Islamic values integration",
    ],
  },
  {
    id: "primary",
    icon: BookOpen,
    title: "Primary School",
    titleAr: "المرحلة الابتدائية",
    age: "Grades 1-5",
    description:
      "Building strong foundations in literacy, numeracy, sciences, and humanities with emphasis on character and values.",
    highlights: [
      "International curriculum standards",
      "STEM enrichment programs",
      "Arabic language & Islamic studies",
      "Creative arts & music",
    ],
  },
  {
    id: "secondary",
    icon: Globe,
    title: "Secondary School",
    titleAr: "المرحلة المتوسطة",
    age: "Grades 6-9",
    description:
      "Deepening academic rigor while developing critical thinking, leadership, and ethical decision-making skills.",
    highlights: [
      "Subject specialization begins",
      "Science labs & technology integration",
      "Community service projects",
      "Sports & extracurricular excellence",
    ],
  },
  {
    id: "high",
    icon: Trophy,
    title: "High School",
    titleAr: "المرحلة الثانوية",
    age: "Grades 10-12",
    description:
      "University preparation with advanced courses, career guidance, and pathways to top global institutions.",
    highlights: [
      "British/American track options",
      "University counseling & SAT prep",
      "Advanced placement courses",
      "100% university acceptance rate",
    ],
  },
];

export function Curriculum() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(programs[0].id);

  const activeProgram = programs.find((p) => p.id === activeTab) || programs[0];
  const Icon = activeProgram.icon;

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F3EF]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl text-[#0A2342] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            Curriculum & Programs
          </h2>
          <p
            className="text-xl text-[#C9A96E]"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            المنهج والبرامج
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {programs.map((program) => {
            const TabIcon = program.icon;
            return (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === program.id
                    ? "bg-[#C9A96E] text-white shadow-lg"
                    : "bg-white text-[#0A2342] hover:bg-[#C9A96E]/10"
                }`}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
              >
                <TabIcon className="w-5 h-5" />
                {program.title}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#C9A96E]" />
                </div>
                <div>
                  <h3
                    className="text-3xl text-[#0A2342]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {activeProgram.title}
                  </h3>
                  <p
                    className="text-[#C9A96E]"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    {activeProgram.titleAr}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                {activeProgram.age}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {activeProgram.description}
              </p>
              <img
                src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBtb2Rlcm4lMjBzY2hvb2x8ZW58MXx8fHwxNzcxMjYxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={activeProgram.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right Side - Highlights */}
            <div>
              <h4
                className="text-xl text-[#0A2342] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Program Highlights
              </h4>
              <ul className="space-y-4">
                {activeProgram.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#C9A96E] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Additional Info Box */}
              <div className="mt-8 p-6 bg-[#0A2342] text-white rounded-lg">
                <p
                  className="text-sm mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Interested in this program?
                </p>
                <p className="text-sm mb-4 opacity-90">
                  Schedule a campus tour or speak with our admissions team.
                </p>
                <a
                  href="#admissions"
                  className="inline-block px-6 py-2 bg-[#C9A96E] hover:bg-[#B8975D] text-[#0A2342] rounded-lg transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
