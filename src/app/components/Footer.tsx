import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#C9A96E] rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                {/* <h3
                  className="text-xl"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  SIS
                </h3> */}
                {/* <p className="text-xs text-[#C9A96E]">مدرسة الشارقة الدولية</p> */}
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Ta'limning mukammalligi. Qadriyatlarga asoslangan. Kelajakka tayyor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Tez Havolalar
            </h4>
            <ul className="space-y-3">
              {[
                // { label: "About Us", href: "#about" },
                { label: "Qabul", href: "#admissions" },
                // { label: "Curriculum", href: "#curriculum" },
                { label: "Onlayn sayohat", href: "#campus" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Aloqa
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  Yunusobod 6
                  <br />
                  Toshkent shahri, Uzbekistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A96E] flex-shrink-0" />
                <a
                  href="tel:+998910100111"
                  className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors"
                >
                  +99891 010 01 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A96E] flex-shrink-0" />
                <a
                  href="mailto:sharjahschool.uz@gmail.com"
                  className="text-sm text-white/70 hover:text-[#C9A96E] transition-colors"
                >
                  sharjahschool.uz@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Bizni kuzatib boring
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-[#C9A96E] rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={`Follow us on ${social.Icon.name}`}
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div>
              <h5
                className="text-sm mb-2"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                Ish vaqti
              </h5>
              <p className="text-sm text-white/70">
                Dushanba - Shanba
                <br />
                7:30 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 text-center md:text-left">
              © 2026 Sharjah International School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-[#C9A96E] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-[#C9A96E] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
