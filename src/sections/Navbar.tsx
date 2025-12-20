'use client';
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-5xl px-4 pt-4">
          <div className="flex items-center justify-between rounded-full border border-white/15 bg-neutral-950/70 backdrop-blur px-4 py-2">

            {/* LOGO */}
            <Image
              src={logoImage}
              alt="Layers Logo"
              className="h-9 w-auto"
              priority
            />

            {/* DESKTOP NAV (CENTER) */}
            <nav className="hidden lg:flex gap-6 font-medium">
              {navLinks.map(link => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition-transform duration-300",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge(
                      "transition-opacity duration-300",
                      isOpen && "opacity-0"
                    )}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition-transform duration-300",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>
              </button>

              {/* DESKTOP BUTTONS */}
              <Button variant="secondary" className="hidden lg:inline-flex">
                Log In
              </Button>
              <Button variant="primary" className="hidden lg:inline-flex">
                Sign Up
              </Button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-col items-center gap-4 rounded-2xl border border-white/15 bg-neutral-950/90 py-4">
                  {navLinks.map(link => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                  <Button variant="secondary">Log In</Button>
                  <Button variant="primary">Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* PAGE OFFSET */}
      <div className="h-[96px]" />
    </>
  );
}
