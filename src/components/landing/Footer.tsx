import { FOOTER_LINKS } from '../../data/landingContent'
import logo from '../../assets/airyn - logo simplificado 3.png'

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low py-section-gap-desktop">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-8 px-gutter md:flex-row">
        <div className="text-center md:text-left">
          <img src={logo} alt="Airyn Vishnevsky" className="h-10 w-auto" />
        </div>

        <div className="flex gap-8 font-label-caps text-label-caps text-secondary">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              className="opacity-80 transition-opacity duration-300 hover:text-primary hover:opacity-100"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="font-label-caps text-xs text-on-surface-variant/60">
          © 2026 Airyn Vishnevsky. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
