import { useState, useEffect } from 'react'

export function useNavigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigateTo = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return {
    activeSection,
    mobileMenuOpen,
    navigateTo,
    toggleMobileMenu
  }
}
