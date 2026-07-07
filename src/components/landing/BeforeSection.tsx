import { BEFORE_ITEMS, WORKSHOP_DATE, WORKSHOP_TIME } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function BeforeSection() {
  return (
    <section className="bg-surface py-section-gap-desktop">
      <div className="mx-auto max-w-container-max px-gutter">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center font-headline-md text-headline-md">
            Antes de nos encontrarmos
          </h2>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border border-outline-variant/30 bg-ice p-8 text-center">
              <span className="material-symbols-outlined mb-4 block text-3xl text-leather">
                calendar_month
              </span>
              <p className="mb-2 font-label-caps text-label-caps uppercase tracking-widest text-leather">
                Data
              </p>
              <p className="font-headline-md text-headline-md text-charcoal">{WORKSHOP_DATE}</p>
            </div>

            <div className="border border-outline-variant/30 bg-ice p-8 text-center">
              <span className="material-symbols-outlined mb-4 block text-3xl text-leather">
                schedule
              </span>
              <p className="mb-2 font-label-caps text-label-caps uppercase tracking-widest text-leather">
                Horário
              </p>
              <p className="font-headline-md text-headline-md text-charcoal">{WORKSHOP_TIME}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Duração: 2 horas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BEFORE_ITEMS.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 border border-outline-variant/20 bg-surface p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-sand text-leather">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <p className="font-body-md text-body-md leading-snug text-on-surface-variant">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
