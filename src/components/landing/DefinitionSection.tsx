import { Reveal } from '../ui/Reveal'

const NOT_ITEMS = [
  'Não é uma palestra.',
  'Não é um curso tradicional.',
  'Não é uma terapia em grupo.',
] as const

export function DefinitionSection() {
  return (
    <section className="overflow-hidden bg-surface py-section-gap-desktop" id="definition">
      <div className="relative mx-auto max-w-container-max px-gutter">
        <div className="absolute -right-20 -top-20 opacity-5">
          <span className="font-display-lg text-[200px] leading-none">EXISTE</span>
        </div>

        <Reveal>
          <span className="mb-4 block font-label-caps text-label-caps uppercase tracking-[0.2em] text-leather">
            Manifesto
          </span>
          <h2 className="mb-12 font-display-lg text-display-lg-mobile md:text-display-lg">
            O que é o Existe Mais?
          </h2>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="space-y-6 md:col-span-2">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                    O Existe Mais é um workshop online e ao vivo que integra Psicologia Positiva e
                    vivências cuidadosamente conduzidas para ampliar a forma como cada participante
                    percebe a si mesma e suas possibilidades.
                  </p>
                  <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                    Mais do que transmitir conhecimento, a proposta é criar experiências que
                    favoreçam novas perspectivas sobre a própria história, fortaleçam a conexão com
                    capacidades já existentes e inspirem novas formas de agir diante da vida.
                  </p>
                </div>

                <div className="flex flex-col justify-center border border-outline-variant/30 bg-ice p-10">
                  <ul className="space-y-4">
                    {NOT_ITEMS.map((item) => (
                      <li key={item} className="flex items-center gap-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-leather" />
                        <span className="font-body-md text-body-md text-on-surface-variant">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-outline-variant/20 pt-8">
                    <h3 className="font-headline-md text-headline-md italic text-charcoal">
                      É uma experiência.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
