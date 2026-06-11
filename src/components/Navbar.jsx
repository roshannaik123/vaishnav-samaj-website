import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const MENU_ITEMS = [
  { id: '/', label: 'Home' },
  { id: '/About-us', label: 'About Us' },
  { id: '/board', label: 'Board' },
  { id: '/gallery', label: 'Gallery' },
  { id: '/articles', label: 'Articles' },
  { id: '/contact', label: 'Contact Us' }
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const activePage = location.pathname

  const handleNavigate = (path) => {
    navigate(path)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          
          {/* Logo Brand Badging */}
          <button onClick={() => handleNavigate('/')} className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 transition-transform group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #E65100, #D4AF37)',
                fontFamily: "'Cinzel', serif"
              }}
            >
              V
            </div>
            
            <div className="text-left">
              <div
                className="text-xl font-bold tracking-[0.2em] text-foreground group-hover:text-primary transition-colors leading-none"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                VAISHNAV SAMAJ
              </div>
              <div
                className="text-[10px] text-muted-foreground tracking-widest hidden sm:block mt-0.5"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Culture · Bhakti · Seva in Denmark
              </div>
            </div>
          </button>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-5 text-sm tracking-wide transition-all duration-200 border-b-2 cursor-pointer ${
                  activePage === item.id
                    ? 'border-primary text-primary font-semibold'
                    : 'border-transparent text-foreground/70 hover:text-primary hover:border-accent/60'
                }`}
                style={{ fontFamily: "'Lora', serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Hamburger Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          
        </div>
      </div>
      
      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full text-left px-6 py-4 text-sm tracking-wide border-b border-border/40 transition-colors cursor-pointer ${
                activePage === item.id
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-foreground/75 hover:text-primary hover:bg-muted'
              }`}
              style={{ fontFamily: "'Lora', serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
export { MENU_ITEMS }
