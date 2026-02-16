import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function Admissions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send this to a backend
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", grade: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="admissions"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A2342] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="admissions-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="30" fill="none" stroke="#C9A96E" strokeWidth="1" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="#C9A96E" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#admissions-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
          >
            Bizga murojat qiling
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Admissions Process
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Ariza qoldiring",
                  desc: "Formani to'ldiring va yuboring",
                },
                {
                  step: "2",
                  title: "Maktabimizga Tashrif buyuring",
                  desc: "Ekskursiya va dars jarayonlarini kuzating",
                },
                {
                  step: "3",
                  title: "Suhbat",
                  desc: "Qabul guruhimiz bilan tanishing",
                },
                {
                  step: "4",
                  title: "Ro'yxatdan o'tish",
                  desc: "Qabul jarayoni",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-[#C9A96E] rounded-full flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-xl text-[#0A2342]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-lg mb-1"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h4>

                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tuition Info */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-[#C9A96E]/30"
            >
              <h4
                className="text-lg mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Tuition Information
              </h4>
              <p className="text-white/80 text-sm">
                Annual tuition ranges from <span className="text-[#C9A96E] font-semibold">20,000 to 60,000 AED</span> depending on grade level. Scholarships and flexible payment plans available. Contact us for detailed fee structure.
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#C9A96E]/30"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                    Ota/Ona ism sharif *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                    Telefon raqam *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}>
                    Sinf bosqichi *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                  >
                    <option value="" className="bg-[#0A2342]">Variantlari tanlang</option>
                    <option value="1/2" className="bg-[#0A2342]">1/2 sinf</option>
                    <option value="3/4" className="bg-[#0A2342]">3/4 sinf</option>
                    <option value="5/6" className="bg-[#0A2342]">5/6 sinf</option>
                    <option value="7/8" className="bg-[#0A2342]">7/8 sinf</option>
                    <option value="9/10/11" className="bg-[#0A2342]">9/10/11 sinf</option>
                  </select>
                </div>


                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#C9A96E] hover:bg-[#B8975D] text-[#0A2342] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  <Send className="w-5 h-5" />
                  Submit Enquiry
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-[#C9A96E] mx-auto mb-4" />
                <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Thank You!
                </h3>
                <p className="text-white/80">
                  Your enquiry has been submitted. Our admissions team will contact you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
