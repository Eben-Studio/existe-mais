import { Reveal } from '../ui/Reveal'

export function PropositionSection() {
  return (
    <section className="border-y border-outline-variant/20 bg-sand py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="text-center md:col-span-8 md:col-start-3">
              <h2 className="mb-8 font-display-lg text-display-lg-mobile leading-tight md:text-headline-md">
                O que torna essa experiência diferente?
              </h2>
              <div className="mx-auto mb-8 h-1 w-16 bg-charcoal" />
              <div className="space-y-6 text-left font-body-lg text-body-lg text-charcoal/80">
                <p>
                  Durante muito tempo, aprendemos a acreditar que crescer significava nos tornar
                  alguém diferente.
                </p>
                <p>O Existe Mais parte de outra possibilidade.</p>
                <p>
                  Talvez crescer também seja reconhecer e ampliar aquilo que já existe em você.
                </p>
                <p>
                  A experiência foi desenhada para que novas percepções surjam de forma natural, não
                  apenas por meio de explicações, mas também por aquilo que você vive durante o
                  encontro.
                </p>
                <p>
                  Porque compreender é importante. Mas viver uma experiência capaz de transformar
                  essa compreensão costuma fazer toda a diferença.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
