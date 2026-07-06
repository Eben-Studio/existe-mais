import { Reveal } from '../ui/Reveal'

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-sand py-section-gap-desktop" id="pricing">
      <div className="mx-auto max-w-container-max px-gutter text-center">
        <Reveal>
          <h2 className="mb-8 font-display-lg text-display-lg-mobile md:text-display-lg">
            Existe mais disponível em você do que você imagina.
          </h2>
          <p className="mb-12 font-accent-detail text-leather">
            Inscrições abertas 
          </p>

          <div className="relative inline-block border border-outline/20 bg-surface p-12 md:p-20">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-leather px-6 py-1 font-label-caps text-label-caps uppercase text-surface">
              Investimento
            </div>

            <div className="mb-8 flex items-baseline justify-center gap-2">
              <span className="font-body-lg text-charcoal/60">R$</span>
              <span className="font-headline-md text-7xl">47</span>
              <span className="font-body-md text-charcoal/60">,00</span>
            </div>

            <p className="mx-auto mb-12 max-w-sm font-body-md text-on-surface-variant">
              Acesso ao workshop ao vivo
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href = 'https://checkout.nubank.com.br/lYSjCXDb8sfjdads';
              }}
              className="w-full bg-primary-container px-12 py-6 font-label-caps text-label-caps uppercase tracking-widest text-on-primary-container shadow-soft transition-all duration-300 hover:scale-105"
            >
              Garantir minha vaga agora
            </button>

            <p className="mt-8 flex items-center justify-center gap-2 text-label-caps uppercase tracking-widest text-leather opacity-60">
              <span className="material-symbols-outlined text-sm">lock</span>
              Pagamento Seguro
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
