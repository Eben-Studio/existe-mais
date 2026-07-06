import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data/landingContent'
import logo from '../../assets/airyn - logo simplificado 3.png'
export function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/40 backdrop-blur-md transition-all duration-300">
      <div
        className={`mx-auto flex max-w-container-max items-center justify-between px-gutter transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
      >
        <img src={logo} alt="Airyn Vishnevsky" className="h-10 w-auto" />

        <div className="hidden gap-8 font-body-md text-body-md uppercase tracking-widest text-on-surface-variant/70 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="transition-colors duration-300 hover:text-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="rounded-lg bg-primary-container px-8 py-3 font-label-caps text-label-caps uppercase text-on-primary-container transition-transform duration-200 hover:scale-95"
          href="#pricing"
        >
          Garantir minha vaga
        </a>
      </div>
    </nav>
  )
}
