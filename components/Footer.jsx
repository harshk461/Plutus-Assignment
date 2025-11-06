import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(270deg,_#100134_0%,_#870075_161.11%)] text-white font-inter rounded-t-[64px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-8 lg:gap-0">
          {/* Logo Section */}
          <div className="flex items-center gap-2 mb-6 lg:mb-0">
            <img
              src="/assets/logo.png"
              className="w-10 h-10"
              alt="Plutus Logo"
            />
            <span className="text-2xl font-bold italic">Plutus</span>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 w-full lg:w-auto">
            {/* Home Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Home</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#affiliates"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#terms"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#responsible-gaming"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Responsible Gaming
                  </a>
                </li>
              </ul>
            </div>

            {/* Backed By */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Backed by</h3>
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-4 items-center">
                <img
                  src="/assets/a16z.svg"
                  className="w-24 sm:w-28 h-auto"
                  alt="a16z"
                />
                <img
                  src="/assets/konvoy.svg"
                  className="w-16 sm:w-20 h-auto"
                  alt="Konvoy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-300 text-sm">© 2025 Plutus Labs, Inc.</p>
          <p className="text-gray-300 text-sm">
            1209 Orange Street, Wilmington, <br className="md:hidden" />{" "}
            Delaware, USA, 19801
          </p>
        </div>
      </div>
    </footer>
  );
}
