import { INTEREST_LIST_URL } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-sand py-section-gap-desktop" id="pricing">
      <div className="mx-auto max-w-container-max px-gutter text-center">
        <Reveal>
          <h2 className="mb-6 font-display-lg text-display-lg-mobile md:text-display-lg">
            Existe mais disponível em você.
          </h2>
          <p className="mb-6 font-accent-detail text-leather">
            A pergunta é: quanto desse &lsquo;mais&rsquo; tem encontrado espaço na sua vida?
          </p>
          <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            Espero que, ao final dessa experiência, você volte para a sua rotina não como alguém
            diferente, mas enxergando possibilidades que já estavam aí.
          </p>

          <div className="relative mx-auto max-w-2xl border border-outline/20 bg-surface px-6 py-12 sm:px-12 md:p-20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-leather px-6 py-2 font-label-caps text-label-caps uppercase text-surface">
              Lista de interesse
            </div>

            <h3 className="mb-6 font-headline-md text-headline-md text-charcoal">
              Em breve, novas datas.
            </h3>

            <p className="mx-auto mb-10 max-w-sm font-body-md text-body-md text-on-surface-variant">
              Inscreva-se na lista de interesse para receber informações sobre as próximas turmas do Existe Mais.
            </p>

            <a
              href={INTEREST_LIST_URL}
              className="inline-block w-full bg-primary-container px-6 py-6 font-label-caps text-label-caps uppercase tracking-widest text-on-primary-container shadow-soft transition-all duration-300 hover:scale-105"
            >
              Quero entrar na lista de interesse
            </a>

            <p className="mt-6 font-body-md text-body-md text-on-surface-variant">
              Fale conosco pelo WhatsApp para registrar seu interesse.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
