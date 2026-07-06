import { Reveal } from '../ui/Reveal'

export function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden border-y border-outline-variant/20 bg-surface-container-low py-section-gap-desktop"
      id="philosophy"
    >
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto mb-20 max-w-4xl text-center">
          <span className="mb-6 block font-label-caps text-label-caps uppercase tracking-[0.3em] text-leather">
            O Ponto de Partida
          </span>
          <h2 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-charcoal md:text-7xl">
            Talvez você conheça esta sensação...
          </h2>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Um espaço de pausa e investigação para levar você do ruído mental à clareza do
            coração, devolvendo o protagonismo da sua própria história.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <div className="h-px w-16 bg-leather opacity-40" />
            <p className="font-accent-detail text-accent-detail italic leading-relaxed text-charcoal">
              &ldquo;O convite é para o essencial. Menos ruído, mais ressonância.&rdquo;
            </p>
          </div>
          <div>
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Desenhamos um espaço seguro onde o silêncio não é vazio, mas fértil. Onde cada
              palavra e cada exercício editorial servem como um espelho para sua própria
              potência.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
