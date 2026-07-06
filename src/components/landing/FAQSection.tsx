import { useState } from 'react'
import { FAQ_ITEMS } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="relative overflow-hidden border-y border-outline-variant/20 bg-surface-container-low py-section-gap-desktop">
      <div className="mx-auto max-w-3xl px-gutter">
        <Reveal>
          <h2 className="mb-12 text-center font-headline-md text-headline-md">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div key={item.question} className="rounded border border-outline-variant/30">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-ice"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-body-lg font-semibold">{item.question}</span>
                    <span
                      className="material-symbols-outlined transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="font-body-md text-on-surface-variant">{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
