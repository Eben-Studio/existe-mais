import { FACILITATOR_CREDENTIALS } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'
import quem_conduz from '../../assets/foto_quem_conduz.jpeg'

export function FacilitatorSection() {
  return (
    <section className="bg-ice py-section-gap-desktop" id="facilitator">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 px-gutter md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="border border-outline/10 bg-surface p-4 shadow-soft">
            <img
              className="h-full w-full object-cover"
              src={quem_conduz}
              alt="Airyn Vishnevsky, facilitadora do workshop Existe Mais"
            />
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={200}>
          <span className="mb-4 block font-label-caps text-label-caps uppercase text-leather">
            Quem conduz essa experiência
          </span>
          <h2 className="mb-8 font-display-lg text-display-lg-mobile md:text-headline-md">
            Airyn Vishnevsky
          </h2>
          <div className="space-y-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
            <p>
              Airyn Vishnevsky é psicóloga, especialista em Psicologia Positiva, comunicadora e
              facilitadora de experiências em grupo.
            </p>
            <p>
              Ao longo da sua trajetória reuniu Psicologia, Comunicação e Teatro em uma forma
              própria de conduzir experiências, integrando conhecimento científico e vivências
              significativas.
            </p>
            <p>
              Acredita que compreender é importante. Mas que é a experiência que, muitas vezes,
              transforma a forma como nos enxergamos.
            </p>

            <div className="border-t border-outline-variant/20 pt-8">
              <p className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-leather">
                Formação e trajetória
              </p>
              <ul className="space-y-3">
                {FACILITATOR_CREDENTIALS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leather" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
