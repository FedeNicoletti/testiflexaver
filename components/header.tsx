"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } border-b border-gray-800/50`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-1"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/media/logo.svg"
              alt="Logo de iFLex"
              width={120}
              height={30}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden items-center gap-8 lg:flex"
        >
          {["Features", "My Plan", "FAQ", "Contact us"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="relative text-sm font-medium text-gray-300 transition-colors hover:text-[#00d4ff] group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <Button className="bg-[#00d4ff] text-black font-semibold hover:bg-[#00b8e6] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00d4ff]/20">
            Get started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-800 bg-[#0a0a0a] lg:hidden overflow-hidden"
          >
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
              {["Features", "My Plan", "FAQ", "Contact us"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-sm font-medium text-gray-300 transition-colors hover:text-[#00d4ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
