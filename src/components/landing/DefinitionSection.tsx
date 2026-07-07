import { Reveal } from '../ui/Reveal'

export function DefinitionSection() {
  return (
    <section className="overflow-hidden bg-surface py-section-gap-desktop" id="definition">
      <div className="relative mx-auto max-w-container-max px-gutter">
        <div className="absolute -right-20 -top-20 opacity-5">
          <span className="font-display-lg text-[200px] leading-none">EXISTE</span>
        </div>

        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mb-16 font-display-lg text-display-lg-mobile md:text-display-lg">
            O que é o Existe Mais?
          </h2>

          <div className="space-y-8">
            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              O Existe Mais é um workshop online e ao vivo criado por uma psicóloga especialista em
              Psicologia Positiva para pessoas que desejam ampliar a forma como enxergam a si
              mesmas.
            </p>

            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              Ao longo da experiência, você será conduzida por vivências que unem ciência, reflexão,
              criatividade e diálogo em um ambiente seguro e acolhedor.
            </p>

            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              O objetivo não é expor sua história, mas criar experiências que permitam perceber
              capacidades e possibilidades que muitas vezes ficaram escondidas entre as exigências da
              rotina e a forma como aprendemos a olhar para nós mesmos.
            </p>

            <p className="border-l-4 border-leather pl-8 font-headline-md text-headline-md leading-relaxed text-charcoal">
              Porque, às vezes, não precisamos nos tornar outra pessoa. Precisamos voltar a
              enxergar aquilo que continua existindo em nós.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
