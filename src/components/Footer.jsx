import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { MENU_ITEMS } from './Navbar'

const Footer = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer style={{ background: '#0F4C5C' }} className="text-white/70 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #E65100, #D4AF37)',
                  fontFamily: "'Cinzel', serif"
                }}
              >
                V
              </div>
              <span
                className="text-white text-xl font-bold tracking-[0.2em]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                VAISHNAV SAMAJ
              </span>
            </div>
            
            <p
              className="text-sm leading-relaxed text-white/60"
              style={{ fontFamily: "'Lora', serif" }}
            >
              A spiritual and cultural community in Denmark. We share the rich values of Vaishnavism — bhakti (devotion), seva (service), and ahimsa (non-violence) — through celebrations and dialogue.
            </p>
          </div>
          
          {/* Footer Quick Links */}
          <div>
            <h4
              className="text-white font-semibold mb-5 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Footer Contact Details */}
          <div>
            <h4
              className="text-white font-semibold mb-5 text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Contact
            </h4>
            <div
              className="space-y-3 text-sm text-white/60"
              style={{ fontFamily: "'Lora', serif" }}
            >
              <div className="flex items-center gap-2">
                <Mail size={13} style={{ color: '#D4AF37' }} className="flex-shrink-0" />
                <a href="mailto:contact@vaishnavsamaj.dk" className="hover:text-white transition-colors">
                  contact@vaishnavsamaj.dk
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone size={13} style={{ color: '#D4AF37' }} className="flex-shrink-0" />
                <a href="tel:+4512345678" className="hover:text-white transition-colors">
                  +45 12 34 56 78
                </a>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin size={13} style={{ color: '#D4AF37' }} className="flex-shrink-0 mt-0.5" />
                <span>Nørre Alle 42, 2nd Floor, 2200 Copenhagen N</span>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Border line */}
        <div className="h-px bg-white/10 my-8 w-full" />
        
        <p
          className="text-center text-xs text-white/40"
          style={{ fontFamily: "'Lora', serif" }}
        >
          © {new Date().getFullYear()} Vaishnav Samaj Denmark. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
