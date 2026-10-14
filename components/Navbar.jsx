"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "https://rajivtalreja.com/", active: true },
  { name: "About", href: "https://rajivtalreja.com/about/" },
  { name: "Programs", href: "https://rajivtalreja.com/program/" },
  { name: "Products", href: "https://rajivtalreja.com/products/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full pt-5 pb-3 px-6 sm:px-10 lg:px-14 max-w-[1380px] mx-auto">
      <nav
        className="flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="https://rajivtalreja.com/"
          className="flex items-center gap-2 group transition-opacity hover:opacity-80"
          aria-label="Rajiv Talreja Home"
        >
          <div className="relative h-10 w-28 sm:h-11 sm:w-32">
            <Image
              src="/images/logo-dark.png"
              alt="Rajiv Talreja Logo"
              fill
              sizes="(max-width: 640px) 112px, 128px"
              priority
              className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Center Nav Links - Floating Minimal Pill Menu */}
        <div className="hidden md:flex items-center gap-7 bg-white/60 backdrop-blur-md px-7 py-2.5 rounded-full    shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-md tracking-normal transition-colors py-1 ${
                link.active
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900 font-medium"
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neutral-900 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="https://rajivtalreja.com/program/the-business-pace-program/"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-900 text-md font-semibold  shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-[#131D35] hover:text-white transition-all duration-700"
          >
            <span>Join Business P.A.C.E</span>
            <svg
              className="w-3.5 h-3.5 stroke-[2.5] transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 bg-white/95 backdrop-blur-xl border border-neutral-200/80 rounded-2xl shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base ${
                  link.active
                    ? "bg-neutral-100 font-semibold text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-medium"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <Link
                href="https://rajivtalreja.com/program/the-business-pace-program/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-neutral-900 text-white font-semibold text-sm shadow-md"
              >
                <span>Join Business P.A.C.E</span>
                <svg
                  className="w-3.5 h-3.5 stroke-[2.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
