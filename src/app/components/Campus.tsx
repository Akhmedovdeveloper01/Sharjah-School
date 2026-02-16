import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const facilities = [
  {
    image:
      "https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBtb2Rlcm4lMjBzY2hvb2x8ZW58MXx8fHwxNzcxMjYxMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Classrooms",

  },
  {
    image:
      "https://images.unsplash.com/photo-1767102060241-130cb9260718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwbW9kZXJuJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzEyNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Inspiring Library",

  },
  {
    image:
      "https://images.unsplash.com/photo-1759763494425-58fc490742ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmaWVsZCUyMHN0dWRlbnRzJTIwcGxheWluZ3xlbnwxfHx8fDE3NzEyNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sports Complex",

  },
  {
    image:
      "https://images.unsplash.com/photo-1602052294200-a8b75e03adfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3MTI2MTI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Science Labs",

  },
  {
    image:
      "https://images.unsplash.com/photo-1765994898026-4fa84ade4a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBvdXRkb29yJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcxMjYxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Outdoor Learning Spaces",

  },
  {
    image:
      "https://images.unsplash.com/photo-1709086566111-dfa0699a6842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjdWx0dXJhbCUyMGFjdGl2aXR5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxMjYxMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cultural & Arts Center",

  },
];

export function Campus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section id="campus" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            Ta'lim va o'sish uchun ilhomlantiruvchi joylar
          </h2>

        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={facilities[currentIndex].image}
              alt={facilities[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/80 via-transparent to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3
                className="text-3xl sm:text-4xl mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                {facilities[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-[#C9A96E] text-[#0A2342] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-[#C9A96E] text-[#0A2342] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-8 bg-[#C9A96E]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8"
        >
          {facilities.map((facility, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                ? "ring-4 ring-[#C9A96E] scale-105"
                : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
