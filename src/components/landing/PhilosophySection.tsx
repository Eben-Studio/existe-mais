import { Reveal } from '../ui/Reveal'

export function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden border-y border-outline-variant/20 bg-surface-container-low py-section-gap-desktop"
      id="philosophy"
    >
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-charcoal md:text-7xl">
            Talvez você conheça essa sensação
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl space-y-6">
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Você segue dando conta. Cumpre seus compromissos. Resolve problemas. Cuida das pessoas
            que ama. Continua crescendo.
          </p>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Por fora, a vida acontece.
          </p>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Mas, por dentro, existe uma pergunta difícil de explicar:
          </p>
          <p className="font-accent-detail text-accent-detail italic leading-relaxed text-charcoal">
            &ldquo;Em que momento algumas partes de mim começaram a ocupar tão pouco
            espaço?&rdquo;
          </p>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Essas partes nem sempre desaparecem. Às vezes, apenas deixam de ser percebidas. E,
            quando isso acontece, começamos a acreditar que elas deixaram de existir.
          </p>
          <p className="font-headline-md text-headline-md leading-relaxed text-charcoal">
            E se existisse mais disponível em você do que consegue enxergar hoje?
          </p>
        </Reveal>
      </div>
    </section>
  )
}
