import { SCIENCE_AREAS } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function ScienceSection() {
  return (
    <section className="border-y border-outline-variant/20 bg-sand py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-display-lg text-display-lg-mobile md:text-headline-md">
            A ciência por trás da experiência
          </h2>
          <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Toda experiência do Existe Mais foi construída a partir de conhecimentos consolidados
            da Psicologia.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {SCIENCE_AREAS.map((area) => (
              <span
                key={area}
                className="border border-outline-variant/30 bg-surface px-4 py-2 font-label-caps text-label-caps text-on-surface-variant"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="font-body-lg text-body-lg italic text-charcoal/80">
            Aqui, a ciência não aparece como aula. Ela aparece na forma como cada experiência foi
            pensada.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
