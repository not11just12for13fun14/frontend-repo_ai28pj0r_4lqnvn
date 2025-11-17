import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl backdrop-blur bg-white/60 border border-white/40 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="font-serif text-2xl tracking-wide">Solène Studio</a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700 hover:text-black transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-black text-white px-4 py-2 hover:bg-gray-900 transition-colors">Book a Shoot</a>
            </nav>
            <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/50 px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-gray-700">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-full bg-black text-white px-4 py-2 text-center">Book a Shoot</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
