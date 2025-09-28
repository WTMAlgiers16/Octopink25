"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  className?: string
  variant?: "default" | "transparent"
}

export function Header({ className = "", variant = "default" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 w-full z-50 transition-all duration-300"
    const variantClasses = {
      default: "bg-white shadow-sm",
      transparent: "bg-white/90 backdrop-blur-sm"
    }
    const scrollClasses = isScrolled ? "shadow-lg" : ""

    return `${baseClasses} ${variantClasses[variant]} ${scrollClasses} ${className}`
  }

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/awareness", label: "Awareness" },
    { href: "/organizers", label: "Organizers" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/activities", label: "Activities & Agenda" },
  ]

  return (
    <header className={getHeaderClasses()}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              {/* Logo temporaire pour éviter l'erreur 404 */}
              <div 
                className="w-full h-full rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-pink)' }}
              >
                <span className="text-white font-bold text-sm lg:text-base">O</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span 
                className="font-bold text-xl lg:text-2xl"
                style={{ color: 'var(--color-pink)' }}
              >
                OCTOPINK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link relative group"
                style={{ color: 'var(--color-text)' }}
              >
                {item.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--color-pink)' }}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <div className="space-y-1.5">
              <span 
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-text)',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                }}
              />
              <span 
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-text)',
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <span 
                className="block w-6 h-0.5 transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-text)',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}













