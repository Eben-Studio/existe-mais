import { Reveal } from '../ui/Reveal'

export function PropositionSection() {
  return (
    <section className="border-y border-outline-variant/20 bg-sand py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="text-center md:col-span-8 md:col-start-3">
              <h2 className="mb-8 font-display-lg text-display-lg-mobile leading-tight md:text-headline-md">
                E se o próximo passo não fosse se tornar outra pessoa, mas finalmente habitar quem
                você já é?
              </h2>
              <div className="mx-auto mb-8 h-1 w-16 bg-charcoal" />
              <p className="font-body-lg text-body-lg text-charcoal/80">
                O Workshop Existe Mais é um portal para a sua própria presença. Uma experiência ao
                vivo, focada na transformação através da percepção.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
