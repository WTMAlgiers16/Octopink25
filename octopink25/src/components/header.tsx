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

  // NOUVELLE FONCTION : Handle smooth scroll to section
  const handleSmoothScroll = (sectionId: string) => {
    let element = document.getElementById(sectionId)
    
    // NOUVEAU : Fallback pour les sections sans ID - cherche par contenu
    if (!element) {
      switch (sectionId) {
        case 'about':
          element = document.querySelector('h2')?.closest('section') || null
          break
        case 'sponsors':
          element = document.querySelector('[class*="sponsors"]') || null
          break
        // Ajoute d'autres cas si nécessaire
      }
    }
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    // NOUVEAU : Ferme le menu mobile après clic
    setIsMenuOpen(false)
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

  // MODIFIÉ : Navigation items now use section IDs instead of routes
  const navigationItems = [
    { sectionId: "home", label: "Home" }, // NOUVEAU : sectionId au lieu de href
    { sectionId: "about", label: "About" },
    { sectionId: "awareness", label: "Awareness" },
    { sectionId: "organizers", label: "Organizers" },
    { sectionId: "sponsors", label: "Sponsors" },
    { sectionId: "activities", label: "Activities & Agenda" },
    { sectionId: "objectives", label: "Objectives" },

  ]

  return (
    <header className={getHeaderClasses()}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          
          <button 
            onClick={() => handleSmoothScroll("home")} 
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/logo.png"
                alt="Octopink Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="font-bold text-xl lg:text-2xl"
                style={{ color: 'var(--color-pink)' }}
              >
                OCTOPINK
              </span>
            </div>
          </button>

          {/* MODIFIÉ : Desktop Navigation now uses buttons with smooth scroll */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleSmoothScroll(item.sectionId)} // NOUVEAU : onClick au lieu de Link
                className="nav-link relative group cursor-pointer"
                style={{ color: 'var(--color-text)' }}
              >
                {item.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--color-pink)' }}
                ></span>
              </button>
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

        {/* MODIFIÉ : Mobile Navigation now uses buttons with smooth scroll */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => handleSmoothScroll(item.sectionId)} // NOUVEAU : onClick au lieu de Link
                  className="nav-link-mobile text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}