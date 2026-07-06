import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay }: RevealProps) {
  const style = delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
