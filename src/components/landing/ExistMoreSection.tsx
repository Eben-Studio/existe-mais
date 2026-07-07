import { EXISTE_MAIS_ITEMS } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function ExistMoreSection() {
  return (
    <section className="bg-ice py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display-lg text-display-lg-mobile md:text-headline-md">
            Existe mais
          </h2>

          <ul className="mb-12 space-y-4">
            {EXISTE_MAIS_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leather" />
                <span className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 text-center">
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              O Existe Mais não convida você a encontrar uma nova versão de si.
            </p>
            <p className="font-accent-detail text-accent-detail italic text-charcoal">
              Convida você a reconhecer que existem partes suas esperando apenas mais espaço para
              existir.
            </p>
            <a
              className="mt-8 inline-block rounded bg-primary-container px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary-container transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              href="#pricing"
            >
              Quero reservar minha vaga
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
