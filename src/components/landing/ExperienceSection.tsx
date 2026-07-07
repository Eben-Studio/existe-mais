import { Reveal } from '../ui/Reveal'

export function ExperienceSection() {
  return (
    <section
      className="border-y border-outline-variant/20 bg-surface-container-low py-section-gap-desktop"
      id="experience"
    >
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display-lg text-display-lg-mobile md:text-headline-md">
            Como acontece a experiência
          </h2>

          <div className="space-y-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            <p>
              O Existe Mais foi desenhado para ampliar a forma como você percebe a si mesma.
            </p>
            <p>
              Ao longo de aproximadamente duas horas, você viverá experiências que combinam
              reflexão, imaginação, criatividade e diálogo.
            </p>
            <p>
              Você não precisa saber desenhar, falar em público ou compartilhar algo que não
              queira. Participa no seu ritmo.
            </p>
            <p className="font-accent-detail text-accent-detail italic text-charcoal">
              Algumas percepções não surgem quando apenas pensamos sobre elas. Elas aparecem quando
              nos permitimos vivê-las.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
