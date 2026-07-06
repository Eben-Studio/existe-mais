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
            Quem conduz
          </span>
          <h2 className="mb-8 font-display-lg text-display-lg-mobile md:text-headline-md">
            Airyn Vishnevsky
          </h2>
          <div className="space-y-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
            <p>
              Há mais de uma década, Airyn dedica sua vida a investigar as profundezas da alma
              humana através da arte, da filosofia e da presença contemplativa. Sua abordagem
              mistura rigor intelectual com uma suavidade acolhedora.
            </p>
            <p>
              Fundadora do movimento Existe Mais, ela acredita que a verdadeira revolução começa na
              escala do indivíduo, quando este decide não mais aceitar uma vida rasa em troca de
              uma falsa segurança.
            </p>
            <div className="pt-8">
              <span className="this-reality text-4xl text-leather">Airyn Vishnevsky</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
