import { PILLARS } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function PillarsSection() {
  return (
    <section className="bg-ice py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mb-20 text-center">
          <h2 className="font-headline-md text-headline-md">Os três pilares da jornada</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              className={`group border border-outline/10 bg-surface p-10 transition-all duration-500 ${pillar.hoverBorder}`}
              delay={index * 100}
            >
              <div
                className={`mb-8 flex h-12 w-12 items-center justify-center bg-sand transition-colors duration-500 ${pillar.iconColor} ${pillar.iconBg}`}
              >
                <span className="material-symbols-outlined">{pillar.icon}</span>
              </div>
              <h3 className="mb-4 font-headline-md text-[24px]">{pillar.title}</h3>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
