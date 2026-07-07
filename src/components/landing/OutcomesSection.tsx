import { OUTCOMES } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function OutcomesSection() {
  return (
    <section className="relative overflow-hidden border-y border-outline-variant/20 bg-surface-container-low py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-charcoal md:text-7xl">
            Como você sairá da experiência
          </h2>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>Cada pessoa vive o Existe Mais de um jeito.</p>
            <p>
              Por isso, não existe uma transformação pronta. Existe a possibilidade de sair olhando
              para si mesma com mais clareza, mais espaço e novas possibilidades.
            </p>
            <p className="font-semibold text-charcoal">Você pode sair:</p>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {OUTCOMES.map((outcome) => (
            <div
              key={outcome.title}
              className={`border-l-4 bg-surface p-10 shadow-soft transition-transform duration-300 hover:-translate-y-1 ${outcome.borderColor}`}
            >
              <div className="flex items-start gap-6">
                <span className={`material-symbols-outlined text-4xl ${outcome.iconColor}`}>
                  {outcome.icon}
                </span>
                <div className="text-left">
                  <h3 className="mb-3 font-headline-md text-2xl">{outcome.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{outcome.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
