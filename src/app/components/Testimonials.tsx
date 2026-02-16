import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    nameAr: "أحمد المنصوري",
    nationality: "UAE",
    quote:
      "The perfect balance of modern education and strong values. My children are thriving academically and growing into compassionate, confident individuals.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    nationality: "UK",
    quote:
      "Moving to Sharjah from London, I was worried about finding a school that matches British standards. SIS exceeded all expectations. The teachers are exceptional!",
    rating: 5,
  },
  {
    name: "Fatima Al Zaabi",
    nameAr: "فاطمة الزعابي",
    nationality: "UAE",
    quote:
      "أفضل مدرسة في الشارقة! The blend of international curriculum with Islamic values is exactly what we wanted for our daughters. They love going to school every day.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    nameAr: "راجيش كومار",
    nationality: "India",
    quote:
      "Outstanding facilities and a truly international community. The focus on STEM and extracurriculars has helped my son discover his passion for robotics.",
    rating: 5,
  },
  {
    name: "Layla Hassan",
    nameAr: "ليلى حسن",
    nationality: "Egypt",
    quote:
      "As a parent, safety and values are my top priorities. SIS provides a nurturing environment where children are respected and encouraged to reach their potential.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">
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
            What Parents Say
          </h2>
          <p
            className="text-xl text-[#C9A96E]"
            style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
          >
            آراء أولياء الأمور
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="w-32 h-32 text-[#C9A96E]" />
            </div>

            {/* Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-[#C9A96E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>

              {/* Quote */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8 min-h-[120px]">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#C9A96E] rounded-full flex items-center justify-center">
                  <span
                    className="text-2xl text-white"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p
                    className="text-lg text-[#0A2342]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </p>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
                  >
                    {testimonials[currentIndex].nameAr}
                  </p>
                  <p className="text-sm text-[#C9A96E]">
                    {testimonials[currentIndex].nationality}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-[#C9A96E] text-[#0A2342] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-[#C9A96E] text-[#0A2342] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#C9A96E]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
