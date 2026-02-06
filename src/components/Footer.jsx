import React from "react";
import { COLORS } from "../styles/colors";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: COLORS.dark }}>
      <div className="px-8 py-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-2xl font-bold">Positivus</span>
          </div>

          <nav className="flex gap-8">
            <a
              href="#about"
              className="hover:opacity-80 transition-opacity underline"
            >
              About us
            </a>
            <a
              href="#services"
              className="hover:opacity-80 transition-opacity underline"
            >
              Services
            </a>
            <a
              href="#use-cases"
              className="hover:opacity-80 transition-opacity underline"
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="hover:opacity-80 transition-opacity underline"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="hover:opacity-80 transition-opacity underline"
            >
              Blog
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span className="text-black text-xl font-bold">in</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span className="text-black text-xl font-bold">f</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: COLORS.primary }}
            >
              <span className="text-black text-xl font-bold">𝕏</span>
            </a>
          </div>
        </div>

        <div className="flex justify-between items-start mb-16">
          <div>
            <div
              className="inline-block text-black px-4 py-2 rounded-lg font-semibold mb-6"
              style={{ backgroundColor: COLORS.primary }}
            >
              Contact us:
            </div>

            <div className="space-y-4" style={{ color: COLORS.grayText }}>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Right Side - Newsletter Signup */}
          <div
            className="rounded-2xl px-10 py-12 flex gap-4"
            style={{ backgroundColor: COLORS.cardDark }}
          >
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white rounded-lg px-6 py-4 text-white placeholder-gray-400 outline-none w-80 focus:border-opacity-80"
            />
            <button
              className="text-black px-8 py-4 rounded-lg font-semibold whitespace-nowrap hover:opacity-90 transition-opacity"
              style={{ backgroundColor: COLORS.primary }}
            >
              Subscribe to news
            </button>
          </div>
        </div>

        <div
          className="border-t mb-8"
          style={{ borderColor: COLORS.grayText }}
        ></div>

        <div
          className="flex justify-between items-center text-sm"
          style={{ color: COLORS.grayText }}
        >
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
