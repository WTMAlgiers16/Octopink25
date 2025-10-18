"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Button from "./button"

/**
 * Header component with smooth scroll navigation
 * Includes responsive mobile menu and scroll detection
 * Uses 'use client' for state management and event listeners
 */

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

  const handleSmoothScroll = (sectionId: string) => {
    let element = document.getElementById(sectionId)
    
    if (!element) {
      switch (sectionId) {
        case 'about':
          element = document.querySelector('h2')?.closest('section') || null
          break
        case 'sponsors':
          element = document.querySelector('[class*="sponsors"]') || null
          break
      }
    }
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
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

  const navigationItems = [
    { sectionId: "about", label: "About" },
    { sectionId: "objectives", label: "Objectives" },
    { sectionId: "detection", label: "AI Detection" },
    { sectionId: "organizers", label: "Organizers" },
    { sectionId: "sponsors", label: "Parteners" },
    { sectionId: "activities", label: "Activities" },
    { sectionId: "agenda", label: "Agenda" },
  ]

  return (
    <header className={getHeaderClasses()}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <button 
            onClick={() => handleSmoothScroll("about")} 
            className="flex flex-col items-center space-y-1 cursor-pointer"
          >
            <div className="relative w-14 h-14 lg:w-20 lg:h-20 hover-scale">
              <Image
                src="/images/logo.png"
                alt="Octopink Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleSmoothScroll(item.sectionId)}
                className="nav-link relative group cursor-pointer text-text hover:text-pink"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              text="Join us!" 
              className="bg-white text-pink border-pink hover:bg-pink hover:text-white" 
              border
              onClick={()=> window.open("https://tripetto.app/run/BBOF4REOPG", "_blank")} 
            />
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
                className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
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
                <button
                  key={item.sectionId}
                  onClick={() => handleSmoothScroll(item.sectionId)} 
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