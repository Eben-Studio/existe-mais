import { Reveal } from '../ui/Reveal'
import logo from '../../assets/foto_principal.jpg'

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center bg-ice pb-section-gap-desktop pt-32">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 px-gutter md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <h1 className="mb-8 font-display-lg text-display-lg-mobile leading-[1.1] -tracking-[0.03em] text-charcoal md:text-display-lg">
            Existe mais disponível em você do que você imagina.
          </h1>
          <p className="mb-6 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
            Uma experiência online e ao vivo para reconhecer recursos, ampliar possibilidades e
            voltar a ocupar mais espaço na própria história.
          </p>
          <p className="mb-12 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
            Em apenas duas horas, você viverá uma experiência construída para ampliar a forma como
            percebe a si mesma e descobrir que, muitas vezes, aquilo que procura já existe. Só
            precisa voltar a ganhar espaço.
          </p>
          <a
            className="inline-block rounded bg-primary-container px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest text-on-primary-container transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            href="#pricing"
          >
            Quero viver essa experiência
          </a>
        </Reveal>

        <Reveal className="relative md:col-span-6" delay={200}>
          <div className="aspect-[4/5] border border-outline/20 bg-sand p-4">
            <img
              className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
              src={logo}
              alt="Luz natural entrando por uma janela ampla, sugerindo abertura e possibilidade"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden border border-outline/10 bg-ice p-8 md:block">
            <span className="this-reality text-accent-detail text-leather">
              Só precisa voltar a ganhar espaço.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
